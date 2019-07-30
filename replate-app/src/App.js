import React from 'react';
import { Route,  withRouter,} from 'react-router-dom';

import Login from './loginSignup/Login';
import SignUp from './loginSignup/SignUp';

import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Route 
         exact path="/" 
          render={(props) => 
          <Login {...props}/>}
               />
       <Route 
         exact path="/sign-up" 
         render={(props) => 
        <SignUp {...props}/>}
              />
    </div>
    );
  }
}
export default withRouter (App);
