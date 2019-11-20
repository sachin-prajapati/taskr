import { Component, OnInit, ViewChild } from '@angular/core';
import { Lists } from './list.model';
import { ListService } from './list.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServerService } from '../services/server.service';
import { Cards } from './card.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @ViewChild('f', {static:false}) editBoard : NgForm;
  @ViewChild('fcard', {static:false}) editCard : NgForm;
  @ViewChild('fcardduedate', {static:false}) editDueDate : NgForm;

  lists:Lists[];
  wantaddlist=false;
  boardid:any;
  res:any;
  adddesc=false;
  update=false;
  cards:Cards[];
  bookmark=false;
  wantaddcard=false;
  listId:number;
  load=false;
  updatecards=false;
  cardName:string;
  cardDescription:string;
  cardPriority:string;
  clistId:any; //for card update
  cardId:any; //for card update
  activity:string[]=[];
  showactivity=false;
  boardMembers:string[]=[];
  error=false;
  carddueDate:string;
  carddueTime:string;
  cardreminderBefore:string;
  err:any;
  errorMsg:any;

  constructor(private listsservice:ListService,
              // private cardsservice:CardService,
              private serverservice:ServerService,
              private route:ActivatedRoute,
              private router:Router,) { }

  ngOnInit() {
    this.load=true;
    this.lists = this.listsservice.getlists();
    this.boardid = this.route.snapshot.params.id;

    this.serverservice.getBoarddetails(this.boardid)
    .subscribe(
      (response) => {
        console.log(response);
        this.res=response;
        this.lists=this.res.lists;
        this.activity=this.res.activities;
        this.boardMembers=this.res.boardMembers;
        // console.log(this.activity);
        this.bookmark=this.res.bookmark;
        // console.log(this.editBoard);
        this.editBoard.setValue({
          bName:this.res.bName,
          description:this.res.description,
        })
        this.load=false;
      },
      (error) => {
        console.log(error);
        this.load=false;
        this.error=true;
      }
    )
  }

  updateboard() {
    this.update=true;
  }

  showinput() {
    this.wantaddlist=true;
  }

  showinputcard(lid) {
    this.wantaddcard=true;
    this.listId=lid;
    console.log(this.listId);
  }

  hideinput() {
    this.wantaddlist=false;
  }

  addlist(form:NgForm) {
    this.load=true;
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
        this.load=false;
        this.error=true;
      }
    )

    this.serverservice.getBoarddetails(this.boardid)
    .subscribe(
      (response) => {
        console.log(response);
        this.res=response;
        this.lists=this.res.lists;
        console.log(this.res.lists[1].cards);
        this.bookmark=this.res.bookmark;
        this.editBoard.setValue({
          bName:this.res.bName,
          description:this.res.description,
        })
        this.load=false;
      },
      (error) => {
        console.log(error);
        this.load=false;
        this.error=true;
      }
    )

  }

  addcard(form:NgForm) {
    this.load=true;
    console.log(this.listId);
    this.wantaddcard=false;
    const value = form.value;
    this.serverservice.addCard(value.cname, this.listId, this.boardid)
    .subscribe(
      (response) => {
        console.log(response);
        // this.lists.push(value);
      },
      (error) => {
        console.log(error);
        this.load=false;
        this.error=true;
      }
    )

    this.serverservice.getBoarddetails(this.boardid)
    .subscribe(
      (response) => {
        console.log(response);
        this.res=response;
        this.lists=this.res.lists;
        // console.log(this.res.lists[1].cards);
        this.bookmark=this.res.bookmark;
        this.editBoard.setValue({
          bName:this.res.bName,
          description:this.res.description,
        })
        this.load=false;
      },
      (error) => {
        console.log(error);
        this.load=false;
        this.error=true;
      }
    )
  }

  adddescription() {
    this.adddesc = true;
  }

  hideinputdesc() {
    this.adddesc = false;
  }

  hidecardinput() {
    this.wantaddcard=false;
  }

  updatedetailsboard(form:NgForm) {
    this.load=true;
    const value = form.value;
    console.log(value);
    this.serverservice.updateBoard(value.bName,value.description,this.boardid)
    .subscribe(
      (response) => {
        console.log(response);
        this.load=false;
      },
      (error) => {
        console.log(error);
        this.load=false;
        this.error=true;
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
        this.error=true;
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
        this.error=true;
      },
    )
  }

  expandcard(listId,cardId,cardName,cardDescription,cardPriority,carddueDate,carddueTime,cardreminderBefore) {
    // console.log(listId);
    // console.log(cardId);
    // console.log(cardName);
    // console.log(cardDescription);
    // console.log(cardPriority);
    this.updatecards=true;
    this.clistId=listId;
    this.cardId=cardId;
    this.cardName=cardName;
    this.cardDescription=cardDescription;
    this.cardPriority=cardPriority;
    this.carddueDate=carddueDate;
    this.carddueTime=carddueTime;
    this.cardreminderBefore=cardreminderBefore;
    setTimeout( () => {
      this.editCard.setValue({
        cname:this.cardName,
        description:this.cardDescription,
        priority:this.cardPriority,
      })
    },1000);

    setTimeout( () => {
      this.editDueDate.setValue({
        dueDate:this.carddueDate,
        dueTime:this.carddueTime,
        reminderBefore:this.cardreminderBefore,
      })
    },1000)
  }

  deletecard() {
    this.load=true;
    this.serverservice.deletecard(this.boardid,this.clistId,this.cardId)
    .subscribe(
      (response) => {
        console.log(response);
        this.updatecards=false;
      },
      (error) => {
        console.log(error);
        this.load=false;
        this.error=true;
      }
    )

    this.serverservice.getBoarddetails(this.boardid)
    .subscribe(
      (response) => {
        console.log(response);
        this.res=response;
        this.lists=this.res.lists;
        this.activity=this.res.activities;
        this.boardMembers=this.res.boardMembers;
        // console.log(this.activity);
        this.bookmark=this.res.bookmark;
        this.load=false;
      },
      (error) => {
        console.log(error);
        this.load=false;
        this.error=true;
      }
    )
  }
  

  updatecard(form:NgForm) {
    this.load=true;
    const value = form.value;
    this.serverservice.updateCard(value.cname,value.description,value.priority,this.boardid,this.clistId,this.cardId)
    .subscribe(
      (response) => {
        console.log(response);
        this.updatecards=false;
      },
      (error) => {
        console.log(error);
        this.error=true;
      }
    )

    this.serverservice.getBoarddetails(this.boardid)
    .subscribe(
      (response) => {
        // console.log(response);
        this.res=response;
        this.lists=this.res.lists;
        this.activity=this.res.activities;
        // console.log(this.activity);
        // console.log(this.res.lists[1].cards);
        this.bookmark=this.res.bookmark;
        this.load=false;
      },
      (error) => {
        console.log(error);
        this.load=false;
        this.error=true;
      }
    )
  }

  showActivity() {
    this.showactivity=true;
  }

  hideactivity() {
    this.showactivity=false;
  }

  addmember(form:NgForm) {
    this.load=true;
    const value = form.value;
    this.serverservice.addMemberToBoard(value.name,this.boardid)
    .subscribe(
      (response) => {
        console.log(response);
        form.reset();
      },
      (error) => {
        console.log(error);
        this.load=false;
        form.reset();
        this.err=error;
        this.errorMsg=this.err.error.message;
        this.error=true;
      }
    )

    this.serverservice.getBoarddetails(this.boardid)
    .subscribe(
      (response) => {
        console.log(response);
        this.res=response;
        this.lists=this.res.lists;
        this.activity=this.res.activities;
        this.boardMembers=this.res.boardMembers;
        // console.log(this.activity);
        // console.log(this.res.lists[1].cards);
        this.bookmark=this.res.bookmark;
        this.load=false;
      },
      (error) => {
        console.log(error);
        this.load=false;
        this.error=true;
      }
    )
  }

  cardduedate(form:NgForm) {
    const value = form.value;
    console.log(value)
    this.serverservice.setduedate(value.dueDate,value.dueTime,value.reminderBefore,this.boardid,this.clistId,this.cardId)
    .subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
    )
  }

  ok() {
    this.error=false;
  }

}
