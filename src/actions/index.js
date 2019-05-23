const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  };
};

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};

const booksError = (err) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: err
  };
};

const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((newBooks) => {
      dispatch(booksLoaded(newBooks));
    })
    .catch((error) => {
      dispatch(booksError(error))
    });
};

const bookAddedToCart = (id) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: id
  };
};

const bookRemovedFromCart = (id) => {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: id
  };
};

const allBooksRemovedFromCart = (id) => {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: id
  };
};

export {
  booksLoaded,
  booksRequested,
  booksError,
  fetchBooks,
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart
};
