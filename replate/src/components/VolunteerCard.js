import React from 'react'

export default function VolunteerCard (props) {
  const { name,imgUrl,email,requests } = props;
  return (
      <div className = "volunteerCard">
          <img src={imgUrl}/>
          <div className = "textContainer">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{requests}</p>
         </div>
        </div>
  )
}
