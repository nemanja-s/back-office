import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class Username extends Component {
  state = {
    message: 'Username:'
  };

  componentDidMount () {
    fetch('https://back-office-ba934.firebaseio.com/users.json')
      .then(response => response.json())
      .then(json => {this.setState({users: json})})
      .catch(error => {console.log(error)})
  }

  usernameValidation = (event) => {
    const username = event.target.value;
    if (username.length === 0) {
      this.setState({ message: "Field required"});
      return
    }
    const existingUsers = this.state.users;
    let existingUsernames = Object.keys(existingUsers)
      .filter(user => existingUsers[user].username === username);
    if (existingUsernames.length === 0) {
      this.setState({ message: "OK!"});
      this.props.registerUsername(username)
    }  else {
      this.setState({ message: "Username already taken" })
    }
  };

  render () {
    return(
      <div>
        <p>{this.state.message}</p>
        <input
          type='text'
          placeholder='pick the username'
          onBlur={this.usernameValidation}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerUsername: (username) => dispatch({type: actionTypes.REGISTER_USERNAME, username: username})
  }
};

export default connect(null, mapDispatchToProps)(Username);