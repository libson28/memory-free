import React from "react";
import SecondMenu from '../header/SecondHeader';
import Memory from "./Memoires";
import '../MesStyles/dashboardUser.css'


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
              <a href="">
                <i class="fa-solid fa-left-long"></i> Accueil
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa-solid fa-list"></i> Lister
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa-solid fa-book-bookmark"></i>Archives
              </a>
            </li>
           
          </ul>
        </div>

        <div className="disconnect">
          <ul>
            <li>
              <a>Deconnection</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default User