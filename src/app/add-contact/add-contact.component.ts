import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  Contact: any = {
    Name: "",
    Email: "",
    Telephone: "",
    Mobile: "",
    IsMobileWhatsApp: false
  }

  FormSubmitted: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(contactForm){
    this.FormSubmitted = true;
    console.log(contactForm);
  }
}
