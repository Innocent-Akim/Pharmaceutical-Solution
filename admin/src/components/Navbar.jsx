import React from "react";
import { Avatar } from "@material-tailwind/react";

const Navbar = () => {
  return (
    <div className="flex fixed z-10 bg-white w-screen h-24">
    <div className="flex items-center gap-3 mt-4 ml-3 text-2xl font-extrabold tracking-tigh text-orange-600">
      <SiInformatica />
      <span>FORMATION</span>
    </div>
  </div>
  );
};

export default Navbar;
