import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface MessageRow {
  id: number;
  originalText: string;
  translatedText?: string;
  translatorComments?: string;
  status: MessageStatus;
  warnings?: string[];
  codeContext?: string;
}

enum MessageStatus {
  UNTRANSLATED = 'UNTRANSLATED',
  TRANSLATED = 'TRANSLATED',
  WARNING = 'WARNING'
}

const sampleCode =
`class Test {
  private static final int a = 5;

  public static void main(String[] args) {
    System.out.println("test");
  }
}`;

@Component({
  selector: 'app-origmsglist',
  templateUrl: './origmsglist.component.html',
  styleUrls: ['./origmsglist.component.scss']
})
export class OrigmsglistComponent implements OnInit {

  @Output() msgSelected = new EventEmitter<MessageRow>();

  displayedColumns: string[] = ['status', 'text'];
  dataSource: MessageRow[] = [
    {id: 0, originalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', status: MessageStatus.TRANSLATED,
      codeContext: sampleCode, translatorComments: 'test comment'},
    {id: 1, originalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' , status: MessageStatus.WARNING,
      warnings: ['warning 1', 'warning 2'], translatorComments: 'test comment'},
    {id: 2, originalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
      'in voluptatem facilis saepe quasi vel maxime ratione quisquam accusamus quos voluptates soluta aut consectetur.',
      translatedText: 'aoihr siugoufgouig oluirtgler', status: MessageStatus.TRANSLATED},
    {id: 3, originalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', status: MessageStatus.UNTRANSLATED},
    {id: 4, originalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', status: MessageStatus.UNTRANSLATED},
    {id: 5, originalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', status: MessageStatus.WARNING,
      warnings: ['warning 1'], translatorComments: 'test comment'},
    {id: 6, originalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', status: MessageStatus.UNTRANSLATED},
    {id: 7, originalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', status: MessageStatus.UNTRANSLATED},
    {id: 8, originalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', status: MessageStatus.UNTRANSLATED},
    {id: 9, originalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', status: MessageStatus.UNTRANSLATED}
  ];
  selected: MessageRow;

  ngOnInit() {
  }

  selectRow(row: MessageRow) {
    this.selected = row;
    this.msgSelected.emit(row);
  }

  rowClass(row: MessageRow) {
    if (row === this.selected) {
      return 'selected';
    }

    switch (row.status) {
      case MessageStatus.UNTRANSLATED:
        return 'untranslated';
      case MessageStatus.TRANSLATED:
        return 'translated';
      case MessageStatus.WARNING:
        return 'warning';
    }
  }

  iconForStatus(status: MessageStatus) {
    switch (status) {
      case MessageStatus.UNTRANSLATED:
        return 'help_outline';
      case MessageStatus.TRANSLATED:
        return 'done';
      case MessageStatus.WARNING:
        return 'report_problem';
    }
  }

  newMsgsListLoaded() {
    this.selectRow(this.dataSource[0]);
  }

}
