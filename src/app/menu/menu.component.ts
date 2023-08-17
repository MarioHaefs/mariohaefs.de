import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  activeLink: string = '';
  activeLanguage: string = '';

  scrollToComponent(componentId: string) {
    let component = document.getElementById(componentId);
    if (component) {
      component.scrollIntoView({ behavior: 'smooth' });
    }
  }
  

}
