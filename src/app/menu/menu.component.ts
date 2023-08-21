import { Component, Input } from '@angular/core';
import { ScrollService } from '../scroll.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  activeLink: string = '';
  activeLanguage: string = '';

  constructor(private scrollService: ScrollService) { }


  scrollToComponent(componentId: string) {
    this.scrollService.scrollToComponent(componentId);
  }
  


}
