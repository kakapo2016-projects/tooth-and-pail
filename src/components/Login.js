import React from 'react';

export default class Login extends React.Component {

  constructor() {
    this.state = {
      user: ‘’,
      password: ‘’
    };
  }
 
  render() {
    return (
        <form role=“form”>
        <div className=“form-group”>
          <input type=“text” valueLink={this.linkState(‘user’)}placeholder=“Username” />
          <input type=“password” valueLink={this.linkState(‘password’)} placeholder=“Password” />
        </div>
        <button type=“submit” onClick={this.login.bind(this)}>Submit</button>
      </form>
    </div>
    );
  }
}


