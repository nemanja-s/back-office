import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Register.css';
import Trumail from '../../components/Trumail/Trumail';
import Username from '../../components/Username/Username';
import Password from '../../components/Password/Password';


class Register extends Component {
  state = {
    message: null
  };

  createAccount = () => {
    if (this.props.email && this.props.username && this.props.password) {
      this.setState({ message: null });
      const url = 'https://back-office-ba934.firebaseio.com/users.json';
      let user = JSON.stringify({
        email: this.props.email,
        username: this.props.username,
        password: this.props.password
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
            this.props.history.push('/')
          }, 1000)
        })
        .catch(error => {console.log(error)});
    } else {
      this.setState({ message: 'All fields must be filled' })
    }
  };

  render () {
    return (
      <div className='Register'>
        <Trumail />
        <Username />
        <Password />
        <div className='Buttons'>
          {this.state.message}
          <button onClick={this.createAccount}>REGISTER</button>
          <Link to='/'>Login</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.registerEmail,
    username: state.registerUsername,
    password: state.registerPassword
  }
};

export default connect(mapStateToProps)(Register);