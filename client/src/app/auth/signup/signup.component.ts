import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ServerService } from 'src/app/services/server.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  uname:any;
  load=false;

  constructor(private serverservice: ServerService,
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

  onSignup(form : NgForm) {
    console.log(JSON.stringify(form.value));
    const value = form.value;
    this.serverservice.signUpUser(value.fullName,value.userName,value.email,value.password,value.confirmPassword)
    .subscribe(
      (response) => {
        console.log(response);
        this.uname=response;
        console.log(this.uname.userName);
        this.router.navigate(['/verify',this.uname.userName]);
      },
      (error: HttpErrorResponse) =>{
        console.log(error);
      },
    );
  }

}
