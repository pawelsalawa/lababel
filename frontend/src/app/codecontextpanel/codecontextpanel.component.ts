import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codecontextpanel',
  templateUrl: './codecontextpanel.component.html',
  styleUrls: ['./codecontextpanel.component.scss']
})
export class CodecontextpanelComponent implements OnInit {

  theCode: string;

  constructor() { }

  ngOnInit() {
  }

  loadCode(code: string) {
    console.log('code: ' + code);
    this.theCode = (code || '');
  }
}
