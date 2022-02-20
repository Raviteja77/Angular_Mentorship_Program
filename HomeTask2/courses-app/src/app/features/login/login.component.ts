import { Component, OnInit } from '@angular/core';
import { buttonText } from '../../shared/constants';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  user = {
    email: '',
    password: ''
  }

  buttonText = buttonText;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  onFormSubmit(form: NgForm): void {
    console.log(form);
    
  }

}
