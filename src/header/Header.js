import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './header.css'


function MonHeader() {
   
 
    return (
        <div className='logo'>
        
            <img src='./logo.png' alt='hh' />
            
            <div className='liste'>
                <ul>
                    <li><a href='/Home'>Accueil</a></li>
                    <li><a href='/About'>A propos</a></li>
                    <li><a href='/Memory'>Mémoires</a></li>
                   
                </ul>
            </div>

             <div className='log'>
               <button  ><a href='/Connexion'>Se connecter</a></button>
            </div>
        </div>
    )
}
      
export default MonHeader     
      
