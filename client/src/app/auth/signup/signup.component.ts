import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private serverservice: ServerService,) { }

  ngOnInit() {
  }

  onSignup(form : NgForm) {
    console.log(JSON.stringify(form.value));
    const value = form.value;
    this.serverservice.signUpUser(value.fullName,value.userName,value.email,value.password,value.confirmPassword)
    .subscribe(
      (response) => {
        console.log(response);
      },
      (error: HttpErrorResponse) =>{
        console.log(error);
      },
      );
  }

}
