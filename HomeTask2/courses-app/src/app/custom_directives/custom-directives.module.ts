import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailvalidatorDirective } from './emailValidator/emailvalidator.directive';
import { ToggleDirective } from './toggle/toggle.directive';

const listOfDirectives = [EmailvalidatorDirective, ToggleDirective]

@NgModule({
  declarations: listOfDirectives,
  imports: [
    CommonModule
  ],
  exports: listOfDirectives,
})
export class CustomDirectivesModule { }
