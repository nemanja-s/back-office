import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './LogIn.css';
import * as actionTypes from '../../store/actions';


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
        this.props.setUsername(existingUsers[user].username);
        this.props.isAuthenticated();
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
          <Link to='/register'>Create Account</Link>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUsername: (username) => dispatch({type: actionTypes.SET_USERNAME, username: username}),
    isAuthenticated: () => dispatch({type: actionTypes.IS_AUTHENTICATED, value: true})
  }
};

export default connect(null, mapDispatchToProps)(LogIn);

