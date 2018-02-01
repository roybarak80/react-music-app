import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'
class Login extends Component {
   constructor(props, context) {
       super(props, context);
      this._buildLinkHref = this._buildLinkHref.bind(this);
   }
   _buildLinkHref(){
    return '/home';
  };
    render() {
       
        return (
            <div>
                <a href={this._buildLinkHref()} className="btn">
          Home
        </a>
            </div>
        );
    }
}

export default Login;