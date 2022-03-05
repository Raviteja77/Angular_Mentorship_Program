import { Component, OnInit } from '@angular/core';
import { buttonText } from '../../shared/constants';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { AuthFacade } from 'src/app/auth/store/auth.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  
  constructor(private authFacade: AuthFacade) { }
  
  ngOnInit(): void {}

  user = {
    email: '',
    password: ''
  }

  buttonText = buttonText;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  onFormSubmit(form: NgForm): void {
    this.authFacade.login(form.form.value);
  }

}
