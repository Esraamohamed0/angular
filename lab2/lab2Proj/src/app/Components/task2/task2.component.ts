import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  imgSrc = [
    'assets/image/1.jpg',
    'assets/image/2.png',
    'assets/image/3.jpg',
    'assets/image/4.jpg'
  ];
  img="assets/image/1.jpg";
  loc=0;

  imgInterval:any;
  
  prevImage(){
    if(this.loc>0){
      this.loc--;
    this.img = this.imgSrc[this.loc];
    }
  }

  nextImage(){
    if(this.loc<3){
      this.loc++;
      this.img = this.imgSrc[this.loc];
    } 
  }

  slideImage(){
    this.imgInterval = setInterval(() => {
      this.loc++;
      if(this.loc>3){
        this.loc=0;
      }
      this.img = this.imgSrc[this.loc];
    }, 1000);
  }

  stopImage(){
    clearInterval(this.imgInterval);
  }

}
