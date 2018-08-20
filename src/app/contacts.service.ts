import { Injectable } from '@angular/core'
import { Component, NgModule } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { AppConfig } from './../app.config'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  Http: Http;
  Options: RequestOptions;
  Headers: Headers;

  constructor(http: Http) { 
    this.Http = http;
    this.Headers = new Headers({ 'Content-Type': 'application/json' })
  }

  public getContacts(): Observable<any> {
    const Url: string = `${ AppConfig.API_ENDPOINT }getall`;
    this.Options = new RequestOptions({headers: this.Headers, withCredentials: true});
    return this.Http.get(Url, this.Options);
  }

  public addContact(contact: any): Observable<any> {
    const Url: string = `${ AppConfig.API_ENDPOINT }add`;
    this.Options = new RequestOptions({headers: this.Headers, withCredentials: true})
    return this.Http.post(Url, contact, this.Options);
  }


}
