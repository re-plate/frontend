import React from 'react'
import logoBeige from '../assets/logoBeige.png'
import {Image, RequestButton} from "./StyledWidgets";

const Header= () => {

    return (

        <div className = "header">
            <Image src = {logoBeige}/>
            <h1>Volunteer with Replate</h1>
            <RequestButton>View open requests</RequestButton>
        </div>
        
    )
    
}

export default Header;




