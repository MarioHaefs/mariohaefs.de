import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  

  constructor() { }

  
  scrollToComponent(componentId: string) {
    let component = document.getElementById(componentId);
    if (component) {
      let topPosition = component.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  }
}
