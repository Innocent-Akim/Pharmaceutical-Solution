import React from "react";
import { GiEvilBook } from "react-icons/gi";

const Cours = () => {
  return (
    <div className="mt-20 p-2 place-content-between overflow-y-auto">
      <div classNam="flex text-center font-bold text-2xl relative">
        <GiEvilBook />
        <span>Cours</span>
      </div>
    </div>
  );
};

export default Cours;
