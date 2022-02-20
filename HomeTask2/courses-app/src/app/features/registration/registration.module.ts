import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailvalidatorDirective } from 'src/app/custom_directives/emailValidator/emailvalidator.directive';
import { ToggleDirective } from 'src/app/custom_directives/toggle/toggle.directive';
import { CustomDirectivesModule } from 'src/app/custom_directives/custom-directives.module';


@NgModule({
  declarations: [
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule,
    CustomDirectivesModule
  ],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
