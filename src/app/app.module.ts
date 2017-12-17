import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookCreateComponent } from './book-create/book-create.component';

const appRoutes: Routes = [
  { path: '', component:  BooksComponent},
  { path: 'books', component:  BooksComponent},
  {
    path: 'book-details/:id',
    component: BookDetailsComponent,
    data: { title: 'Book Details' }
  }, {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AppNavbarComponent,
    BookDetailsComponent,
    BookCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
