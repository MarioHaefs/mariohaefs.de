import { Component, ElementRef } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Renderer2 } from '@angular/core';


@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'],
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


export class MySkillsComponent {
  state = 'invisible';

  constructor(private scrollService: ScrollService, private el: ElementRef, private renderer: Renderer2) {
    this.state = 'invisible';
    this.renderer.listen('window', 'scroll', (event) => {
      this.fadeInAnimation();
    });
  }



  fadeInAnimation() {
    let componentPosition = this.el.nativeElement.offsetTop;
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    let offset = 500;

    if (scrollPosition + offset >= componentPosition) {
      this.state = 'visible';
    }
  }


  /**
   * scroll to selected component
   * @param componentId string
   */
  scrollToComponent(componentId: string) {
    this.scrollService.scrollToComponent(componentId);
  }

}
