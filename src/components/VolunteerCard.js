


import React from 'react'
import { Link } from 'react-router-dom';
import {SubmitButton} from './StyledWidgets'

const VolunteerCard = ({match, volunteerArray, imgUrl, name, email, requests, id, setEdit, switchEditVolunteer}) => {
    console.log(volunteerArray, match);

    const editTrue = id => {
        setEdit(true);
        switchEditVolunteer(id);
      };

    if (match){
        const volunteer = volunteerArray.filter(item => item.id === match.params.id)[0]; 
        return (
            <div className = "volunteerCard">
                <img src={volunteer.imgUrl}/>
                <div className = "textContainer">
                    <h2>{volunteer.name}</h2>
                    <p>{volunteer.email}</p>
                    <p>{volunteer.requests}</p>
                </div>
                <SubmitButton className="editButton" onClick={() => editTrue(volunteer.id)}>Edit</SubmitButton>
                </div>
        )
    }
    else {
        return (
            <div className = "volunteerCard">
                <img src={imgUrl}/>
                <div className = "textContainer">
                <Link to = {`/volunteer/volunteers/${id}`}><h2>{name}</h2></Link>
                <p>{email}</p>
                <p>{requests}</p>
                </div>
                </div>
        )
    }
    
}

export default VolunteerCard;