import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

const header = props => {
  console.log(props);
  return (
    <div className='Header'>
      <p>Back  Office</p>
      {props.isAuth ?
        <div>
          <a onClick={() => props.loggedOut()}>Logout</a>
          <span>Hello, {props.username}</span>
          <Link to='/users'>USERS</Link>
        </div>
        : null}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    username: state.username,
    isAuth: state.isAuthenticated
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loggedOut: () => dispatch({type: actionTypes.IS_AUTHENTICATED, value: false})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(header);