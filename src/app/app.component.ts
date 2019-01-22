import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ModalPostComponent } from "./modal-post/modal-post.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  Posts = localStorage.getItem("posts")
    ? JSON.parse(localStorage.getItem("posts"))
    : [];
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  savePost(post) {
    post["id"] = Math.random();
    this.Posts.push(post);
    localStorage.setItem("posts", JSON.stringify(this.Posts));
  }
  deletePost(id) {
    console.log(id);
    this.Posts = this.Posts.filter(item => {
      if (item.id != id) {
        return item;
      }
    });
    localStorage.setItem("posts", JSON.stringify(this.Posts));
  }

  addPost() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {};
    const dialogRef = this.dialog.open(ModalPostComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(post => {
      this.savePost(post);
    });
  }
  editPost(post) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = post;
    const dialogRef = this.dialog.open(ModalPostComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(post => {
      this.savePost(post);
    });
  }
}
