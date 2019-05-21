import React, { Fragment } from 'react';
import BookListContainer from '../../containers/book-list-container';
import ShoppingCartTable from '../shopping-cart-table';

const HomePage = () => {
  return (
    <Fragment>
      <BookListContainer />
      <ShoppingCartTable />
    </Fragment>
  );
};

export default HomePage;
