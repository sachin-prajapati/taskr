import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Boards } from './boards.model';
import { BoardsService } from './boards.service';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  wantaddboard=false;
  boards:Boards[];
  res:any;

  constructor(private boardsservice: BoardsService,
              private serverservice: ServerService,) { }

  ngOnInit() {
    this.name=localStorage.getItem('name');
    this.boards = this.boardsservice.getboards();
    this.serverservice.getUserBoards()
    .subscribe(
      (response) => {
        console.log(response);
        this.res = response;
        this.boards = this.res;
      },
      (error) => {
        console.log(error);
      },
    )
  }

  showinput() {
    this.wantaddboard=true;
  }

  addboard(form:NgForm) {
    this.wantaddboard=false;
    const value = form.value;
    console.log(form.value);
    this.serverservice.addBoard(value.bName)
    .subscribe(
      (response) => {
        console.log(response);
        this.boards.push(value);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  chkid(id:number) {
    console.log(id);
  }

}
