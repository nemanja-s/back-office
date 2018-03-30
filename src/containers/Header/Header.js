import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const header = props => {
  let welcome = null;
  if (props.login) {
    welcome =
      <div>
        <Link to={`${process.env.PUBLIC_URL}/users`} onClick={() => {props.logout()}}>Logout</Link>
        <span>Hello, {props.username}</span>
        <Link to={`${process.env.PUBLIC_URL}/users`}>USERS</Link>
      </div>
  }
  return (
    <div className='Header'>
      <p>Back  Office</p>
      {welcome}
    </div>
  )
};

export default header;