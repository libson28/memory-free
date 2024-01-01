import React, {useState, useEffect} from 'react';
// import { FaUserCircle } from 'react-icons/fa';
import './header.css'


function MonHeader() {
    const [utilisateurConnecte, setUtilisateurConnecte] = useState(false);

const handleConnexion = () => {
      // Mettre à jour l'état pour indiquer que l'utilisateur est connecté
  setUtilisateurConnecte(true);
  // alert('se déconnecter');
  alert('Utilisateur connecté');

};

useEffect(() => {
  console.log("Utilisateur connecté :", utilisateurConnecte);
}, [utilisateurConnecte]);

const handleDeconnexion = () => {
      // Mettre à jour l'état pour indiquer que l'utilisateur est déconnecté
  setUtilisateurConnecte(false); 
  // alert('se connecter');
  alert('Utilisateur déconnecté');
};
   
 
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
               {/* <button  ><a href='/Connexion'>Se connecter</a></button> */}
               {utilisateurConnecte ? (
                <button href="/" className="headerconnect" onClick={handleConnexion}>
                Se déconnecter
                </button>
                ) : (
                <button href="/Connexion" className="headerconnect" onClick={handleDeconnexion}>
                Se connecter
                </button>
            )}
            </div>
        </div>
    )
}
      
export default MonHeader     
      
