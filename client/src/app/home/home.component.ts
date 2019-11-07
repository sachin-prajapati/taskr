import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  path:any;
  i:number=0;
  imgpath:any;

  constructor(@Inject(DOCUMENT) document,
              private serverservice:ServerService,) { }

  ngOnInit() {
    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100vh',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
          number: {
              value: 80,
          },
          color: {
              value: '#173E43',
          },
          shape: {
              polygon: {
                "nb_sides": 5
              },
          },
          line_linked: {
            "enable": true,
            "distance": 150,
            "color": "#173E43",
            "opacity": 0.5,
            "width": 2
          },
      }
    };

    // this.serverservice.getritikimg()
    // .subscribe(
    //   (response) => {
    //     const j = 0;
    //     // console.log(response);
    //     this.path=response;
    //     console.log(this.path[0].image.split('/')[3]+"/"+this.path[0].image.split('/')[4]+"/"+this.path[0].image.split('/')[5]);
    //     this.imgpath = "https://ef418794.ngrok.io/"+this.path[0].image.split('/')[3]+"/"+this.path[0].image.split('/')[4]+"/"+this.path[0].image.split('/')[5];
    //   },
    //   (error) => {
    //     console.log(error)
    //   },
    // )
  }

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(e) {
  //    if (window.pageYOffset > 50) {
  //      let element = document.getElementById('navigationbar');
  //      element.classList.add('sticky');
  //    } else {
  //     let element = document.getElementById('navigationbar');
  //       element.classList.remove('sticky'); 
  //    }
  // }

}

