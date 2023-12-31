import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../MesStyles/Connexion.css';

const Popup = () => {
  const [showModal, setShowModal] = useState(false);
  let rowcount = 0;

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
     let rowcount=0;
        // add new row to the table
        document.querySelector("#submit").addEventListener("click",(e)=>{
            e.preventDefault();
            let name = document.getElementById('name').value;
            let age = document.getElementById('age').value;
            let phone = document.getElementById('phone').value;
            if(name == "" || age == "" || phone == "") {
                alert("All fields are required");
                } else {
                    rowcount++;
                    const tbody=document.querySelector('tbody');
                    let tr=document.createElement('tr');
                    let td1=document.createElement('td');
                    let td2=document.createElement('td');
                    let td3=document.createElement('td');
                    let td4=document.createElement('td');
                    let td5=document.createElement('td');
                    td1.innerText=rowcount;
                    td2.innerText=name;
                    td3.innerText=age;
                    td4.innerText=phone;
                    td5.innerHTML=`<button class="edit"><i class="fa-solid fa-pen-to-square fa-lg"></i></button> 
                    <button class="save mx-2"><i class="fa-solid fa-file-circle-check fa-lg"></i></button> 
                    <button class="delete"><i class="fa-solid fa-trash-can fa-lg"></i></button>`

                    // APPEND ALL TD TO ROW
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tr.appendChild(td4)
                tr.appendChild(td5)
                tbody.append(tr)

                // action buttons functions 

                let editbtn=document.querySelectorAll(".edit");
                let savebtn=document.querySelectorAll(".save");
                let deletebtn=document.querySelectorAll(".delete");
                   
                  for(let k=0;k<editbtn.length;k++){
                    console.log(editbtn[k])
                    // EDIT BUTTON
                editbtn[k].onclick=function(){
                   let parent= this.parentElement.parentElement
                   parent.style.border="2px solid black";
                   parent.contentEditable=true;
                
                }
                // SAVE BUTTON
                savebtn[k].onclick=function(){
                    let parent= this.parentElement.parentElement
                    parent.style.border="";
                    parent.contentEditable=false;
                    
                    }
                    // DELETE BUTTON
                    deletebtn[k].onclick=function(){
                        let parent= this.parentElement.parentElement
                        parent.remove()
                        }
                    }

            }

        })
  };

  return (
    <>
      <Button className='btnnnn' variant="primary" onClick={handleOpenModal}>
        Ajouter un mémoire
      </Button>

      <Modal className="form" show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3 className="leTitre">Ajouter un mémoire</h3>
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          {/* Form and data table structure */}
            <form onSubmit={handleFormSubmit}>
              {/* ... (Form inputs) */}
            <div class="mb-3">
                <label for="fullname" class="form-label">Titre</label>
                <input type="text" class="form-control" id="name" placeholder="" />
            </div>
            <div class="mb-3">
                <label for="age" class="form-label">Description</label>
                <input type="text" class="form-control" id="age" min="18" placeholder="" />
            </div>
           
            <div class="mb-3">
                <label for="phone" class="form-label">Fichier</label>
                <input type="file" class="form-control" id="phone" placeholder="" />
            </div>
            <Button type="submit" class="btn" id="submit" >Submit</Button>
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
                <tbody>{/* ... (Table body) */}</tbody>
              </table>
            </div>
          </div>
    </>
  );
};

export default Popup;
