import { Injectable } from '@angular/core';
import { Cards } from './card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cards:Cards[] = [
    new Cards('First-Card', 2017-10-08, 'high', 'Description'),
    new Cards('Second-Card', 2017-10-08, 'medium', 'Description2'),
  ]

  constructor() { }

  getcards() {
    return this.cards.slice();
  }
}
