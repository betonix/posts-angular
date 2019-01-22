import { Component, Inject, OnInit, ViewEncapsulation } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-modal-post",
  templateUrl: "./modal-post.component.html",
  styleUrls: ["./modal-post.component.scss"]
})
export class ModalPostComponent implements OnInit {
  Form: FormGroup;
  description: string;

  constructor(
    public dialogRef: MatDialogRef<ModalPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.Form = new FormGroup({
      id: new FormControl(this.data.id),
      nome: new FormControl(this.data.nome, [Validators.required]),
      titulo: new FormControl(this.data.titulo, [Validators.required]),
      desc: new FormControl(this.data.desc, [Validators.required]),
      img: new FormControl(this.data.img, [Validators.required])
    });
  }

  savePost() {
    this.dialogRef.close(this.Form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
