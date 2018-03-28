import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LogIn.css';


class LogIn extends Component {
  state = {
    message: null,
  };

  componentDidMount () {
    fetch('https://back-office-ba934.firebaseio.com/users.json')
      .then(response => response.json())
      .then(json => {this.setState({users: json})})
      .catch(error => {console.log(error)})
  }

  login = () => {
    const existingUsers = this.state.users;
    const email = this.email.value;
    const password = this.password.value;
    let user = Object.keys(existingUsers)
      .filter(user => existingUsers[user].email === email);
    if (user.length === 0) {
      this.setState({ message: "Invalid email!" })
    } else {
      if (existingUsers[user].password === password) {
        this.setState({
          message: "You have successfuly loged in!",
        });
        this.props.getInfo([existingUsers[user].username, true])
      } else {
        this.setState({ message: "Incorect password!" })
      }
    }
  };

  render () {
    return (
      <div className='LogIn'>
        <input
          type='text'
          placeholder='Your email'
          ref={input => this.email = input} />
        <input
          type='password'
          placeholder='Your password'
          ref={input => this.password = input} />
        <div className='Buttons'>
          {this.state.message}
          <button onClick={this.login}>LOGIN</button>
          <Link to={`${process.env.PUBLIC_URL}/register`}>Create Account</Link>
        </div>
      </div>
    )
  }
}

export default LogIn;

