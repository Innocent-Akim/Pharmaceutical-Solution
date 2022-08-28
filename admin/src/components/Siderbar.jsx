import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineLocalPharmacy } from "react-icons/md";

function Siderbar() {
  const styleCount =
    "flex m-4 bg-white h-10 mx-2 my-2 items-center rounded cursor-pointer gap-3 ";
  return (
    <div className="flex-shrink-0 hidden w-64 bg-white border-r dark:border-primary-darker dark:bg-darker md:block">
        <div className="flex flex-col h-full">
                 <div className="flex items-center gap-3 mt-4 ml-3 text-xl text-white font-extrabold tracking-tight dark:text-white to-slate-900">
        <MdOutlineLocalPharmacy  />
        <span>F. MEMOIRE</span>
      </div>
      <div className={`${styleCount}`}>
        <AiOutlineDashboard className="text-blue-900 ml-5" />
        <span className="text-black text-center text-12 font-normal">
          Dashboard
        </span>
      </div>
      <div className={`${styleCount}`}>
        <AiOutlineDashboard className="text-blue-900 ml-5" />
        <span className="text-black text-center text-12 font-normal">
          Cours
        </span>
      </div>
      <div className={`${styleCount}`}>
        <AiOutlineDashboard className="text-blue-900 ml-5" />
        <span className="text-black text-center text-12 font-normal">
          Participant
        </span>
      </div>
      <div className={`${styleCount}`}>
        <AiOutlineDashboard className="text-blue-900 ml-5" />
        <span className="text-black text-center text-12 font-normal">
          Parametre
        </span>
      </div>
    </div>
        </div>

 
  );
}

export default Siderbar;
