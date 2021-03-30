import { Component, Input } from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent{
  @Input() selectedContact: Contact;
  @Input() defaultSelectedContact: Contact;

}
