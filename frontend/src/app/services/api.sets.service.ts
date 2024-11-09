
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Card} from "../../card-interface";


@Injectable({
  providedIn: 'root',
})
export class ApiSetsService {
  constructor(private http: HttpClient) {}

  createSets(cards: Card[], setName: string, username: string){
    console.log(`http://localhost:8080/users/${username}/addSet/${setName}`);
    return this.http.post(`http://localhost:8080/users/${username}/addSet/${setName}`,cards);
  }

}
