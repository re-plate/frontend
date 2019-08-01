import React from 'react'
import logoBeige from '../assets/logoBeige.png'
import {Image} from "./StyledWidgets";
import {Link} from 'react-router-dom';

const Header= () => {

    return (

        <div className = "header">
            <Image src = {logoBeige}/>
            <Link to = {`/`}><h1>Volunteer with Replate</h1></Link>
        </div>
        
    )
    
}

export default Header;




