import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [teamArray, setTeamArray] = useState([
    {id: "1", name: "Scooby Doo",email: "woof@gmail.com",requests: "...",imgUrl:"https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/20992941_10156238556155961_119237620566999832_n.jpg?_nc_cat=1&_nc_oc=AQl1EFkKWnp4l9SRuNIQaRVkxAF_PjNwnpTd0ykobscIw61sB2XFzUf4rjYflhOHuwA&_nc_ht=scontent-dfw5-1.xx&oh=4a564cede59d7d420c752712f701cce8&oe=5DA3195E"},
  ]);

  const [idCount, setIdCount] = useState(3);
  const [memberToEdit, switchEditMember] = useState();
  const [isEditing, setEdit] = useState(false);
  
  const addToMembers = member => {
    isEditing
      ? setTeamArray(member)
      : setTeamArray([...teamArray, { ...member, id: idCount }]);
  };

  const editTrue = id => {
    setEdit(true);
    switchEditMember(id);
  };

  const editFalse = () => {
    setEdit(false);
    switchEditMember(null);
  };
  
  
  return (
    <div className = "App">
      <button className="requestButton">View open requests</button>
      {teamArray.map((member) => 
            <div className = "card">
            <img src={member.imgUrl}/>
            <div className = "textContainer">
              <h1>{member.name}</h1>
              <p>{member.email}</p>
              <p>{member.requests}</p>
            </div>
            <button className="editButton" onClick={() => editTrue(member.id)}>Edit</button>
          </div>
        )}
        <button className="requestButton">View open requests</button>

    </div>

  ); 
}

export default App;
