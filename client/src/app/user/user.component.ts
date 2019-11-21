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
  boardid:number[]=[];
  i:number;
  j:number;
  res:any;
  id:number;
  idb:any;
  load=false;
  error=false;
  success=false;
  shownotifications=false;
  notifications:string[]=[];

  constructor(private boardsservice: BoardsService,
              private serverservice: ServerService,) { }

  ngOnInit() {
    this.load=true;
    this.boards = this.boardsservice.getboards();
    this.serverservice.getUserBoards()
    .subscribe(
      (response) => {
        console.log(response);
        this.res = response;
        this.boards = this.res.boards;
        this.notifications=this.res.notifications;
        this.name=this.res.fullName;
        for(this.i=0; this.i<this.boards.length; this.i++) {
          this.id = this.boards[this.i].id;
          // console.log(this.id);
          for(this.j=this.i; this.j<this.i+1; this.j++) {
            this.boardid.push(this.id);
            // console.log(this.boardid)
          }
        }
        this.load=false;
      },
      (error) => {
        console.log(error);
        this.load=false;
      },
    )
  }

  showinput() {
    this.wantaddboard=true;
  }

  addboard(form:NgForm) {
    this.load=true;
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
        this.load=false;
        this.error=true;
      }
    )

    this.serverservice.getUserBoards()
    .subscribe(
      (response) => {
        console.log(response);
        this.res = response;
        this.boards = this.res.boards;
        for(this.i=0; this.i<this.boards.length; this.i++) {
          this.id = this.boards[this.i].id;
          // console.log(this.id);
          for(this.j=this.i; this.j<this.i+1; this.j++) {
            this.boardid.push(this.id);
            // console.log(this.boardid)
          }
        }
        this.load=false;
        this.success=true;
      },
      (error) => {
        console.log(error);
        this.load=false;
        this.error=true;
      },
    )
  }

  chkid(id:number) {
    console.log(id);
  }

  showNotifications() {
    this.shownotifications=true;
  }

  hideNotifications() {
    this.shownotifications=false;
  }

  ok() {
    this.error=false;
    this.success=false;
  }

}
