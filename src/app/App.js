import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'rmwc/Grid';
import BookCard from './BookCard/BookCard';
import AddBook from './AddBook/AddBook';

import './App.css';

class App extends Component {

  addBook(book) {
    this.props.onAddBook(book)
  }

  editBook(book) {
    this.props.onEditBook(book);
  }

  removeBook(id) {
    this.props.onRemoveBook(id);
  }
  
  render() {
    return (
      <Grid>
        <AddBook onAddClick={this.addBook.bind(this)}/>
        {this.props.bookStore.map((book, index) => 
          <BookCard 
          onEditBookClick={this.editBook.bind(this)} 
          onRemoveBookClick={this.removeBook.bind(this)}
          book={book} 
          key={book.id} />
        )}
      </Grid>
    );
  }
}

export default connect(
  state => ({
    bookStore: state.books
  }),
  dispatch => ({
    onAddBook: (book) => {
      const payload = {
        id: Date.now().toString(),
        title: book.title,
        author: book.author
      };
      
      dispatch({type: 'ADD_BOOK', payload});
    },

    onEditBook: (book) => {
      dispatch({type: 'EDIT_BOOK', payload: book});
    },

    onRemoveBook: (id) => {
      dispatch({ type: 'REMOVE_BOOK', payload: id });
    }

  })
)(App);
