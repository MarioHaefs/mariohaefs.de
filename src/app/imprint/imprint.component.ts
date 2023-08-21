import { Component } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
  }

}
