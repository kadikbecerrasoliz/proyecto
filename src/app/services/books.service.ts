import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private angularFire: AngularFireDatabase) { }

  public GetBooks() {
    return this.angularFire.list('/Books').valueChanges();
  }
}
