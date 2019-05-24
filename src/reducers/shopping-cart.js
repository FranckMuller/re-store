const updateCartItems = (books, book, bookId) => {

  const bookIdx = books.findIndex(({ id }) => id === bookId);

  if(book.count === 0) {
    return [
    ...books.slice(0, bookIdx),
    ...books.slice(bookIdx + 1)
    ];
  };

  if(bookIdx < 0) {
    return [
      ...books,
      book
    ];
  } else {
    return [
      ...books.slice(0, bookIdx),
      book,
      ...books.slice(bookIdx + 1)
    ];
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
  const { shoppingCart : { cartItems, orderTotal, orderItemsCount }, bookList: { books }} = state;
  const book = books.find(({ id }) => id === bookId);
  const item = cartItems.find(({ id }) => id === bookId);
  const newItem = updateCartItem(books, item, bookId, quantity);
  return {
    cartItems: updateCartItems(cartItems, newItem, bookId),
    orderTotal: orderTotal + quantity*book.price,
    orderItemsCount: orderItemsCount + quantity
  };
};

const updateShoppingCart = (state, action) => {

  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
      orderItemsCount: 0
    };
  };

  switch (action.type) {
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);
      
    case 'BOOK_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_BOOKS_REMOVED_FROM_CART':
        const book = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
        return updateOrder(state, action.payload, -book.count);

    default: 
      return state.shoppingCart
  };
};

export default updateShoppingCart;
