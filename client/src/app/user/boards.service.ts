import { Injectable } from '@angular/core';
import { Boards } from './boards.model';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  private boards: Boards[] = [];

  constructor() { }

  getboards() {
    return this.boards.slice();
  }
}
