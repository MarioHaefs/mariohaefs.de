import { Component, AfterViewInit, Renderer2, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ScrollService } from '../scroll.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {
  activeLink: string = '';
  activeLanguage: string = '';
  adjustment_offset = 250;
  disableScrollCheck: boolean = false;
  mobileMenuActive = false;


  constructor(private scrollService: ScrollService, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  ngAfterViewInit() {
    this.checkActiveLink();
  }


  @HostListener('window:scroll', ['$event'])
  checkActiveLink() {
    if (this.disableScrollCheck) return;
    let scrollPosition = window.pageYOffset + this.adjustment_offset;

    let aboutMe = this.document.getElementById('aboutMe');
    let mySkills = this.document.getElementById('mySkills');
    let myPortfolio = this.document.getElementById('myPortfolio');
    let contact = this.document.getElementById('contact');

    if (aboutMe && mySkills && myPortfolio && contact) {
      if (scrollPosition >= contact.offsetTop) {
        this.activeLink = '';
      } else if (scrollPosition >= myPortfolio.offsetTop) {
        this.activeLink = 'portfolio';
      } else if (scrollPosition >= mySkills.offsetTop) {
        this.activeLink = 'skills';
      } else if (scrollPosition >= aboutMe.offsetTop) {
        this.activeLink = 'about';
      } else {
        this.activeLink = '';
      }
    }
  }


  scrollToComponent(componentId: string) {
    this.disableScrollCheck = true;
    this.scrollService.scrollToComponent(componentId);

    setTimeout(() => {
      this.disableScrollCheck = false;
    }, 1000);
  }


  toggleMobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }

}
