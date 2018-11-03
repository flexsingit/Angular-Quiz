import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { PostService } from '../services/post.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})

export class AddPostComponent implements OnInit {

  pageTitle = 'ADD NEW POST';
  isUpdate: Boolean = false;
  isLoading: Boolean = false;

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar,
    private router: Router) {
    this.checkRoute();
  }


/** Create Reactive form*/
  form: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required
    ]),
    body: new FormControl('', [
      Validators.required
    ])
  });

   /**
    * Call APi to get data from server if edit route
    */

  getPost(): void {
    this.isLoading = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getSinglePost(id)
    .subscribe(res => {
      this.isLoading = false;
      this.form.controls.title.setValue(res['title']);
      this.form.controls.body.setValue(res['body']);
    });
  }
  /** Dynamic route check edit or add */
  checkRoute(): void  {
    if (this.router ) {
      const url = this.router.url.indexOf('edit-post');
      if (url >= 0) {
        this.pageTitle = 'UPDATE POST';
        this.isUpdate = true;
        this.getPost();
      } else {
        this.isUpdate = false;
      }
    }
  }
/** Show alert message */
  openSnackBar(message): void  {
    this.snackBar.open(message, '', { duration : 4000});
  }
/** Add post */
  addPost(data): void  {
    this.postService.add(data).subscribe(res => {
      this.isLoading = false;
      this.router.navigate(['']);
      this.openSnackBar('Post has been successfully added');
    });
  }
/** Update post  */
  UpdatePost(data): void  {
    this.postService.updatePost(data).subscribe(res => {
      this.isLoading = false;
      this.router.navigate(['']);
      this.openSnackBar('Post has been successfully updated');
    });
  }
  /** On form submit */
  onSubmit(): void  {
      if ( this.form.valid) {
        this.isLoading = true;
        if (this.isUpdate) {
          this.UpdatePost(this.form.value);
        } else {
          this.addPost(this.form.value);
        }
    }
  }
  ngOnInit() {}

}
