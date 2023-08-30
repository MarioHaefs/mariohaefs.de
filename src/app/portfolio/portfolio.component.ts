import { Component, ElementRef } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Renderer2 } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('fadeInFromLeft', [
      state('invisible', style({ opacity: 0, transform: 'translateX(-100%)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('invisible <=> visible', animate('600ms ease-in-out'))
    ]),
    trigger('fadeInFromRight', [
      state('invisible', style({ opacity: 0, transform: 'translateX(100%)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('invisible <=> visible', animate('600ms ease-in-out'))
    ])
  ]
})


export class PortfolioComponent {
  state = 'invisible';

  fadeInAnimation() {
    let componentPosition = this.el.nativeElement.offsetTop;
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    let offset = 700;
  
    if (scrollPosition + offset >= componentPosition) {
      this.state = 'visible';
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.state = 'invisible';
    this.renderer.listen('window', 'scroll', (event) => {
      this.fadeInAnimation();
    });
  }
}
