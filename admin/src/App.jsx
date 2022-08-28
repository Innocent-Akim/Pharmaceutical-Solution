import React from "react";
import { Siderbar, NavBar } from "./components";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Parametre, Cours, Paiement, Participants } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <Siderbar />

        <div className="flex justify-center fixed right-4 bottom-4 items-center cursor-pointer bg-blue-900 h-10 w-10 rounded-full hover:drop-shadow-sm">
          <FiSettings className="text-white text-center items-center" />
        </div>
        <div className="fixed bg-white navbar w-full h-20  shadow-sm">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cours" element={<Cours />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/paiement" element={<Paiement />} />
          <Route path="/parametres" element={<Parametre />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
