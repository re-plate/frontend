import React from 'react'
import logoBlue from '../assets/logoBlue.png'
import {Image, RequestButton} from "./StyledWidgets";

const Header= () => {

    return (
        <div className = "header">
            <Image src = {logoBlue}/>
            <h1>Volunteer with Replate</h1>
            <RequestButton>View open requests</RequestButton>
        </div>
        
    )
    
}

export default Header;