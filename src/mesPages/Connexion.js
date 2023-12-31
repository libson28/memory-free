import React, {useState} from 'react';
import '../MesStyles/Connexion.css';
import { FaUserCircle } from 'react-icons/fa';
import MonHeader from '../header/Header';


function Connexion() {
       const [isConnected, setIsConnected] = useState(false);

 const toggleLogin = () => {
    setIsConnected(!isConnected);
  };
    return (
        <>
        <MonHeader/>
        <div className='Formulaire-container'>
            <div  className='bbb'>
            <img src="https://img.freepik.com/vecteurs-premium/connectez-vous-page-concept-abstrait-illustration-vectorielle_107173-25670.jpg?w=740" alt=""/>
            </div>

            <div className='bbb'>
                 <form>
                <h1>
                   Connectez-vous !
                </h1>
                <label>Email</label><br></br>
                <input type='email' name='email'  className='lnc'></input> <br></br>
                <label>Mot de passe</label><br></br>
                    <input type='password' name='password' className='lnc'></input> <br></br>
                    <button onClick={toggleLogin} className='btn'><a href='/HomeUser'>{isConnected ? <FaUserCircle className="profile-icon" /> : 'Se connecter'}</a></button><br></br>
                    <p className='logIn'>Vous n'avez pas de compte: <a href='/Inscription'><i >Inscrivez-vous</i></a></p>
            </form>
            </div>
           
            </div>
            </>
    )
    }
    

export default Connexion