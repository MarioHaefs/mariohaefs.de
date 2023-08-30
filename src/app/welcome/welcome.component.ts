import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { trigger, transition, style, animate, state } from '@angular/animations';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('growIn', [
      state('invisible', style({ transform: 'scale(0)' })),
      state('visible', style({ transform: 'scale(1)' })),
      transition('invisible <=> visible', animate('400ms ease-in-out'))
    ])
  ]
})
export class WelcomeComponent implements OnInit {
  state = 'invisible';


  /**
   * triggers fly animation on page view
   */
  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    setTimeout(() => {
      this.state = 'visible';
    }, 0);
  }


  constructor(private scrollService: ScrollService, private renderer: Renderer2, private el: ElementRef) { }


  /**
   * scroll to selected component
   * @param componentId string
   */
  scrollToComponent(componentId: string) {
    this.scrollService.scrollToComponent(componentId);
  }

}
