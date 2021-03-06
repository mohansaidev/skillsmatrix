import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleEmail = () => {};

  handlePassword = () => {};

  handleSubmit = () => {
    const { handleAuth } = this.props;
    handleAuth();
  };
  render() {
    const { handleLogin } = this.props;

    return (
      <div className="login">
        <div className="boxed-view">
          <div className="boxed-view__box">
            <h3>Sign in</h3>
            <form
              className="boxed-view__form"
              onSubmit={this.handleSubmit}
              noValidate
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleEmail}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlePassword}
              />
              <button className="button" type="submit">
                Login
              </button>
            </form>
            <div className="button-link" onClick={handleLogin}>
              Don't have an account?
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  handleAuth: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default Login;
