const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 260
}; 

const updateCartItems = (books, book, bookId) => {

  const bookIdx = books.findIndex(({ id }) => id === bookId);

  if(book.count === 0) {
    return [
    ...books.slice(0, bookIdx),
    ...books.slice(bookIdx + 1)
    ]
  }

  if(bookIdx < 0) {
    return [
      ...books,
      book
    ]
  } else {
    return [
      ...books.slice(0, bookIdx),
      book,
      ...books.slice(bookIdx + 1)
    ]
  };
};

const updateCartItem = (books, item = {}, bookId, quantity) => {

  const book = books.find(({id}) => id === bookId);

  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0
  } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity*book.price
  };
};

const updateOrder = (state, bookId, quantity) => {
  const { cartItems, books } = state;
  const item = cartItems.find(({ id }) => id === bookId);
  const newItem = updateCartItem(books, item, bookId, quantity);
  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, bookId)
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      }
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };

    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);
      
    case 'BOOK_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_BOOKS_REMOVED_FROM_CART':
        const book = state.cartItems.find(({id}) => id === action.payload);
        return updateOrder(state, action.payload, -book.count);

    default:
      return state; 
  };
};

export default reducer;
