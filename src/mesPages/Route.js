import React from 'react'
import { Routes, Route } from 'react-router-dom'
import User from '../mesPages/DashboardUser';
import About from '../mesPages/Apropos';
import Memory from '../mesPages/Memoires';
import Connexion from '../mesPages/Connexion';
import Inscription from '../mesPages/Inscription';
import Home from '../mesPages/Accueil';
import HomeUser from '../mesPages/AccueilUser';



const Rout = () => {
  return (
    <>
        <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/Home' element={<Home />}/>
              <Route path='/User' element={<User />}/>
              <Route path='/About' element={<About />} />
              <Route path='/Memory' element={<Memory />} />
              <Route path='/Connexion' element={<Connexion />} />
              <Route path='/Inscription' element={<Inscription />} />
              <Route path='/HomeUser' element={<HomeUser />} />
       </Routes>
    </>
  )
}

export default Rout