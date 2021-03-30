import { Component, Input ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-tabs',
  templateUrl: './header-tabs.component.html',
  styleUrls: ['./header-tabs.component.css']
})
export class HeaderTabsComponent {
  @Input() activeTab: string;
  @Output() onClickSmsIcon = new EventEmitter();
  @Output() onClickSearchIcon = new EventEmitter();
  onSmsIconClicked(): void {
    this.onClickSmsIcon.emit();
  }
  onSearchIconClicked(): void {
    this.onClickSearchIcon.emit();
  }
}
