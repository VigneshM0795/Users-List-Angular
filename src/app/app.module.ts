import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { UserslistComponent } from './userslist/userslist.component';
import { AppRoutingModule } from './app-routing.module';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';
import { Child5Component } from './child5/child5.component';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    UserslistComponent,
    Child2Component,
    Child3Component,
    Child4Component,
    Child5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
