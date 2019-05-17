import React from 'react';

import './book-list-item.css';

const BookListItem = ({ book }) => {
  const { title, author, cover, price } = book;

  return (
    <div className="book-list-item d-flex">
      <div className="cover-book">
        <img src={cover} alt="cover book"/>
      </div>
      <div className="box-wrapper d-flex flex-column justify-content-between">
        <div className="info d-flex flex-column">
          <span className="title">{title}</span>
          <span className="author">{author}</span>
          <span className="price">{price}$</span>
        </div>
        <button className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  );
};

export default BookListItem;
