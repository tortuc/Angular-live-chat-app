import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import components
import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ContactItemComponent } from './contact-item/contact-item.component';

// import pipes
import {SummaryPipe} from './summary.pipe';
import {StartsWithPipe} from './customstart.pipes';


import { HeaderTabsComponent } from './header-tabs/header-tabs.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { AddFormInputComponent } from './add-form-input/add-form-input.component';
import { SentMessageComponent } from './sent-message/sent-message.component';
import { ReceivedMessageComponent } from './received-message/received-message.component';

//import animation module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationToastComponent } from './notification-toast/notification-toast.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ChatBoxComponent,
    ContactItemComponent,
    SummaryPipe,
    HeaderTabsComponent,
    ProfileHeaderComponent,
    AddFormInputComponent,
    SentMessageComponent,
    ReceivedMessageComponent,
    NotificationToastComponent,
    StartsWithPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
