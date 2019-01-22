import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule
} from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { PostComponent } from "./post/post.component";
import { ModalPostComponent } from "./modal-post/modal-post.component";

@NgModule({
  declarations: [AppComponent, PostComponent, ModalPostComponent],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatRippleModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalPostComponent]
})
export class AppModule {}
