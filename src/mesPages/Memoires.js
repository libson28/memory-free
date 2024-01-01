import React, {useEffect, useState} from 'react';
import Header from '../header/Header';
import '../MesStyles/Memoires.css'
import {  Button, Image } from 'react-bootstrap';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../FirebaseConfig';

function Memory () {
  const [memoires, setMemoires] = useState([]);
  const values = collection (firestore, "memoire" )


  useEffect(() =>{
    const getData =  async() =>{
      const dbMemoires = await getDocs(values)
      setMemoires (dbMemoires.docs.map(doc=>({...doc.data(),id:doc.id})))
      
    }
    getData()
  })


    return (
        <>
            <Header />
            <br></br>
            <div className='srch'>
                <input type='text' name='srch' placeholder='Recherchez ici' />
            </div>
            <br />

            <div className='cards'>

              {memoires.map((memoire) => (
                <div className="card">
                    <div className="card-image">
                        <Image src='https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=1060&t=st=1703894141~exp=1703894741~hmac=2eb27ddfa91d89ed4796f2bc1459d4edd7c531c40dab17672a6f6adae5fddc84' />
                    </div>
                    <div className="category"> {memoire.name1} </div>
                    <div className="heading">
                        <p>{memoire.name2}</p>
                    </div>
                </div>
             ))}
               

              
            </div>
        </>
    )
}

export default Memory