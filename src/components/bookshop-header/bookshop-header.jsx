import React from 'react';

import './bookshop-header.css';

const BookshopHeader = ({ count, totalPrice }) => {
  return (
    <header className="bookshop-header header">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">ReStore</div>
        <div className="info d-flex align-items-center">
          <span className="icon-cart"><i className="fa fa-shopping-cart"></i></span>
          <span className="count">{count} items</span>
          <span className="total-price">(${totalPrice})</span>
        </div>
      </div>
    </header>
  );
};

export default BookshopHeader;
