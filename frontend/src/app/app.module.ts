import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainComponent } from './main/main.component';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { GrouplistComponent } from './grouplist/grouplist.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { TranslationpanelComponent } from './translationpanel/translationpanel.component';
import { OrigmsglistComponent } from './origmsglist/origmsglist.component';
import {MatTableModule} from '@angular/material/table';
import { HighlightModule } from 'ngx-highlightjs';
import { CodecontextpanelComponent } from './codecontextpanel/codecontextpanel.component';
import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GrouplistComponent,
    TranslationpanelComponent,
    OrigmsglistComponent,
    CodecontextpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    HighlightModule.forRoot({theme: 'qtcreator_light'}),
    KeyboardShortcutsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
