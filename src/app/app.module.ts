import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {HomeComponent} from './home/home.component';
import {Routes, RouterModule} from "@angular/router";
import {Angular2FontawesomeModule} from 'angular2-fontawesome/angular2-fontawesome';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ToolbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
