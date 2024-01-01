import React, {useState, useEffect} from 'react';
// import { FaUserCircle } from 'react-icons/fa';
import './header.css'
// import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function MonHeader() {
    const [utilisateurConnecte, setUtilisateurConnecte] = useState(true);

const handleConnexion = () => {
      // Mettre à jour l'état pour indiquer que l'utilisateur est connecté
  setUtilisateurConnecte(true);
  alert('Utilisateur connecté');

};

useEffect(() => {
  console.log("Utilisateur connecté :", utilisateurConnecte);
}, [utilisateurConnecte]);

const handleDeconnexion = () => {
      // Mettre à jour l'état pour indiquer que l'utilisateur est déconnecté
  setUtilisateurConnecte(false); 
  alert('Utilisateur déconnecté');
};
   
 
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
               {!utilisateurConnecte ? 
                <button className="headerconnect" onClick={handleConnexion}> <Link to="/">Se déconnecter</Link> </button> 
                : 
                <button  className="headerconnect" onClick={handleDeconnexion} > <Link to="/Connexion">Se connecter</Link></button>
               }
            </div>
                    {/* <NavLink className="headerconnect" href="/Connexion">Se connecter</NavLink> */}
        </div>
    )
}
      
export default MonHeader     
      
