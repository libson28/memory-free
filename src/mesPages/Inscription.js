import React, {useState} from 'react';
import '../MesStyles/Inscription.css';
import { auth } from '../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


function Inscription () {

    const navigate = useNavigate();

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confPass, setConfPass] = useState('');


  
  const submit = async(element) =>
  {
    element.preventDefault();

    if (nom === "" || prenom === "" || email === "" || pass === "" || confPass === "") {
      // alert("Veuillez remplir tous les champs");

      Swal.fire({
        title: 'Les champs sont obligatoires',
        text: 'Veuillez remplir tous les champs',
        icon: 'error', // 'success', 'error', 'warning', 'info', etc.
        confirmButtonText: 'OK'
      });

    }
    
    else if (pass !== confPass) {
      // alert("Les mots de passe ne correspondent pas");
      Swal.fire({
        title: 'Les mots de passe ne se correspondent pas',
        // text: 'Veuillez remplir tous les champs',
        icon: 'error', // 'success', 'error', 'warning', 'info', etc.
        confirmButtonText: 'OK'
      });
    }
    else{

      createUserWithEmailAndPassword(auth, email, pass, ).then( (userCredential) =>{
        //  alert("Compte créé avec succès");
         Swal.fire({
          title: 'Compte crée avec succès',
          text: 'Bravo',
          icon: 'success', // 'success', 'error', 'warning', 'info', etc.
          confirmButtonText: 'OK'
        });
        console.log('Compte crée avec succès', userCredential);
         navigate('/Connexion');

      })
    }


  }; 

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
                <input type='text' name='prenom' className='lnc' value={prenom}  placeholder='Votre prenom' onChange={(element) => setPrenom (element.target.value)} ></input> <br></br>
                <label>Nom</label><br></br>
                <input type='text' name='nom'  className='lnc' value={nom}  placeholder='Votre nom' onChange={(element) => setNom (element.target.value)} ></input> <br></br>
                <label>Email</label><br></br>
                <input type='email' name='email'  className='lnc' value={email}  placeholder='Votre email' onChange={(element) => setEmail (element.target.value)} ></input> <br></br>
                <label>Mot de passe</label><br></br>
                <input type='password' name='password' className='lnc' value={pass}  placeholder='*******' onChange={(element) => setPass (element.target.value)}></input> <br></br>
                <label>Confirmation</label><br></br>
                <input type='password' name='password' className='lnc' value={confPass}  placeholder='*******' onChange={(element) => setConfPass (element.target.value)}></input> <br></br>
                <input type='checkbox' name='gcu'></input> <i>Acceptez les conditions d'utilisation</i><br></br>
                <button className='btn' onClick={submit}>Envoyer</button>
            </form>
            </div>
           
        </div>
    )
}

export default Inscription