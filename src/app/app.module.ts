
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
import { CreateUserComponent } from './users/Create/create-user.component';
import { CreateUserviewComponent } from './users/Create/create-userview.component';
import {AuthService} from "./Auth/auth.service";
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { UpdateUserviewComponent } from './users/update-user/update-userview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent},
  { path: 'login', component: LoginComponent},
  { path: 'users/create', component: CreateUserComponent},
  { path: 'users/:id', component: UpdateUserComponent}
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
    CreateUserviewComponent,
    HomeComponent,
    UpdateUserComponent,
    UpdateUserviewComponent
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
  providers: [UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
