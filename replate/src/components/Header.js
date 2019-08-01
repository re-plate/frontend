import React from 'react'
import logoBeige from '../assets/logoBeige.png'
import {Image} from "./StyledWidgets";
import {Link} from 'react-router-dom';

const Header= () => {

    return (

        <div className = "header">
            <Image src = {logoBeige}/>
            <a href ='https://upbeat-bardeen-0fb94e.netlify.com/'><h1>replate</h1></a>
            
        </div>
        
    )
    
}

export default Header;








