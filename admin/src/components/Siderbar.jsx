import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import { links } from "../contexts/DataItems";
import {useStateContext} from '../contexts/DataContexts';

function Siderbar() {
  const[getSelected, setSelected]=useStateContext();
  const styleCount =
    `flex p-4 text-white h-10 mx-2 my-2 items-center rounded cursor-pointer gap-3 ${getSelected ?'bg-white':'bg-blue-900'}`;
  return (
    <div className="flex-shrink-0 h-screen  sidebar-inner-wrapper hidden w-64 bg-white border-r dark:border-primary-darker dark:bg-darker md:block">
        <div className="flex items-center gap-3 mt-4 ml-3 text-xl font-extrabold tracking-tight dark:text-white to-slate-900">
          <MdOutlineLocalPharmacy />
          <span>F. MEMOIRE</span>
        </div>
        <div className='mt-10'>
        {links.map((item ,index) => {
          return <div key={index} className={`${styleCount}`}>
            <div className='text-blue-900'>
             {item.icon} 
            </div>
           
           <span className="text-blue-900 text-center text-12 font-small">
            { item.name}
           </span>
         </div>
          // <div key={dataItems.name} className='text-blue-700'>
          //   {dataItems.icon} 
          //   <span className="relative px-6 py-3 text-blue-700 text-center  font-normal">
          //     {dataItems.name}
          //   </span>
          // </div>;
        })}
        </div>
        {/* <div className={`${styleCount}`}>
        <AiOutlineDashboard className="text-blue-900 ml-5" />
        <span className="te'xt-black text-center text-12 font-normal">
          Parametre
        </span>
      </div> */}
      </div>

  );
}

export default Siderbar;
