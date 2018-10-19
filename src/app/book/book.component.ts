import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {


  books: any;
  file: any;
  book: any;
  id: any;
  constructor(private angularFire: AngularFireDatabase, private authService: AuthService,
    private route: ActivatedRoute, private booksService: BooksService, private storageService: StorageService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.booksService.GetBooks().subscribe(data => {
      data.forEach(libroActual => {
        if (libroActual['id'] == this.id) {
          this.book = libroActual;
        }
      });
    });
  }

  ngOnInit() {
  }

  downloadFile() {
    this.storageService.getFile("digitales/Programación Extrema y software libre.pdf").subscribe(res => {
      window.open(res);
    });
  }

}
