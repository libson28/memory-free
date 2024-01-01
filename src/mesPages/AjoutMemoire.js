import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../MesStyles/Connexion.css';
import { storage, firestore } from '../FirebaseConfig';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useEffect } from 'react';


const Popup = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');
  const [fichier, setFichier] = useState(null);

  const [memoires, setMemoires] = useState([]);

  const values = collection (firestore, "memoire" )

  useEffect(() =>{
    const getData =  async() =>{
      const dbMemoires = await getDocs(values)
      setMemoires (dbMemoires.docs.map(doc=>({...doc.data(),id:doc.id})))
      
    }
    getData()
  })

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFichier(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(values,{name1:title,name2:description})

    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Fichier:", fichier);
    console.log("Memoires", memoires);

    // Enregistrez le fichier dans le stockage de Firebase
    const fichierRef = storage.ref(`fichiers/${fichier.name}`);
    await fichierRef.put(fichier);
    const fichierUrl = await fichierRef.getDownloadURL();

    // Enregistrez les données dans Firestore
    await firestore.collection('memoires').add({
      fichier: fichierUrl,
    });

    // Réinitialisez les champs du formulaire
    setTitle('');
    setFichier(null);
    setDescription('');
    handleCloseModal();
    console.log(handleSubmit);
    // Mettez à jour la liste des mémoires
  };

// methode pour supprimer
  const handleDelete = async(id)=> {
     const deletememoire = doc(firestore,"memoire",id)
     await deleteDoc(deletememoire)
  };

  // methode pour récuper les données
  const handleRecup = async(id,name1,name2)=> {
    setTitle(name1)
    setDescription(name2)
    setId(id)
  }

  // methode pour modifier
  const handleModifier = async (e) =>{
    e.preventDefault();
    const modifMemoire = doc(firestore,"memoire",id)
    await updateDoc (modifMemoire,{name1:title,name2:description})
    setTitle("")
    setDescription("")
    console.log(handleModifier)
  }

  // methode pour exécuter plusieurs fonctions
  const handleButtonClick = (id, name1, name2) => {
    handleRecup(id, name1, name2);
    handleOpenModal();
  };
  


  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Button className="btnnnn" variant="primary" onClick={handleOpenModal}>
        Ajouter un mémoire
      </Button>
        {/* modal pour ajouter */}
      <Modal className="form" show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3 className="leTitre">Ajouter un mémoire</h3>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label">
                Titre
              </label>
              <input   type="text" className="form-control" id="name" placeholder="" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </div>
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

      {/* modal pour modifier */}
      <Modal className="form" show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h3 className="leTitre">Modifier un mémoire</h3>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleModifier} encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">
              Titre
            </label>
            <input   type="text" className="form-control" id="name" placeholder="" value={title} onChange={(e) => setTitle(e.target.value)}></input>
          </div>
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
            Modifier
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
                {/* <tr> */}
                  <td>{index + 1}</td>
                  <td>{memoire.name1}</td>
                  <td>{memoire.name2}</td>
                  <td>{memoire.fichier}</td>
                  <td><button onClick={()=>handleDelete(memoire.id)} >Supprimer</button> </td>
                  <td><button onClick={()=>handleButtonClick(memoire.id,memoire.name1,memoire.name2)}>Modifier</button> </td>
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

