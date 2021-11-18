import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header';
import Fotter from './Components/Layout/Fotter'
import Nav from './Components/Layout/Nav'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ContactoPage from './Pages/Contactos'
import HomePage from './Pages/Home'
import NosotrosPage from './Pages/Nosotros'
import NovedadesPage from './Pages/Novedades'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Nav/>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/nosotros" exact element={<NosotrosPage/>}/>
          <Route path="/novedades" exact element={<NovedadesPage/>}/>
          <Route path="/contacto" exact element={<ContactoPage/>}/>
        </Routes>
        <Fotter/>
      </Router>
    </div>
  );
}

export default App;
