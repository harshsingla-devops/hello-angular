import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    // console.log(
    //   `Email is : ${form.value.email} and password is : ${form.value.password}`
    // );
    if (!form.valid) return;
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      //TODO
    } else {
      this.authService.signUp(email, password).subscribe(
        (data) => {
          this.isLoading = false;
          console.log(data);
        },
        (errorMessage) => {
          this.isLoading = false;
          this.error = errorMessage;
          console.log(errorMessage);
        }
      );

      form.reset();
    }
  }
}
