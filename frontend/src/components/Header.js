import React from "react";
import { Navbar } from "./Styled";
import "../App.css";
import { Route } from "react-router-dom";
import SavedList from "./components/SavedList";
import RequestList from "./components/RequestList";
import Request from "./components/Request";

const Header = () => {
  return (
    <Navbar>
      <div className="Header">
        <div className="dropdown">
          <a href="index.html" className="button">
            <h1>replate</h1>
          </a>
          <div className="dropContent">
            <a href="#">Donate to Replate</a>
            <a href="#">Login</a>
          </div>
        </div>
        <div className="requests">
          <button className="requestButton" onClick={toggleMode}>Make a Request</button>
          <Route
          path="/"
          exact
          render={props => <RequestList {...props} showList={showList} />}
        />
        <Route
          path="/requests/:id"
          render={props => (
            <Request
              {...props}
              addToSavedList={addToSavedList}
              list={savedList}
            /> 
        </div>
      </div>
    
    </Navbar>
  );
};

export default Header;

//    <nav>
//        <div className="dropdown">
//            <a href= "index.html" className ="button">
//                <img src="img/logowhite.png">
//                <h1>replate</h1>
//            </a>
//        <div className="dropContent">
//            <a href="index.html">home</a>
//            <a href="howitworks.html">how it works</a>
//            <a href="volunteer.html">volunteer</a>
//            <a href="#">donate</a>
//            <a href="#">login</a>
//        </div>
//        </div>
//        <div className="login">
//            <a href="#">login</a>
//        </div>
//    </nav>
