import { Component, Input, ElementRef } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-project-right',
  templateUrl: './project-right.component.html',
  styleUrls: ['./project-right.component.scss'],
  animations: [
    trigger('fadeInFromLeft', [
      state('invisible', style({ opacity: 0, transform: 'translateX(-100%)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('invisible <=> visible', animate('400ms ease-in-out'))
    ]),
    trigger('fadeInFromRight', [
      state('invisible', style({ opacity: 0, transform: 'translateX(100%)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('invisible <=> visible', animate('400ms ease-in-out'))
    ])
  ]
})


export class ProjectRightComponent {
  @Input() imgSrc!: string;
  @Input() title!: string;
  @Input() technologies!: string;
  @Input() description!: string;
  @Input() testLink!: string;
  @Input() gitLink!: string;

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
