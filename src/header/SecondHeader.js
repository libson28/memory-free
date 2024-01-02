import React from 'react';
import './header.css';
import Home from '../mesPages/Accueil';


function SecondMenu() {
    return (
        <div className='logo'>
        
            <img src='./logo.png' alt='hh' />
            
            <div className='liste'>
                <ul>
                   <li><a href='/'>Accueil</a></li>
                    <li><a href='/About'>A propos</a></li>
                    <li><a href='/Memory'>Mémoires</a></li>
                    <li><a href='/User'>Espace perso</a></li>
                   
                </ul>
            </div>

            <div >
                < a href="/Home" className='log'>
                    <span><i class="fa-solid fa-user"></i><sup><i class="fa-solid fa-circle"></i></sup></span>
                </a>
               
            </div>
        </div>
    )
}
      
export default SecondMenu     
      
