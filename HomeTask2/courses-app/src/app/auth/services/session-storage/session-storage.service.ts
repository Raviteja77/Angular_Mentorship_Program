import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  setToken(token: any): void {
    sessionStorage.setItem('token', token);
  }

  getToken(): any | null {
    return sessionStorage.getItem('token');
  }

  deleteToken(): void {
    sessionStorage.removeItem('token');
  }
}
