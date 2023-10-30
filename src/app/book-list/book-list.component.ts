import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{

  newBookName: string = "";
  newAuthorName: string = "";
  id: number = 1;
  books: Book[] = [];

  public ngOnInit(): void {
    let savedBooks = localStorage.getItem("books");
    this.books = savedBooks? JSON.parse(savedBooks) : []
  }


  public addBook() {
    let newBook: Book = {
      id: this.id++,
      name: this.newBookName,
      author: this.newAuthorName
    }
    
    this.books.push(newBook);

    localStorage.setItem("books", JSON.stringify(this.books));

    this.newAuthorName="";
    this.newBookName="";
  }

  public deleteBook(id:number) {
    this.books.splice(id,1);
    localStorage.setItem("books", JSON.stringify(this.books));
  }

}
