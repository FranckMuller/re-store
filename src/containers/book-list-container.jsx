import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks, bookAddedToCart } from '../actions';
import { withBookstoreService } from '../components/hoc';
import compose from '../utils';

import BookList from '../components/book-list';
import Spinner from '../components/spinner';
import ErrorIndicator from '../components/error-indicator';

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  };

  render() {
    const { books, loading, error, onAddedToCart, onDeletedFromCart } = this.props;

    if(loading) return <Spinner />

    if(error) return <ErrorIndicator />

    return ( 
      <BookList 
        books={books}
        onAddedToCart={onAddedToCart}
        onDeletedFromCart={onDeletedFromCart}
      />
    )
  };
};

const mapStateToProps = ({ bookList: { books, loading, error }}) => {
  return { books, loading, error }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
