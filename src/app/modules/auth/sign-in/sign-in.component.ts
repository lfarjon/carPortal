import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
  ) {
    this.signInForm = this._formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  signIn() {
    this._authService.SignIn(this.signInForm.value.email, this.signInForm.value.password)
  }

  googleAuth() {
    this._authService.GoogleAuth();
  }
}
