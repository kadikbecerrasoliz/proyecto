import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { BooksService } from '../../services/books.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  title = 'COMUNIDAD DE LIBROS';

  books: any;
  file: any;
  constructor(private angularFire: AngularFireDatabase, private authService: AuthService,
    private route: ActivatedRoute, private booksService: BooksService, private storageService: StorageService, private router: Router) {
    this.booksService.GetBooks().subscribe(data => {
      this.books = data;
    });
  }

  ngOnInit() {
    
  }

  redirectPage(id) {
    this.router.navigate(['book', id]);
  }
}
