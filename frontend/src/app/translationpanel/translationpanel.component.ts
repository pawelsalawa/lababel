import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MessageRow} from '../origmsglist/origmsglist.component';

@Component({
  selector: 'app-translationpanel',
  templateUrl: './translationpanel.component.html',
  styleUrls: ['./translationpanel.component.scss']
})
export class TranslationpanelComponent implements OnInit {
  @Output() applyAndNextClicked = new EventEmitter<void>();
  currentMsg: MessageRow;

  constructor() {}

  ngOnInit() {
  }

  applyAndNext() {
    this.applyAndNextClicked.emit();
  }

  loadMsg(msg: MessageRow) {
    this.currentMsg = msg;
  }

}
