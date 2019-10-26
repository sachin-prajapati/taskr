import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  name:any;
  tk:any;

  constructor(private serverservice: ServerService,
              private route: ActivatedRoute,
              private router: Router,) { }

  ngOnInit() {
    this.name = this.route.snapshot.params.name;
  }

  Verify(form : NgForm) {
    const value = form.value;
    // console.log(this.id);
    this.serverservice.verifyUser(value.otp, this.name)
    .subscribe(
      (response) =>{ 
        this.tk = response ;
        console.log(this.tk);
        // this.name = response;
        // console.log(this.name.name);
        // localStorage.setItem('token', this.tk.token);
        // localStorage.setItem('name',this.name.name);
        // this.router.navigate(['/']);
      },
      (error) =>console.log(error), 
    );
  }

}
