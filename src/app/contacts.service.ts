import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  public getContacts() {
    return [
      {
        Name: "Daniel Wozniak", 
        Initial: "DW",
        Contacts: [{Type: "email", Value: "dlw_future@hotmail.com"},
                  { Type: "phone", Value: "19994615704"}]
      },
      {
        Name: "Daniel Teste",
        Initial: "DT", 
        Contacts: [{Type: "email", Value: "dlw_future@hotmail.com"},
                  { Type: "whatsapp", Value: "19994615704"}]
      }
    ];
  }
}
