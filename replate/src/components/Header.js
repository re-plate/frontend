import React from 'react'
import logoBlue from '../assets/logoBlue.png'

const Header= () => {

    return (
        <div className = "header">
            <img src = {logoBlue}/>
            <h1>Volunteer with Replate</h1>
            <button className="requestButton">View open requests</button>
        </div>
        
    )
    
}

export default Header;