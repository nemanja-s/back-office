import React, { Component } from 'react';

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
    this.props.getPassword(event.target.value)
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

export default Password;
