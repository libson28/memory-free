import React from "react";
// import SecondMenu from '../header/SecondHeader';
// import Memory from "./Memoires";
import '../MesStyles/dashboardUser.css'
import { Link } from "react-router-dom";


function User() {

  return (
    <>
      <div className="sidebar">
        <div className="monLogo">
          <img src='./logo.png' alt='hh' />
        </div>
        <hr />
        <div className="options">
          <ul>
            <li>
              <Link to="/HomeUser">
                <i class="fa-solid fa-left-long"></i> Accueil
              </Link>
            </li>
            <li>
              <Link to="/Popup">
                <i class="fa-solid fa-list"></i> Lister
              </Link>
            </li>
            <li>
              <Link to ="">
                <i class="fa-solid fa-book-bookmark"></i>Archives
              </Link>
            </li>
           
          </ul>
        </div>

        <div className="disconnect">
          <ul>
            <li>
              <Link>Deconnection</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default User