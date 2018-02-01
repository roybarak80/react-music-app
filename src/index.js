import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import Artist from './components/artist';

const App =() => {
   
    function requireAuth(nextState, replace) {
        const foo = false;
        if (foo == true) {
          replace({
            pathname: '/login'
          })
        }
      }
    return (
        <BrowserRouter>
        <div>
          
            <Route exact path="/" component={Login}/> 
            <Route exact path="/home" component={Home} onEnter={this.requireAuth}/>
            
            <Route path="/artist/:id" component={Artist}/>
           
        </div>
        
        </BrowserRouter>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));

