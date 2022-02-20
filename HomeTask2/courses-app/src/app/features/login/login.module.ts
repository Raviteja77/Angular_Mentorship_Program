import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { EmailvalidatorDirective } from 'src/app/custom_directives/emailValidator/emailvalidator.directive';
import { ToggleDirective } from 'src/app/custom_directives/toggle/toggle.directive';
import { CustomDirectivesModule } from 'src/app/custom_directives/custom-directives.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule,
    CustomDirectivesModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
