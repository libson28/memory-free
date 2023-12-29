import React from 'react';
import '../MesStyles/Inscription.css';


function Inscription () {
    return (
        <div className='Formulaire-container'>
            <div  className='bbb'>
            <img src="https://img.freepik.com/vecteurs-premium/connectez-vous-page-concept-abstrait-illustration-vectorielle_107173-25670.jpg?w=740" alt=""/>
            </div>

            <div className='bbb'>
                 <form>
                <h1>
                    Inscrivez-vous !
                </h1>
                <label>Prenom</label><br></br>
                <input type='text' name='prenom' className='lnc'></input> <br></br>
                <label>Nom</label><br></br>
                <input type='text' name='nom'  className='lnc'></input> <br></br>
                <label>Email</label><br></br>
                <input type='email' name='email'  className='lnc'></input> <br></br>
                <label>Mot de passe</label><br></br>
                <input type='password' name='password' className='lnc'></input> <br></br>
                <input type='checkbox' name='gcu'></input> <i>Acceptez les conditions d'utilisation</i><br></br>
                <button className='btn'>Envoyer</button>
            </form>
            </div>
           
        </div>
    )
}

export default Inscription