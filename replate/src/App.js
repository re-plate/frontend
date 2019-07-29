import React, { useState } from 'react';
import './App.css';
import VolunteerForm from './components/VolunteerForm';
import Header from './components/Header';
import {VolunteerImage} from "./components/StyledWidgets";
import table from './assets/table.jpg';

function App() {
  const [volunteerArray, setVolunteerArray] = useState([
    {id: "1", name: "SpongeBob",email: "cook@krustykrab.com",requests: "...",imgUrl:"https://vignette.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190604110949"},
  ]);

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
      {volunteerArray.map((volunteer) => 
            <div className = "card">
            <img src={volunteer.imgUrl}/>
            <div className = "textContainer">
              <h1>{volunteer.name}</h1>
              <p>{volunteer.email}</p>
              <p>{volunteer.requests}</p>
            </div>
            <button className="editButton" onClick={() => editTrue(volunteer.id)}>Edit</button>
          </div>
        )}
        <button className="requestButton">View open requests</button>

    </div>

  ); 
}

export default App;
