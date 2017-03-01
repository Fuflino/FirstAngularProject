import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersService} from './users/users.service'
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {Routes, RouterModule} from "@angular/router";
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';
import { LoginComponent } from './Auth/login/login.component';
import { LoginViewsComponent } from './Auth/login/login-views.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserviewComponent } from './create-user/create-userview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent},
  { path: 'login', component: LoginComponent},
  { path: 'users/create', component: CreateUserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    ToolbarComponent,
    LoginComponent,
    LoginViewsComponent,
    CreateUserComponent,
    CreateUserviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    Angular2FontawesomeModule,
    FlexLayoutModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
