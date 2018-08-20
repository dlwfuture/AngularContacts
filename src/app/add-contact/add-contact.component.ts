import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ContactsService } from './../contacts.service'

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
    IsMobileWhatsApp: false,
    Initial: ""
  }

  ContactsService: ContactsService;
  Router: Router;

  FormSubmitted: boolean = false;
  
  constructor(contactsService: ContactsService, router: Router) {
    this.ContactsService = contactsService;
    this.Router = router;
  }

  ngOnInit() {
  }

  getInitial(name: string): string {
    if (name === null || name.length === 0){
      return name;
    }
    const splittedWords = name.split(' ');
    if (splittedWords.length < 2){
      return splittedWords[0].charAt(0);
    }
    return `${ splittedWords[0].charAt(0) }${ splittedWords[splittedWords.length - 1].charAt(0) }`;
  }

  onSubmit(contactForm){
    this.FormSubmitted = true;
    if (contactForm.valid){
      this.Contact.Initial = this.getInitial(this.Contact.Name)
      this.ContactsService.addContact(this.Contact)
      .subscribe(() => this.Router.navigate(["/"]));
    }
  }
}
