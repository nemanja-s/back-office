import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Users.css';

class Users extends Component {
  state = {
    users: [],
    id: 11
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        this.setState({
          users: json
        })
      })
  }

  addClient = () => {
    if (this.name.value === "" || this.email.value === "") {
      return
    }
    const newUser = {
      id: this.state.id,
      name: this.name.value,
      email: this.email.value
    };
    this.state.users.push(newUser);
    this.setState({
      id: this.state.id + 1
    });
    this.name.value = '';
    this.email.value = '';
    console.log(this.state.users)
  };

  deleteUser = id => {
    const newUsers = [...this.state.users].filter(user => {
      return user.id !== id
    });
    this.setState({ users: newUsers })
  };

  render () {
    let users = this.state.users.map(user => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td><button onClick={() => this.deleteUser(user.id)}>Delete</button></td>
      </tr>
    ));

    return(
      this.props.login ?
      <div className='Main'>
        <input
          type='text'
          placeholder='Client Full Name'
          ref={input => this.name = input} />
        <input
          type='text'
          placeholder='Client email'
          ref={input => this.email = input}/>
        <button onClick={this.addClient}>Add Client</button>
        <table>
          <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
          </thead>
          <tbody>
          {users}
          </tbody>
        </table>
      </div> :
      <Redirect to={`${process.env.PUBLIC_URL}/`} />
    )
  }
}

export default Users;