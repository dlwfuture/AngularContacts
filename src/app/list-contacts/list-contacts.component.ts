import { Component, OnInit } from '@angular/core';
import { ContactsService } from './../contacts.service'

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss']
})
export class ListContactsComponent implements OnInit {
  ContactList = [];
  
  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.ContactList = this.contactsService.getContacts();
  }
}
