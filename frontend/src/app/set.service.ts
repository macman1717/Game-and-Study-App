import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Set } from '../set-interface';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SetService {

  constructor(private http: HttpClient) {}

  getSets() {
    console.log(`Doing GET request ${environment.apiURL}/api/accepted-stories`);
    return this.http.get<Set[]>(`${environment.apiURL}/api/accepted-stories`);
  }
}
