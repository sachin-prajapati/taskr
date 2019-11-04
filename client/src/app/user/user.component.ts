import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Boards } from './boards.model';
import { BoardsService } from './boards.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  wantaddboard=false;
  boards:Boards[];
  value:any;

  constructor(private boardsservice: BoardsService,) { }

  ngOnInit() {
    this.name=localStorage.getItem('name');
    this.boards = this.boardsservice.getboards();
  }

  showinput() {
    this.wantaddboard=true;
  }

  addboard(form:NgForm) {
    this.wantaddboard=false;
    this.value = form.value;
    console.log(form.value);
    this.boards.push(this.value);
  }

}
