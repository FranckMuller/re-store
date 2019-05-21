const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 260
}; 

const updateCartItems = (items, item, idx) => {
  if(idx === -1) {
    return [
      ...items,
      item
    ];
  };

  return [
    ...items.slice(0, idx),
    item,
    ...items.slice(idx + 1)
  ];
};

const updateCartItem = (book, item = {}) => {
  const { 
    id = book.id,
    title = book.title,
    count = 0,
    price = book.price
  } = item;

  return {
    id,
    title,
    count: count + 1,
    price
  };
};

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
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      const itemIndex = state.cartItems.findIndex(({id}) => id === bookId);
      const item = state.cartItems[itemIndex];

      const newItem = updateCartItem(book, item);

      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
      };

    case 'ON_DELETED_FROM_CART':
      console.log(bookId)
      return {
        ...state
      } 

    default:
      return state; 
  };
};

export default reducer;
