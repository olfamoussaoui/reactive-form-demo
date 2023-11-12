import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  bookFormGroup = new FormGroup({
    title: new FormControl(
      null,
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ]),
    description: new FormControl(
      null,
      [
        Validators.required,
        Validators.minLength(25)
      ])
  })


  constructor() {
  }

  onSubmitBook() {
    console.log(this.bookFormGroup.controls.title);
    console.log(this.bookFormGroup.controls.description);
  }

  shouldShowTitleRequiredError() {
    const title = this.bookFormGroup.controls.title;
    return title.touched && title.hasError('required');
  }
}
