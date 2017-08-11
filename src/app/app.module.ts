import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {InlineEditorModule} from '@qontu/ngx-inline-editor';
import { EmaillistComponent } from './emaillist/emaillist.component';
import {EmaillistService} from './emaillist/emaillist.service';

@NgModule({
  declarations: [
    AppComponent,
    EmaillistComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule ,
    HttpModule,
    InlineEditorModule
  ],
  providers: [EmaillistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
