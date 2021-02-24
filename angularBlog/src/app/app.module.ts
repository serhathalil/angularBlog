import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { MainModule } from "./pages/main.module";
import { NgxSocialShareModule } from 'ngx-social-share';
import {BsDropdownModule } from "ngx-bootstrap/dropdown";
import {CollapseModule } from "ngx-bootstrap/collapse";

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminNavComponent } from './nav/admin-nav/admin-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AdminNavComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainModule,
    NgxSocialShareModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
