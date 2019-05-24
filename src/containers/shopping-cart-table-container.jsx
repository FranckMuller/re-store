import React from 'react';
import { connect } from 'react-redux';
import { bookRemovedFromCart, allBooksRemovedFromCart, bookAddedToCart } from '../actions';

import ShoppingCartTable from '../components/shopping-cart-table';

const ShoppingCartTableContainer = (props) => {
  return (
    <ShoppingCartTable {...props} />
  );
};

const mapStateToProps = ( { shoppingCart: {cartItems, orderTotal }}) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
    onDecrease: bookRemovedFromCart,
    onIncrease: bookAddedToCart,
    onCleared: allBooksRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTableContainer);
