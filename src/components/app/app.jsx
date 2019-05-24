import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BookshopHeader from '../../containers/book-shop-header-container';

import { HomePage, CartPage } from '../pages';

import './app.css';

const App = () => {
  return (
    <div className="app">
      <BookshopHeader />
      <main className="site-page">
        <div className="container">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/cart" component={CartPage} />
          </Switch>
        </div>
      </main>
    </div>
  );  
};

export default App;
