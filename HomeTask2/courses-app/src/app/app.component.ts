import { Component } from '@angular/core';
import { buttonText } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showModal: boolean = true;

  buttonText = buttonText;

  updateModalStatus(event: any): void {
    this.showModal = event;
    console.log(this.showModal);
    
  }
}
