import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  authorizationToken: string = '';
  constructor(private http: HttpClient, private auth: AuthService) {
    this.auth.isAuthorized$.subscribe(data => {
      this.authorizationToken = data; 
    })
   }

  getAllAuthors() {
    return this.http.get('http://localhost:3000/authors/all');
  }

  addAuthor(authorName: string) {
    return this.http.post('http://localhost:3000/authors/add', { name: authorName }, {
      headers: { Authorization: this.authorizationToken },
    })
  }
}
