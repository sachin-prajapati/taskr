import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 50) {
       let element = document.getElementById('navigationbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navigationbar');
        element.classList.remove('sticky'); 
     }
  }

}
