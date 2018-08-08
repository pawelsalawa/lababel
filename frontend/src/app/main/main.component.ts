import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import {KeyboardShortcutsService, ShortcutEventOutput} from 'ng-keyboard-shortcuts';
import {OrigmsglistComponent, MessageRow} from '../origmsglist/origmsglist.component';
import {TranslationpanelComponent} from '../translationpanel/translationpanel.component';
import {CodecontextpanelComponent} from '../codecontextpanel/codecontextpanel.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [KeyboardShortcutsService]
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild('msgList') msgList: OrigmsglistComponent;
  @ViewChild('translationPanel') translationPanel: TranslationpanelComponent;
  @ViewChild('codeContextPanel') codeContextPanel: CodecontextpanelComponent;

  disableLangSelect = false;

  constructor(private keyboard: KeyboardShortcutsService, private element: ElementRef) {
  }

  ngOnInit() {
    this.newMsgsListLoaded();
  }

  ngAfterViewInit() {
    this.keyboard.add([
      {
        key: 'ctrl enter',
        allowIn: ['TEXTAREA', 'INPUT', 'SELECT', 'MAT-SIDENAV', 'BODY', 'BUTTON'],
        command: (event: ShortcutEventOutput) => this.acceptAndNext()
      }
    ]);
  }

  acceptAndNext() {
    console.log(1);
  }

  newMsgsListLoaded() {
    this.msgList.newMsgsListLoaded();
  }

  msgSelected(msg: MessageRow) {
    this.translationPanel.loadMsg(msg);
    this.codeContextPanel.loadCode(msg.codeContext);
  }

}
