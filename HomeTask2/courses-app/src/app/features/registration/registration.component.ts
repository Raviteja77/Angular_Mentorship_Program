import { Component, OnInit } from '@angular/core';
import { buttonText } from '../../shared/constants';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/custom_directives/emailValidator/emailvalidator.directive';
import { AuthFacade } from 'src/app/auth/store/auth.facade';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:FormGroup;

  constructor(private formBuilder: FormBuilder, private authFacade: AuthFacade) {
    this.user = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
      email: this.formBuilder.control('', [Validators.required, emailValidator()]),
      password: this.formBuilder.control('', [Validators.required]),
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
    this.authFacade.register(this.user.value); 
  }

}
