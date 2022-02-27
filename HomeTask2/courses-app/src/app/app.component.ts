import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth/auth.service';
import { SessionStorageService } from './auth/services/session-storage/session-storage.service';
import { buttonText } from './shared/constants';
import { UserStoreService } from './user/services/user-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showModal: boolean = true;

  buttonText = buttonText;

  token: any;
  isAuthorized: string = '';

  constructor(private auth: AuthService, private sessionStore: SessionStorageService, private userStore: UserStoreService) {
    this.userStore.name$.subscribe((data : any) => {
      this.token = data;
    })
    this.auth.isAuthorized$.subscribe((data : any) => {
      this.isAuthorized = data;
    })
  }

  logoutUser(event: any): void {
    const tokenData = this.sessionStore.getToken();
    this.auth.logout(tokenData);
    
  }
}
