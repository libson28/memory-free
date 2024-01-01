import React, {useState} from 'react';
import '../MesStyles/Connexion.css';
import { auth } from '../FirebaseConfig';
// import MonHeader from '../header/Header';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


function Connexion() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const submit = async(element) =>
  {
    element.preventDefault();

    if (email === "" || pass === "") {
      // alert("Veuillez remplir tous les champs");
      Swal.fire({
        title: 'Les champs sont obligatoires',
        text: 'Veuillez remplir tous les champs',
        icon: 'error', // 'success', 'error', 'warning', 'info', etc.
        confirmButtonText: 'OK'
      });
      } 

      // else if (email !== auth.email || pass !== auth.password) {
      //   Swal.fire({
      //     title: "Le compte n'existe pas",
      //     text: 'Email ou mot de passe invalid ',
      //     icon: 'error', // 'success', 'error', 'warning', 'info', etc.
      //     confirmButtonText: 'OK'
      //   })
      //   } 
    
      else{

        signInWithEmailAndPassword(auth, email, pass).then((userCredential) =>{
          Swal.fire({
            title: 'Connecté ',
            text: 'Bravo',
            icon: 'success', // 'success', 'error', 'warning', 'info', etc.
            confirmButtonText: 'OK'
          });
          console.log(userCredential);
          navigate('/HomeUser')
        })
      }
  };
    return (
        <>
          {/* <MonHeader/> */}
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
                  <input type='email' name='email'  className='lnc' value={email}  placeholder='example@gmail.com' onChange={(element) => setEmail (element.target.value)}></input> <br></br>
                  <label>Mot de passe</label><br></br>
                      <input type='password' name='password' className='lnc' value={pass}  placeholder='******' onChange={(element) => setPass (element.target.value)} ></input> <br></br>
                      <button className='btn' onClick = {submit} > Se connecter </button>
                      <p className='logIn'>Vous n'avez pas de compte : <Link to ='/Inscription'> <i >Inscrivez-vous</i> </Link> </p>

                </form>
              </div>
            
          </div>
        </>
    )
    }
    

export default Connexion