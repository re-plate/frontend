import React, { useState } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import VolunteerForm from './components/VolunteerForm';
import Header from './components/Header';
import {VolunteerImage, SubmitButton, RequestButton} from "./components/StyledWidgets";
import table from './assets/table.jpg';
import SavedList from './components/SavedList';
import DummyRequestList from './components/DummyRequestList';
import DummyRequest from './components/DummyRequest'
 

function App() {
  const [volunteerArray, setVolunteerArray] = useState([
    {id: "1", name: "SpongeBob",email: "cook@krustykrab.com",requests: "...",imgUrl:"https://vignette.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190604110949"},
    {id: "12", name: "Patrick",email: "thisispatrick@krustykrab.com",requests: "...",imgUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/220px-Patrick_Star.svg.png"},]);

  const [idCount, setIdCount] = useState(2);
  const [volunteerToEdit, switchEditVolunteer] = useState();
  const [isEditing, setEdit] = useState(false);
  
  const addToVolunteers = volunteer => {
    isEditing
      ? setVolunteerArray(volunteer)
      : setVolunteerArray([...volunteerArray, { ...volunteer, id: idCount }]);
  };

  const editTrue = id => {
    setEdit(true);
    switchEditVolunteer(id);
  };

  const editFalse = () => {
    setEdit(false);
    switchEditVolunteer(null);
  };

  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = (request) => {
    let matches = savedList.filter(req => req.id === request.id)
    return matches[0] ? null : setSavedList([...savedList, request])
  };

  const [showList, setShowList] = useState(false);
  const toggleMode = e => {
    e.preventDefault();
    setShowList(!showList);
  };

  
  return (
    <div className = "App">
      <Header />
      <VolunteerImage src = {table} alt = "Photo by Ali Inay on Unsplash"/>
      <VolunteerForm
        volunteers = {volunteerArray} 
        addToVolunteers={addToVolunteers}
        idCount={idCount}
        setIdCount={setIdCount}
        volunteerToEdit={volunteerToEdit}
        isEditing={isEditing}
        editFalse={editFalse}
        />
      <div className = "container">   
        <h1>Meet our Volunteers</h1>
      {volunteerArray.map((volunteer) =>
        <div className = "volunteerCard">
          <img src={volunteer.imgUrl}/>
          <div className = "textContainer">
            <h2>{volunteer.name}</h2>
            <p>{volunteer.email}</p>
            <p>{volunteer.requests}</p>
            <SavedList list={savedList} /> 
          </div>
           <SubmitButton className="editButton" onClick={() => editTrue(volunteer.id)}>Edit</SubmitButton>
       </div>
      )}
      <RequestButton className="requestButton" onClick={toggleMode}>View open requests</RequestButton>
      <Route path="/" exact render = {props => <DummyRequestList {...props} showList = {showList}/> }/>
      <Route
        path ="/requests/:id"
        render={props => (
          <DummyRequest 
            {...props}
            addToSavedList={addToSavedList}
            list={savedList}
          />
        )}
        /> 
    </div>
    </div>

  ); 
}

export default App;
