import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-left',
  templateUrl: './project-left.component.html',
  styleUrls: ['./project-left.component.scss']
})
export class ProjectLeftComponent {
  @Input() imgSrc!: string;
  @Input() title!: string;
  @Input() technologies!: string;
  @Input() description!: string;
}
