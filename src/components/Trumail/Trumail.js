import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Trumail.css';
import * as actionTypes from '../../store/actions';

class Trumail extends Component {
  state = {
    message: 'Email:'
  };

  componentDidMount () {
    fetch('https://back-office-ba934.firebaseio.com/users.json')
      .then(response => response.json())
      .then(json => {this.setState({users: json})})
      .catch(error => {console.log(error)})
  }

  mailValidation = (event) => {
    const email = event.target.value;
    if (email.length === 0) {
      this.setState({ message: "Field required"});
      return
    }
    const existingUsers = this.state.users;
    let existingEmails = Object.keys(existingUsers)
      .filter(user => existingUsers[user].email === email);
    if (existingEmails.length === 0) {
      fetch('https://trumail.io/json/' + email)
        .then(response => response.json())
        .then(json => {
          if (json.deliverable) {
            this.setState({message: "OK!"});
            this.props.registerEmail(email)
          } else {
            this.setState({message: "Email doesn't exist"});
          }
        })
        .catch(error => { console.log(error) })
    } else {
      this.setState({message: "Account with this email already exist"});
    }
  };

  render () {
    return (
      <div className='Trumail'>
        <p>{this.state.message}</p>
        <input
          type='email'
          placeholder='your email'
          onBlur={this.mailValidation} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerEmail: (email) => dispatch({type: actionTypes.REGISTER_MAIL, email: email})
  }
};

export default connect(null, mapDispatchToProps)(Trumail);