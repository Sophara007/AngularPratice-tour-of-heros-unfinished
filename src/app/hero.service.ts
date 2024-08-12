import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Ensure 'of' is imported
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES); // Directly return the observable
  }
}
