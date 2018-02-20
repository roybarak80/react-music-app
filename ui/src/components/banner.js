
// import {
//   ToastContainer,
//   ToastMessage,
// } from "react-toastr";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';

//const history = createHistory();
var firebase = require('firebase');
//const ToastMessageFactory = React.createFactory(ToastMessage.animation);

//const db = firebase.database(); //the real-time database
const auth = firebase.auth(); //the firebase auth namespace

class Banner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uid: null
    }

    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {

        this.setState({ uid: user.uid });
      } else {

        this.setState({ uid: null });
      }
    });
  }

  logOut() {
    const current_user = firebase.auth().currentUser;
  
    
    //this.addAlert(`Goodbye  ${current_user.displayName}`, null);
    
  firebase.auth().signOut();
  console.log(current_user);

}

logIn(event) {
  
   

console.log(232);

}
  render() {


   let foo=1;
    if(this.state.uid === null){
      foo =<Link to='/login' onClick={this.logIn}>Login</Link>;
    } else {
      foo =<Link to='/logout' onClick={this.logout}>Logout</Link>;
    }

    //console.log(this.state.uid);


    return (

      <div className="banner">
        <div className="main_cover">

          <div className="logo">
{foo}<br/>
            <Link to="/">MUSIC-DB</Link><br/>
            <Link to="/testlogin">test login</Link>
          </div>
        </div>
        <span></span>
      </div>
    );
  }
}

export default Banner;