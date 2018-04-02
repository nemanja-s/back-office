import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class Password extends Component {
  state = {
    message: 'Password:'
  };

  passwordValidation = event => {
    if (event.target.value.length === 0) {
      this.setState({ message: 'Field required' });
      return
    }
    this.setState({ message: 'OK!' });
    this.props.registerPassword(event.target.value)
  };

  render () {
    return(
      <div>
        <p>{this.state.message}</p>
        <input
          type='password'
          placeholder='...and password'
          onBlur={this.passwordValidation} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerPassword: (password) => dispatch({type: actionTypes.REGISTER_PASSWORD, password: password})
  }
};

export default connect(null, mapDispatchToProps)(Password);
