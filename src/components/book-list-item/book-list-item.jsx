import React from 'react';

import './book-list-item.css';

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, cover, price, url } = book;

  return (
    <div className="book-list-item">
      <div className="cover-book">
        <img src={cover} alt="cover book"/>
      </div>
      <div className="box-wrapper d-flex flex-column justify-content-between">
        <div className="info d-flex flex-column">
          <span className="title">
            <a href={url} rel="noopener noreferrer" target="_blank">{title}</a>
          </span>
          <span className="author">{author}</span>
          <span className="price">{price}$</span>
        </div>
        <button
          onClick={onAddedToCart} 
          className="btn btn-primary">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
