import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  @Input() post: any;
  @Output() deletePostEvent = new EventEmitter();
  @Output() editPostEvent = new EventEmitter();
  constructor() {}
  ngOnInit() {}

  deletePost(id) {
    this.deletePostEvent.emit(id);
  }
  editPost(post) {
    this.editPostEvent.emit(post);
  }
}
