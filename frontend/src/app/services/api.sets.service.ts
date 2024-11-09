
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Card} from "../../card-interface";
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

}
