import { Component, OnInit } from '@angular/core';

import { ContactsService } from './../contacts.service'

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss']
})
export class ListContactsComponent implements OnInit {
  ContactList = [];
  ContactsService: ContactsService;
  
  constructor(contactsService: ContactsService) {
    this.ContactsService = contactsService;
  }

  ngOnInit() {
    this.ContactsService.getContacts().subscribe(data => { this.ContactList = data.json(); });
  }
}
;