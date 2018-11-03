import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HomeComponent } from '../home.component';
import { PostService } from '../../services/post.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  isLoading: Boolean = false;
  constructor(public dialogRef: MatDialogRef<HomeComponent>,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data, private postServices: PostService) { }

  ngOnInit() {
  }

  /** Show alert message */
  openSnackBar(message): void  {
    this.snackBar.open(message, '', { duration: 4000 });
  }
  close(): void  {
    this.dialogRef.close();
  }


  delete(): void  {
    if (this.data && this.data.id) {
      this.isLoading = true;
      this.postServices.delete(this.data.id)
      .subscribe(res => {
        this.isLoading = false;
        this.openSnackBar('Post has been successfully deleted');
        this.dialogRef.close();
      });
    }
  }

}
