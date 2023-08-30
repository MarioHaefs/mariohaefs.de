import { Component, ViewChild, ElementRef } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Renderer2 } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fadeInFromLeft', [
      state('invisible', style({ opacity: 0, transform: 'translateX(-100%)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('invisible <=> visible', animate('400ms ease-in-out'))
    ]),
    trigger('fadeInFromRight', [
      state('invisible', style({ opacity: 0, transform: 'translateX(100%)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('invisible <=> visible', animate('400ms ease-in-out'))
    ])
  ]
})


export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  state = 'invisible';

  constructor(private scrollService: ScrollService, private el: ElementRef, private renderer: Renderer2) { 
    this.state = 'invisible';
    this.renderer.listen('window', 'scroll', (event) => {
      this.fadeInAnimation();
    });
  }


  /**
   * scroll to selected component
   * @param componentId string
   */
  scrollToComponent(componentId: string) {
    this.scrollService.scrollToComponent(componentId);
  }

  
  /**
   * send a message to my server which send this message to my mail address -> also gives feedback if the sending of the message was successful
   */
  async sendMail() {
    this.setFieldsState(true);
    this.sendButton.nativeElement.innerHTML = "Sending...";

    let formdata = new FormData();
    formdata.append('name', this.nameField.nativeElement.value);
    formdata.append('email', this.emailField.nativeElement.value);
    formdata.append('message', this.messageField.nativeElement.value);

    await fetch('https://mario-haefs.de/send_mail/send_mail.php',
      {
        method: 'POST',
        body: formdata
      }
    );

    this.resetFields();
    this.setFieldsState(false);
    this.sendButton.nativeElement.innerHTML = "Message sent!";
    setTimeout(() => this.sendButton.nativeElement.innerHTML = "Send message :)", 3000);
  }


  /**
   * this method changes the state (enabled/disabled) of all form fields and the submit button.
   * @param state boolean
   */
  setFieldsState(state: boolean) {
    this.nameField.nativeElement.disabled = state;
    this.emailField.nativeElement.disabled = state;
    this.messageField.nativeElement.disabled = state;
    this.sendButton.nativeElement.disabled = state;
  }


  /**
   * reset form fields
   */
  resetFields() {
    this.nameField.nativeElement.value = "";
    this.emailField.nativeElement.value = "";
    this.messageField.nativeElement.value = "";
  }


  fadeInAnimation() {
    let componentPosition = this.el.nativeElement.offsetTop;
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    let offset = 500;
  
    if (scrollPosition + offset >= componentPosition) {
      this.state = 'visible';
    }
  }


}
