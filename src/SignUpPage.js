import React, { Component } from 'react';
import './SignUpPage.css';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
  
    if (username.length < 4 || username.length > 18) {
      console.log('Username must be between 4 and 18 characters');
      return;
    }
  
    if (password.length < 4 || password.length > 18) {
      console.log('Password must be between 4 and 18 characters');
      return;
    }
  
    // Store the username and password in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  
    console.log('Username: ' + username);
    console.log('Password: ' + password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" onChange={this.handleInputChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignUpPage;