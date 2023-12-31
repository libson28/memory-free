import React from 'react';
import './header.css'


function SecondMenu() {
    return (
        <div className='logo'>
        
            <img src='./logo.png' alt='hh' />
            
            <div className='liste'>
                <ul>
                   <li><a href='/'>Accueil</a></li>
                    <li><a href='/About'>A propos</a></li>
                    <li><a href='/Memory'>Mémoires</a></li>
                   
                </ul>
            </div>

             <div className='log'>
               <span><i class="fa-solid fa-user"></i><sup><i class="fa-solid fa-circle"></i></sup></span>
            </div>
        </div>
    )
}
      
export default SecondMenu     
      
