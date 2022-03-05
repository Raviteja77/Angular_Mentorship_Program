import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthFacade } from 'src/app/auth/store/auth.facade';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  authorizationToken: string = '';
  constructor(private http: HttpClient, private authFacade: AuthFacade) {
    this.authFacade.getToken$.subscribe(data => {
      this.authorizationToken = data;
    })
   }

  getAllAuthors() {
    return this.http.get(environment.endpoints.allAuthors);
  }

  addAuthor(authorName: string) {
    return this.http.post(environment.endpoints.addAuthor, { name: authorName }, {
      headers: { Authorization: this.authorizationToken },
    })
  }
}
