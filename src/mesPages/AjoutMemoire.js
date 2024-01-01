// import React, { useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';
// import '../MesStyles/Connexion.css';
// import { storage, firestore } from "../FirebaseConfig";


// const Popup = () => {

//   const [image, setImage] = useState(null);
//   const [description, setDescription] = useState('');
//   const [fichier, setFichier] = useState(null);

//   const handleImageChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const handleFileChange = (e) => {
//     if (e.target.files[0]) {
//       setFichier(e.target.files[0]);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Enregistrez l'image dans le stockage de Firebase
//     const imageRef = storage.ref(`images/${image.name}`);
//     await imageRef.put(image);
//     const imageUrl = await imageRef.getDownloadURL();

//     // Enregistrez le fichier dans le stockage de Firebase
//     const fichierRef = storage.ref(`fichiers/${fichier.name}`);
//     await fichierRef.put(fichier);
//     const fichierUrl = await fichierRef.getDownloadURL();

//     // Enregistrez les données dans Firestore
//     await firestore.collection('memoires').add({
//       image: imageUrl,
//       fichier: fichierUrl,
//       description,
//     });

//     // Réinitialisez les champs du formulaire
//     setImage(null);
//     setFichier(null);
//     setDescription('');
//   };

//   const [showModal, setShowModal] = useState(false);
//   let rowcount = 0;

//   const handleOpenModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Your form submission logic here
//      let rowcount=0;
//         // add new row to the table
//         document.querySelector("#submit").addEventListener("click",(e)=>{
//             e.preventDefault();
//             let name = document.getElementById('name').value;
//             let age = document.getElementById('age').value;
//             let phone = document.getElementById('phone').value;
//             if(name === "" || age === "" || phone === "") {
//                 alert("All fields are required");
//                 } else {
//                     rowcount++;
//                     const tbody=document.querySelector('tbody');
//                     let tr=document.createElement('tr');
//                     let td1=document.createElement('td');
//                     let td2=document.createElement('td');
//                     let td3=document.createElement('td');
//                     let td4=document.createElement('td');
//                     let td5=document.createElement('td');
//                     td1.innerText=rowcount;
//                     td2.innerText=name;
//                     td3.innerText=age;
//                     td4.innerText=phone;
//                     td5.innerHTML=`<button class="edit"><i class="fa-solid fa-pen-to-square fa-lg"></i></button> 
//                     <button class="save mx-2"><i class="fa-solid fa-file-circle-check fa-lg"></i></button> 
//                     <button class="delete"><i class="fa-solid fa-trash-can fa-lg"></i></button>`

//                     // APPEND ALL TD TO ROW
//                 tr.appendChild(td1)
//                 tr.appendChild(td2)
//                 tr.appendChild(td3)
//                 tr.appendChild(td4)
//                 tr.appendChild(td5)
//                 tbody.append(tr)

//                 // action buttons functions 

//                 let editbtn=document.querySelectorAll(".edit");
//                 let savebtn=document.querySelectorAll(".save");
//                 let deletebtn=document.querySelectorAll(".delete");
                   
//                   for(let k=0;k<editbtn.length;k++){
//                     console.log(editbtn[k])
//                     // EDIT BUTTON
//                 editbtn[k].onclick=function(){
//                    let parent= this.parentElement.parentElement
//                    parent.style.border="2px solid black";
//                    parent.contentEditable=true;
                
//                 }
//                 // SAVE BUTTON
//                 savebtn[k].onclick=function(){
//                     let parent= this.parentElement.parentElement
//                     parent.style.border="";
//                     parent.contentEditable=false;
                    
//                     }
//                     // DELETE BUTTON
//                     deletebtn[k].onclick=function(){
//                         let parent= this.parentElement.parentElement
//                         parent.remove()
//                         }
//                     }

//             }

//         })
//   };

//   return (
//     <>
//       <Button className='btnnnn' variant="primary" onClick={handleOpenModal}>
//         Ajouter un mémoire
//       </Button>

//       <Modal className="form" show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             <h3 className="leTitre">Ajouter un mémoire</h3>
//           </Modal.Title>
//         </Modal.Header>
        
