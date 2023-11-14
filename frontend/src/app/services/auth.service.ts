import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apikey: string = "http://localhost:3000/auth/login";
  constructor(private http: HttpClient) { }

  adminLogin(admin: any) {
    return this.http.post(this.apikey, admin);
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  logout() {
    localStorage.removeItem('token');
  }
}
