import { Component, Input } from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent{
  @Input() contact: Contact;
  @Input() selectedContact: Contact;
  @Input() isFirstChild: Boolean;
  @Input() defaultSelectedContact: Contact;

  isSelectedContact (){
    if (this.contact == this.selectedContact){
      return true;
    }
    if (!this.selectedContact && this.defaultSelectedContact == this.contact){
      return true;
    }
    return false;
  }
}
