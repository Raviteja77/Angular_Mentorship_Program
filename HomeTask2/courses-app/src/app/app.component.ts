import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth/auth.service';
import { AuthFacade } from './auth/store/auth.facade';
import { buttonText } from './shared/constants';
import { UserFacade } from './user/store/user.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showModal: boolean = true;

  buttonText = buttonText;

  token: any;
  isAuthorized!: boolean;
  userName: string = '';

  constructor(private auth: AuthService, private authFacade: AuthFacade, private userFacade: UserFacade) {
    this.authFacade.isAuthorized$.subscribe(data => {
      this.isAuthorized = data;
    })
    this.authFacade.getToken$.subscribe(data => {
      this.userFacade.getCurrentUser(data);
    })
    this.userFacade.name$.subscribe(data => {
      this.userName = data;
    })
    this.authFacade.getToken$.subscribe(data => {
      this.token = data;
    })
  }

  logoutUser(): void {
    this.authFacade.logout(this.token)
  }
}
