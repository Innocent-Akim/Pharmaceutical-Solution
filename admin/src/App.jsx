import React from "react";
import { Siderbar } from "./components/index";
import {FiSettings} from 'react-icons/fi'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Dashboard,Parametre,Cours,Paiement,Participants} from './pages'


const App = () => {
  return ( 
  <BrowserRouter>
    <div className="flex justify-between items-center bg-white h-screen w-screen">
      <Siderbar />
      <div className="flex justify-center fixed right-4 bottom-4 items-center cursor-pointer bg-blue-900 h-10 w-10 rounded-full hover:drop-shadow-sm">
         <FiSettings className="text-white text-center items-center" />
      </div>
            <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/cours' element={<Cours />} />
                <Route path='/participants' element={<Participants />} />
                <Route path='/paiement' element={<Paiement />} />
                <Route path='/parametres' element={<Parametre />} />
            </Routes>

      
    </div>
    </BrowserRouter>
  );
};

export default App;
