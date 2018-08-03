import { Component, OnInit } from '@angular/core';

export interface MessageFile {
  name: string;
  groups: Group[];
  messageIds: number[];
}

export interface Group {
  label: string;
  messageIds: number[];
}

@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.scss']
})
export class GrouplistComponent implements OnInit {

  files: MessageFile[];

  constructor() { }

  ngOnInit() {
    this.files = [];

    let groups;
    let grp;
    let file;
    for (let i = 0; i < 100; i++) {
      groups = [];
      file = {
        name: 'File ' + i,
        messagesIds: Array.from(Array(10).keys()),
        groups: groups
      };
      this.files.push(file);

      if (i % 3 === 0) {
        continue;
      }

      for (let j = 0; j < 3; j++) {
        grp = {
          label: 'Class or File ' + i,
          messageIds: Array.from(Array(10).keys())
        };
        groups.push(grp);
      }

    }
  }

}
