import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Authen from './components/login';
import Home from './components/home';
import Artist from './components/artist';

const App =() => {
    return (
        <BrowserRouter>
        <div>
            <Route exact path="/login" component={Authen}/>   
            <Route exact path="/" component={Home}/>
            <Route path="/artist/:id" component={Artist}/>
           
        </div>
        
        </BrowserRouter>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));

