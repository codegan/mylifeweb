import {Injectable} from '@angular/core';

import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Books} from '../books';

@Injectable()
export class BooksService {

  constructor(private http: Http) {}

  getBooks() {
        const credentials = btoa('admin:admin');
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Accept', 'application/json');
        headers.set('Authorization', 'Basic ${credentials}');
        return this.http.get('http://localhost:8080/mylife/books/', {
          headers: headers
        });
    }

  login() {
    const body = JSON.stringify({username: 'admin', password: 'admin'});

   const headers = new Headers();
   headers.append('Authorization', 'Basic ' + btoa('username:password'));
   headers.append('Content-Type', 'application/x-www-form-urlencoded');

   this.http.post('http://localhost:8080/mylife/login', body, {headers: headers}).subscribe(response => {
         console.log(response);
   }, err => {
      console.log('User authentication failed!');
   });
  }

  getBooksDetailsById(id: number) {
        return this.http.get('http://localhost:8080/mylife/books/' + id);
    }
  createBook(books) {
    this.http.post('http://localhost:8080/mylife/books/', books)
      .subscribe(res => {
        }, (err) => {
          console.log(err);
        }
      );
  }
}
