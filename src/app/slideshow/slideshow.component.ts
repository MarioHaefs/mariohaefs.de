import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['laptop.jpg', 'developer.jpg', 'code.jpg'];
  headlines = [
    'Bring Engineering To The Next Level',
    'Front End Angular Developer',
    'Gratuated At Developer Akademie In Munich']
  currentImage = 0;
  showImage = true;


  ngOnInit() {
    this.updateImage();
  }


  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }
}
