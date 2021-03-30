import { Component, Input, EventEmitter, Output } from '@angular/core';
import {Contact} from '../contact';
import {StartsWithPipe} from '../customstart.pipes';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  keyframes

} from '@angular/animations';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
  animations: [
    trigger('flyInOut', [
          transition('* => *', [
           query('.first-li', style({ opacity: 0 }), { optional: true }),
           query('.first-li', stagger('500ms', [
             animate('1s ease-in', keyframes([
               style({ opacity: 0, transform: 'translateX(-75%)', offset: 0 }),
               style({ opacity: .5, transform: 'translateX(35px)', offset: 0.3 }),
               style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
             ]))]), { optional: true })
          ])
    ])
  ]
})
export class ContactsListComponent{
  @Input() contacts: Contact[];
  @Input() selectedContact: Contact;
  @Input() defaultSelectedContact: Contact;
  @Input() activeTab: string;
  @Output() onSelect = new EventEmitter();
  query:string = '';

  onSelected(contact: Contact): void {
    this.onSelect.emit(contact);
  }
}
