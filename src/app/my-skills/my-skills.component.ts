import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {

  constructor(private scrollService: ScrollService) { }
  

  scrollToComponent(componentId: string) {
    this.scrollService.scrollToComponent(componentId);
  }

}
