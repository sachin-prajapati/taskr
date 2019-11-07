import { Injectable } from '@angular/core';
import { Lists } from './list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private lists:Lists[] = [
    new Lists('List 1'),
  ]

  constructor() { }

  getlists() {
    return this.lists.slice();
  }
}
