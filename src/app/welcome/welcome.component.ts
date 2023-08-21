import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  constructor(private scrollService: ScrollService) { }

  scrollToComponent(componentId: string) {
    this.scrollService.scrollToComponent(componentId);
  }

}
