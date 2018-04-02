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
        <Route path={`${process.env.PUBLIC_URL}/`} exact component={LogIn} />
        <Route path={`${process.env.PUBLIC_URL}/register`} component={Register} />
        <Route path={`${process.env.PUBLIC_URL}/users`} component={Users} />
        <Footer />
      </div>
    )
  }
}

export default App;