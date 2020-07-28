import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './task1/parent/parent.component';
import { ChildComponent } from './task1/child/child.component';
import { Task11Component } from './task11/task11.component';
import { PageHeaderComponent } from './task11/page-header/page-header.component';
import { PageComponent } from './task11/page/page.component';
import { TabelExampleComponent } from './task2/tabel-example/tabel-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Task11Component,
    PageHeaderComponent,
    PageComponent,
    TabelExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
