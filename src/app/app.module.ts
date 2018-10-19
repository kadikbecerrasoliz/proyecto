import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuth } from '../../node_modules/angularfire2/auth';

import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { NavigationComponent } from './components/general/navigation/navigation.component';
import { LoginComponent } from './components/users/login/login.component';

import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatCardModule
} from '@angular/material';

import { BooksService } from './services/books.service';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { BookComponent } from './book/book.component';


export const firebaseConfig = {
  apiKey: "AIzaSyBI2Y-u6GSIxssgbdjdnNzt2vuuRpH870k",
  authDomain: "pruebita-ea74f.firebaseapp.com",
  databaseURL: "https://pruebita-ea74f.firebaseio.com",
  storageBucket: "pruebita-ea74f.appspot.com",
  messagingSenderId: "678624081742"
}

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NavigationComponent,
    LoginComponent,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    AngularFireStorageModule,
  ],
  providers: [BooksService, AuthService, AngularFireAuth, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
