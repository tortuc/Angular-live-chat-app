import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Message} from '../message';

@Component({
  selector: 'app-add-form-input',
  templateUrl: './add-form-input.component.html',
  styleUrls: ['./add-form-input.component.css']
})
export class AddFormInputComponent{
  @Input() message;
  @Output() onSendMessage = new EventEmitter();

  messageWithData: Message;

  sendMessage(): void {
      this.messageWithData = {
        id: 3331,
        text: this.message,
        date: '12:40 AM',
        isFirstMessageInGroup: true,
        isLastMessageInGroup: true,
        isSender: false,
        isOpened: true,
      };
      this.onSendMessage.emit(this.messageWithData);
      this.message = '';
    }

}
