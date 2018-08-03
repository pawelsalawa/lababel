import { Component } from '@angular/core';

export interface Language {
  code: string;
  label: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  languages: Language[] = [
    {code: 'en_US', label: 'American English'},
    {code: 'pl_PL', label: 'Polski'}
  ];

  language: string;

  ngInit() {
    this.language = this.languages[0].code;
  }
}
