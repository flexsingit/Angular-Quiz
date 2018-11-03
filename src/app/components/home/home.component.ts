import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeleteComponent } from './delete/delete.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private postService: PostService, public deleteDialog: MatDialog) { }
  posts;
  isLoading: Boolean = true;

  ngOnInit() {
    this.postService.getPost().subscribe(response => {
      this.posts = response;
      this.isLoading = false;
    });
  }

  delete (id, index) {
    const dialogRef = this.deleteDialog.open(DeleteComponent, {
      data: { id : id }
    });
  }

}