//         <Modal.Body>
//           {/* Form and data table structure */}
//             <form onSubmit={handleFormSubmit}>
//               {/* ... (Form inputs) */}
//             <div class="mb-3">
//                 <label for="fullname" class="form-label">Titre</label>
//                 <input type="file" onChange={handleImageChange} />
//                 {/* <input type="text" class="form-control" id="name" placeholder="" /> */}
//             </div>
//             <div class="mb-3">
//                 <label for="age" class="form-label">Description</label>
//                 <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
//                 {/* <input type="text" class="form-control" id="age" min="18" placeholder="" /> */}
//             </div>
           
//             <div class="mb-3">
//                 <label for="phone" class="form-label">Fichier</label>
//                 <input type="file" onChange={handleFileChange} />
//                 <input type="file" class="form-control" id="phone" placeholder="" />
//             </div>
//             <Button type="submit" class="btn" id="submit" >Submit</Button>
//              <Button className="monBouton2" onClick={handleCloseModal}>
//             Annuler
//           </Button>
//         </form> 
//         </Modal.Body>
//       </Modal>
//       <div className="container mt-4">
//             <div className="table-responsive">
//               <table className="table p-4">
//                 <thead>
//                   <tr>
//                     <th>#</th>
//                     <th>Titre</th>
//                     <th>Description</th>
//                     <th>Fichier</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>{/* ... (Table body) */}</tbody>
//               </table>
//             </div>
//           </div>
//     </>
//   );
// };

// export default Popup;



import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../MesStyles/Connexion.css';
import { storage, firestore } from '../FirebaseConfig';

const Popup = () => {
  // const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fichier, setFichier] = useState(null);

  const [memoires, setMemoires] = useState([]);

  // const handleImageChange = (e) => {
  //   // if (e.target.text[0]) {
  //   //   setImage(e.target.text[0]);
  //   // }
  //   setTitle(e.target.value);

  // };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFichier(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enregistrez l'image dans le stockage de Firebase
    // const titleRef = storage.ref().child(`title/${title.name}`);
    // await titleRef.put(title);
    // const titleUrl = await titleRef.getDownloadURL();

    // Enregistrez le fichier dans le stockage de Firebase
    const fichierRef = storage.ref().child(`fichiers/${fichier.name}`);
    await fichierRef.put(fichier);
    const fichierUrl = await fichierRef.getDownloadURL();

    // Enregistrez les données dans Firestore
    await firestore.collection('memoires').add({
      // title: titleUrl,
      fichier: fichierUrl,
      description,
    });

    // Réinitialisez les champs du formulaire
    // setTitle('');
    setFichier(null);
    setDescription('');
    handleCloseModal();
    // console.log(setTitle);
    console.log(handleSubmit);
    // Mettez à jour la liste des mémoires
    fetchMemoires();
  };

  const fetchMemoires = async () => {
    const memoiresCollection = await firestore.collection('memoires').get();
    const memoiresData = memoiresCollection.docs.map((doc) => doc.data());
    setMemoires(memoiresData);
  };

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Button className="btnnnn" variant="primary" onClick={handleOpenModal}>
        Ajouter un mémoire
      </Button>

      <Modal className="form" show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3 className="leTitre">Ajouter un mémoire</h3>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit}>
            {/* <div className="mb-3">
              <label htmlFor="fullname" className="form-label">
                Titre
              </label> */}
              {/* <input type="text" onChange={handleImageChange} /> */}
              {/* <input   type="text" className="form-control" id="name" placeholder="" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </div> */}
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Fichier
              </label>
              <input type="file" onChange={handleFileChange} />
            </div>
            <Button type="submit" className="btn" id="submit">
              Submit
            </Button>
            <Button className="monBouton2" onClick={handleCloseModal}>
              Annuler
            </Button>
          </form>
        </Modal.Body>
      </Modal>

      <div className="container mt-4">
        <div className="table-responsive">
          <table className="table p-4">
            <thead>
              <tr>
                <th>#</th>
                <th>Titre</th>
                <th>Description</th>
                <th>Fichier</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {memoires.map((memoire, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{memoire.image}</td>
                  <td>{memoire.description}</td>
                  <td>{memoire.fichier}</td>
                  <td>
                    {/* Ajoutez ici les boutons d'action (modifier, supprimer, etc.) */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Popup;

