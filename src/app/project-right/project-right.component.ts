import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-right',
  templateUrl: './project-right.component.html',
  styleUrls: ['./project-right.component.scss']
})
export class ProjectRightComponent {
  @Input() imgSrc!: string;
  @Input() title!: string;
  @Input() technologies!: string;
  @Input() description!: string;
}
