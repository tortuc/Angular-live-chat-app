import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../message';

@Component({
  selector: 'app-sent-message',
  templateUrl: './sent-message.component.html',
  styleUrls: ['./sent-message.component.css']
})
export class SentMessageComponent implements OnInit {
  @Input() message: Message;
  constructor() { }

  ngOnInit() {
  }

}
