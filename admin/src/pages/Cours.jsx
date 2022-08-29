import React from "react";
import { GiEvilBook } from "react-icons/gi";
import { ItemCategorie } from "../components";

const Cours = () => {
  return (
    <div className="grid grid-cols-3 gap-3 p-2 mt-14 mr-8 place-content-between bg-slate-50 w-screen">
      <ItemCategorie/>
      <ItemCategorie/>
   
      <ItemCategorie/>
      <ItemCategorie/>
      <ItemCategorie/>
      
    </div>
  );
};

export default Cours;
