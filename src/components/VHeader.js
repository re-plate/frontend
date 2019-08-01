import React from 'react'
import logoBeige from '../assets/logoBeige.png'
import {Image} from "./StyledWidgets";


const VHeader= () => {

    return (

        <div className = "header">
            <Image src = {logoBeige}/>
            <a href ='https://upbeat-bardeen-0fb94e.netlify.com/'><h1>replate</h1></a>
            
        </div>
        
    )
    
}

export default VHeader;








