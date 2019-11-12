import { Component, OnInit, ViewChild } from '@angular/core';
import { Lists } from './list.model';
import { ListService } from './list.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServerService } from '../services/server.service';
import { CardService } from './card.service';
import { Cards } from './card.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @ViewChild('f', {static:false}) editBoard : NgForm;

  lists:Lists[];
  wantaddlist=false;
  boardid:any;
  res:any;
  adddesc=false;
  update=false;
  cards:Cards[];
  bookmark=false;

  constructor(private listsservice:ListService,
              // private cardsservice:CardService,
              private serverservice:ServerService,
              private route:ActivatedRoute,
              private router:Router,) { }

  ngOnInit() {
    this.lists = this.listsservice.getlists();
    this.boardid = this.route.snapshot.params.id;

    this.serverservice.getBoarddetails(this.boardid)
    .subscribe(
      (response) => {
        console.log(response);
        this.res=response;
        this.lists=this.res.lists;
        this.bookmark=this.res.bookmark;
        this.editBoard.setValue({
          bName:this.res.bName,
          description:this.res.description,
        })
      },
      (error) => {
        console.log(error);
      }
    )
  }

  updateboard() {
    this.update=true;
  }

  showinput() {
    this.wantaddlist=true;
  }

  hideinput() {
    this.wantaddlist=false;
  }

  addlist(form:NgForm) {
    this.wantaddlist=false;
    const value = form.value;
    this.serverservice.addList(value.name, this.boardid)
    .subscribe(
      (response) => {
        console.log(response);
        this.lists.push(value);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  adddescription() {
    this.adddesc = true;
  }

  hideinputdesc() {
    this.adddesc = false;
  }

  updatedetails(form:NgForm) {
    const value = form.value;
    console.log(value);
    this.serverservice.updateBoard(value.bName,value.description,this.boardid)
    .subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
    )
  }

  addbookmark() {
    this.bookmark = true;
    this.serverservice.bookmark(this.bookmark, this.boardid)
    .subscribe(
      (response) => {
        console.log(response);
        console.log(this.bookmark);
      },
      (error) => {
        console.log(error);
      },
    )
  }

  deletebookmark() {
    this.bookmark = false;
    this.serverservice.bookmark(this.bookmark, this.boardid)
    .subscribe(
      (response) => {
        console.log(response);
        console.log(this.bookmark);
      },
      (error) => {
        console.log(error);
      },
    )
  }
}
