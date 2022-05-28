import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Pocetna from "./routes/Pocetna"
import Dodaj from './routes/Dodaj';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigacija from './routes/Navigacija';
import Edit from './routes/Edit';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <BrowserRouter>
    <Navigacija />
      <Routes>
        <Route path='/' element={<Pocetna />}/>  
        <Route path='/routes/Dodaj' element={<Dodaj />}/>  
        <Route path='/Edit/:EditID' element={<Edit />}/>       
      </Routes>    
    </BrowserRouter>
);


