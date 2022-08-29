import React from "react";
import { Siderbar, NavBar } from "./components";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Parametre, Cours, Paiement, Participants } from "./pages";
import { AiFillFacebook } from "react-icons/ai";
import { SiInformatica } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";
import { BsGoogle } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex fixed z-10 bg-blue-900 w-screen h-14 justify-between pr-10">
        <div className="flex items-center gap-3 mt-4 ml-3 text-2xl font-extrabold tracking-tigh text-white">
          <SiInformatica />
          <span>FORMATION</span>
        </div>
        <div className="flex items-center gap-5 mt-4 ml-3 text-xl font-extrabold tracking-tigh text-white ">
          <ImWhatsapp />
          <AiFillFacebook />
          <BsGoogle />
          <div className="flex text-sm font-normal text-justify text-white gap-2 items-center cursor-pointer">
            <GrLanguage className="text-white" />
            <span>Français</span>
          </div>
        </div>
      </div>  
       <div className="flex justify-center fixed right-4 bottom-4 items-center cursor-pointer bg-blue-900 h-10 w-10 rounded-full hover:drop-shadow-sm ">
          <FiSettings className="text-white text-center items-center" />
        </div>
      <div className="flex justify-between">
        <Siderbar />
        <div className="ml-52 mr-10  w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cours" element={<Cours />} />
            <Route path="/participants" element={<Participants />} />
            <Route path="/paiement" element={<Paiement />} />
            <Route path="/parametres" element={<Parametre />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
