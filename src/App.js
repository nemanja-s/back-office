import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import LogIn from './containers/LogIn/LogIn';
import Register from './containers/Register/Register';
import Users from './components/Users/Users';
import Footer from './components/Footer/Footer';


class App extends Component {
  state = {
    username: null,
    login: false
  };

  loginInfoHandler = info => {
    this.setState({
      username: info[0],
      login: info[1]
    })
  };

  logoutHandler = () => {
    this.setState({
      username: null,
      login: false
    })
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header
            username={this.state.username}
            login={this.state.login}
            logout={this.logoutHandler} />
          <Route path={`${process.env.PUBLIC_URL}/`} exact render={ props =>
            <LogIn {...props} getInfo={this.loginInfoHandler} /> } />
          <Route path={`${process.env.PUBLIC_URL}/users`} exact render={props =>
            <Users {...props} login={this.state.login} /> } />
          <Route path={`${process.env.PUBLIC_URL}/register`} exact component={Register} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
