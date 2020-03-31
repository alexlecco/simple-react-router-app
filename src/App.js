import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home'
import Login from './components/Login'
import Product from './components/Product'
import NotFound from './components/NotFound'
import Collection from './components/Collection'
import PrivateRoute from './components/PrivateRoute'
import Footer from './components/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    }
  }

  onChangeAuth = (isAuth) => {
    this.setState({ isAuth: isAuth });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header isAuth={this.state.isAuth} changeAuth={this.onChangeAuth.bind(this)} />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/products/:product" component={Product} />
            <Route path="/login" component={Login} />
            <PrivateRoute isAuth={this.state.isAuth} path='/collection' component={Collection} />
            <Route component={ NotFound } />
          </Switch>
          
          <Footer />
        </header>
      </div>
    );
  }
}


