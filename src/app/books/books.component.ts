import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { BooksService } from '../services/books.service';
import {Books} from '../books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BooksService]
})
export class BooksComponent {
  private books: Array<Books> = new Array<Books>();

  constructor(private booksService: BooksService) {
    this.getBooks();
  }

  private getBooks() {
    return this.booksService.getBooks()
                 .subscribe(data => {
                        this.books = data.json();
                        console.log(this.books);
                });
  }

  private login() {
    this.booksService.login();
  }
}
