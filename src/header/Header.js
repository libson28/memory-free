import React from 'react';
import './header.css'


function MonHeader() {
    return (
        <div className='logo'>
        
            <img src='./logo.png' alt='hh' />
            
            <div className='liste'>
                <ul>
                    <li><a>Accueil</a></li>
                    <li><a>A propos</a></li>
                    <li><a>Comment cela marche</a></li>
                   
                </ul>
            </div>

             <div className='log'>
               <button><a href='#'>Se connecter</a></button>
            </div>
        </div>
    )
}
      
export default MonHeader     
      
