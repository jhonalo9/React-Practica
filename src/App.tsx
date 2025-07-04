import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Navbar } from './components/Navbar';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import { Proveedores } from './components/Proveedores';
import { Articulos } from './components/Articulos';
import { Ventas } from './components/Ventas';
import { Clientes } from './components/Clientes';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <div className="container mt-4">
        <Routes>
          <Route path="/proveedores" element={<Proveedores/>} />
          <Route path="/articulos" element={<Articulos/>} />
          <Route path="/clientes" element={<Clientes/>} />
          <Route path="/ventas" element={<Ventas/>} />
          
          
        </Routes>
      </div>
    </Router> 
    
    </>
  );
}

export default App;
