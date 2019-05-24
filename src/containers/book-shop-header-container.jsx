import React from 'react';
import { connect } from 'react-redux';

import BookShopHeader from '../components/bookshop-header';

const BookShopHeaderContainer = (props) => {
  return (
    <BookShopHeader {...props} />
  );
};

const mapStateToProps = ({ shoppingCart: { orderTotal, orderItemsCount }}) => {
  return {
    orderTotal: orderTotal,
    orderItemsCount: orderItemsCount
  };
};

export default connect(mapStateToProps, null)(BookShopHeaderContainer);
