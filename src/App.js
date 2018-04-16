import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './containers/Header/Header';
import LogIn from './containers/LogIn/LogIn';
import Register from './containers/Register/Register';
import Users from './components/Users/Users';
import Footer from './containers/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path='/' exact component={LogIn} />
        <Route path='/register' component={Register} />
        <Route path='/users' component={Users} />
        <Footer />
      </div>
    )
  }
}

export default App;