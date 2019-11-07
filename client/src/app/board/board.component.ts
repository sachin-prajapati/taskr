import { Component, OnInit } from '@angular/core';
import { Lists } from './list.model';
import { ListService } from './list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  lists:Lists[];
  wantaddlist=false;

  constructor(private listsservice:ListService,) { }

  ngOnInit() {
    this.lists = this.listsservice.getlists();
  }

  showinput() {
    this.wantaddlist=true;
  }

  addlist(form:NgForm) {
    this.wantaddlist=false;
    const value = form.value;
    console.log(form.value);
    this.lists.push(value);
  }
}
