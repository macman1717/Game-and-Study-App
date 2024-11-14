
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Card} from "../../card-interface";
import { Observable } from 'rxjs';
import { Set } from '../../set-interface';
import {SubmittedCard} from "../../submittedCard-interface";
import {readTsconfig} from "@angular-devkit/build-angular/src/utils/read-tsconfig";


@Injectable({
  providedIn: 'root',
})
export class ApiSetsService {
  constructor(private http: HttpClient) {}

  createSets(cards: SubmittedCard[], setName: string, username: string){
    console.log(`http://localhost:8080/users/${username}/addSet/${setName}`);
    console.log(cards);
    return this.http.post(`http://localhost:8080/users/${username}/addSet/${setName}`,cards).subscribe();
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

  deleteCard(id: string) {
    console.log(`http://localhost:8080/flashcards/deleteCard/${id}`);
    console.log("Deleting card: " + id);
    return this.http.delete(`http://localhost:8080/flashcards/deleteCard/${id}`).subscribe();
  }

  deleteSet(username: string, setName: string) {
    console.log(`http://localhost:8080/users/${username}/deleteSet/${setName}`);
    console.log("Deleting set: " + setName);
    return this.http.delete(`http://localhost:8080/users/${username}/deleteSet/${setName}`).subscribe();
  }
}
