import { Component, OnInit } from '@angular/core';
import { buttonText } from '../../shared/constants';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/custom_directives/emailValidator/emailvalidator.directive';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.user = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, emailValidator()]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get form() {
    return this.user.controls;
  }

  ngOnInit(): void {}

  buttonText = buttonText;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  passwordVisible: boolean = false;

  toggleVisibile(): void {
    this.passwordVisible = !this.passwordVisible;
    const password = document.getElementById("password");
    const type = password !== null? password.getAttribute("type") === "password" ? "text" : "password": "";
    password !== null? password.setAttribute("type", type): "";
  }

  submitForm(): void {
    console.log(this.user);
  }

}
