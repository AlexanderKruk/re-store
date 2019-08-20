import React from 'react';
import { HomePage, CartPage } from '../pages';
import './app.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';

const App = () => {

  return (
      <main role="main" className="container">
        <ShopHeader numItems={5} total={100}/>
        <HashRouter >
          <Switch>
            <Route path='/' component={HomePage} exact/>
            <Route path='/cart/' component={CartPage} />
          </Switch>
        </HashRouter>
      </main>
  );
}

export default App;