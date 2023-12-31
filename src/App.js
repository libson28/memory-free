import './App.css';
import { BrowserRouter } from "react-router-dom";
import Rout from './mesPages/Route'
// import Inscription from './mesPages/Inscription';
// import Connexion from './mesPages/Connexion';
// import About from './mesPages/Apropos';
// import Home from './mesPages/Accueil';
// import Header from './header/Header';
// import SecondMenu from './header/SecondHeader';
// import Memory from './mesPages/Memoires'
// import Pagination from './mesPages/Pagination'
// import User from './mesPages/DashboardUser'
// import Popup from './mesPages/AjoutMemoire'


const App = () => {
  return (
  
    <>
      <BrowserRouter>
        <Rout />
      </BrowserRouter>
    </>
    
  )
}
export default App;
