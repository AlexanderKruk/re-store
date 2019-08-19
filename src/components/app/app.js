import React from 'react';
import { HomePage, CartPage } from '../pages';
import './app.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopHeader from '../shop-header';

const App = () => {

  return (
      <main role="main" className="container">
        <ShopHeader numItems={5} total={100}/>
        <Switch>
          <Route path='/' render={() => <Redirect to="/re-store/" />} exact/>
          <Route path='/re-store/' component={HomePage} exact/>
          <Route path='/re-store/cart/' component={CartPage} />
        </Switch>
      </main>
  );
}

export default App;