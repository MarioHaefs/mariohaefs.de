import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private scrollService: ScrollService) { }


  scrollToComponent(componentId: string) {
    this.scrollService.scrollToComponent(componentId);
  }

}
