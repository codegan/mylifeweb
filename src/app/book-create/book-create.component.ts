import { Books } from '../books';
import { BooksService } from '../services/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  providers: [BooksService]
})
export class BookCreateComponent implements OnInit {
  books= {};
  constructor(private booksService: BooksService) { }

  ngOnInit() {
  }
createBook() {
    console.log(this.books);
    this.booksService.createBook(this.books);
  }
}
