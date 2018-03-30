import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './Register.css';
import Trumail from '../../components/Trumail/Trumail';
import Username from '../../components/Username/Username';
import Password from '../../components/Password/Password';


class Register extends Component {
  state = {
    message: null,
    redirect: false
  };

  createAccount = () => {
    if (this.state.email && this.state.username && this.state.password) {
      this.setState({ message: null });
      const url = 'https://back-office-ba934.firebaseio.com/users.json';
      let user = JSON.stringify({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      });
      let fetchData = {
        method: 'POST',
        body: user
      };
      fetch(url, fetchData)
        .then(response => {
          console.log(response);
          this.setState({
            message: 'You can login now...'
          });
          setTimeout(() => {
            this.setState({ redirect: true })
          }, 1500)
        })
        .catch(error => {console.log(error)});
    } else {
      this.setState({ message: 'All fields must be filled' })
    }
  };

  emailHandler = email => {
    this.setState({ email: email })
  };

  passwordHandler = password => {
    this.setState({ password: password })
  };

  usernameHandler = username => {
    this.setState({ username: username })
  };

  render () {
    if (this.state.redirect) {
      return <Redirect to={`${process.env.PUBLIC_URL}/`} />
    }
    return (
      <div className='Register'>
        <Trumail getEmail={this.emailHandler} />
        <Username getUsername={this.usernameHandler} />
        <Password getPassword={this.passwordHandler} />
        <div className='Buttons'>
          {this.state.message}
          <button onClick={this.createAccount}>REGISTER</button>
          <Link to={`${process.env.PUBLIC_URL}/`}>Login</Link>
        </div>
      </div>
    )
  }
}

export default Register;