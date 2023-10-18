import React, { Component } from 'react';

class App extends Component {
  state = {
    isLoggedIn: false,
    isSigningUp: false,
    userData: {
      username: '',
      password: '',
    },
    loginData: {
      username: 'exampleUser',
      password: 'examplePassword',
    },
    error: '',
  };

  handleChange = (field, e) => {
    const { userData } = this.state;
    this.setState({ userData: { ...userData, [field]: e.target.value }, error: '' });
  }

  handleAction = () => {
    const { userData, loginData, isSigningUp } = this.state;
    const isMatch = userData.username === loginData.username && userData.password === loginData.password;
    
    this.setState({ error: isMatch ? '' : 'Username or password is incorrect', isLoggedIn: isMatch && !isSigningUp });
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      userData: { username: '', password: '' },
      error: '',
    });
  }

  render() {
    const { isLoggedIn, isSigningUp, userData, error } = this.state;

    return (
      <div>
        {isLoggedIn ? (
          <div>
            <p>Welcome, {userData.username}!</p>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h2>{isSigningUp ? 'Signup' : 'Login'}</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
              type="text"
              placeholder="Username"
              value={userData.username}
              onChange={(e) => this.handleChange('username', e)}
            />
            <input
              type="password"
              placeholder="Password"
              value={userData.password}
              onChange={(e) => this.handleChange('password', e)}
            />
            <button onClick={this.handleAction}>
              {isSigningUp ? 'Signup' : 'Login'}
            </button>
            <button onClick={() => this.setState({ isSigningUp: !isSigningUp, error: '' })}>
              {isSigningUp ? 'Back to Login' : 'Signup'}
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
