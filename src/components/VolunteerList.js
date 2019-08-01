



import React from 'react'
import VolunteerCard from './VolunteerCard'

export default function VolunteerList ({volunteerArray}) {
    return(
    <div>
        {volunteerArray.map(volunteer => {
            return(
                <div className = "volunteerCard">
                    <VolunteerCard 
                    volunteer = {volunteer}
                    name = {volunteer.name}
                    key = {volunteer.id}
                    email = {volunteer.email}
                    id = {volunteer.id}
                    imgUrl = {volunteer.imgUrl}
                    requests = {volunteer.requests}
                    />
                </div>  
            )
            
        })}
    </div>
        
    )

}

