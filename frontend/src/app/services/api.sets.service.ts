
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Card} from "../../card-interface";
import { Observable } from 'rxjs';
import { Set } from '../../set-interface';


@Injectable({
  providedIn: 'root',
})
export class ApiSetsService {
  constructor(private http: HttpClient) {}

  createSets(cards: Card[], setName: string, username: string){
    console.log(`http://localhost:8080/users/${username}/addSet/${setName}`);
    return this.http.post(`http://localhost:8080/users/${username}/addSet/${setName}`,cards);
  }

  getSets(username: string): Observable<string[]> {
    console.log("User:", username);
    console.log(`http://localhost:8080/users/${username}/sets`);
    return this.http.get<string[]>(`http://localhost:8080/users/${username}/sets`);
  }

  getCards(username: string, setName: string): Observable<Card[]> {
    const parentSet = username + "-" + setName;
    console.log(`http://localhost:8080/flashcards/findSetOfCards/${parentSet}`);
    return this.http.get<Card[]>(`http://localhost:8080/flashcards/findSetOfCards/${parentSet}`);
  }
}
