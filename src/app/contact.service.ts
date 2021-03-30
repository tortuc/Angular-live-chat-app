import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Contact } from './contact';
import {Message} from './message';
import {Notification} from './notification';

import { CONTACTS } from './mock-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = CONTACTS;
  notification: Notification;

  getContacts(): Observable<Contact[]> {
    // return array of contacts
    return of(CONTACTS);
  }
  onSelectContact(contact: Contact){
    // get index of contact and find this contact data and save in contactData variable
    let indexOfContact = this.contacts.indexOf(contact);
    if(indexOfContact !== 0){
      let contactData = this.contacts[indexOfContact];
      contactData.lastMessage.isOpened = true;
      // delete contact element from contacts array
      this.contacts.splice(indexOfContact, 1);
      // after 500 ms add on the 0 index of contacts array
      setTimeout(()=>{this.contacts.unshift(contactData)}, 700);
    }
  }
  getNotification(): Observable<Notification> {
    return of(this.notification);
  }
  addMessage(message: Message, contact: Contact){
    let indexOfContact = this.contacts.indexOf(contact);
    this.contacts[indexOfContact].messages.push(message);
  }
  onReceiveNewMessage(indexOfContact: number, message: Message){
    let contactData = this.contacts[indexOfContact];
    this.contacts.splice(indexOfContact, 1);
    contactData.messages.push(message);
    contactData.lastMessage = message;
    contactData.unReadCount = 1;
    this.notification = {
      name: contactData.name,
      message: message.text
    }
    setTimeout(()=>{
      this.contacts.unshift(contactData);
    }, 700)
  }
}
