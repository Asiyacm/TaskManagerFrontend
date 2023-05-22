import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TaskSetComponent } from './task-set/task-set.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';



const myRoute:Routes=[

  {
    path:"",
    component:SideNavComponent
  },
  {
    path:"taskSet",
  component : TaskSetComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TaskSetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
