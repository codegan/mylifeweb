import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import {Books} from '../books';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  providers: [BooksService]
})
export class BookDetailsComponent implements OnInit {
  books = {};

  constructor(private route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit() {
    this.getBooksDetailsById(this.route.snapshot.params['id']);
  }

   private getBooksDetailsById(id: number) {
    return this.booksService.getBooksDetailsById(id)
                 .subscribe(data => {
                        this.books = data.json();
                        console.log(this.books);
                });
  }

}
