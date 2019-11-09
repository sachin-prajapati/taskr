import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { ServerService } from 'src/app/services/server.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tk:any;
  name:any;
  load=false;
  errormsg:any;
  uid:any;

  constructor(private serverservice : ServerService,
              private router: Router,) { }

  ngOnInit() {
    this.load=false;
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
    });
  }

  onLogin(form : NgForm) {
    this.load=true;
    console.log(JSON.stringify(form.value));
    const value = form.value;
    this.serverservice.logInUser(value.email,value.password)
    .subscribe(
      (response) => {
        console.log(response);
        this.tk = response ;
        // this.name = response;
        // console.log(this.name.name);
        if(this.tk.message != "Please verify your email address to login.") {
        localStorage.setItem('token', this.tk.token);
        localStorage.setItem('name',this.tk.userName);
        this.router.navigate(['/user']);
        }
        if(this.tk.message === "Please verify your email address to login.") {
          this.router.navigate(['/verify',this.tk.userName]);
        }
        this.load=false;
      },
      (error: HttpErrorResponse) =>{
        console.log(error);
        this.load=false;
        this.errormsg = error.error.message;
        if(this.errormsg === "Please verify your email address to login.") {
          this.uid = error.error;
          // console.log(this.uid.userName);
          this.router.navigate(['/verify',this.uid.userName])
        this.load=false;
        }
      }
    );
  }

}
