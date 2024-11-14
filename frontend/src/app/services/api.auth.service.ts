import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = '';
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<{}> {
    return this.http.get<{ username: string }>(
      `${environment.apiURL}/users/login?username=${email}&password=${password}`
    );
  }
  
  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', this.token);
  }

  getToken() {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('token');
    }
    return "";
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }

  logout() {
    this.token = '';
    localStorage.removeItem('token');
  }
}


