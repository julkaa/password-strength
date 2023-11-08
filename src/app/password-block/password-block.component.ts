import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'password-block',
  templateUrl: './password-block.component.html',
  styleUrls: ['./password-block.component.scss']
})
export class PasswordBlockComponent {
  submitted = false;
  complete = false;
  passwordIsVisible = false;

  signupForm = new FormGroup({
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
    ]),
  });

  onSubmit(): void {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }

    setTimeout((): void => {
      this.signupForm.reset();
      this.complete = true;
    }, 1000);
  }
}
