import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiInformatica } from "react-icons/si";
import { links } from "../contexts/DataItems";
// import {useStateContext} from '../contexts/DataContexts';

function Siderbar() {
  // const[getSelected, setSelected]=useStateContext();
  const styleCount =
    'flex p-4 h-10 mx-2 my-2 font-normal items-center rounded cursor-pointer gap-3 bg-white hover:border-b-4 hover:border-blue-900 text-blue-900';
  return (
    <div className="flex-shrink-0 h-screen  sidebar-inner-wrapper hidden w-64 bg-white border-r dark:border-primary-darker dark:bg-darker md:block">
        <div className="flex items-center gap-3 mt-4 ml-3 text-xl font-extrabold tracking-tight dark:text-white text-blue-900">
          <SiInformatica />
          <span>FORMATION</span>
        </div>
        <div className='mt-10'>
        {links.map((item ,index) => {
          return <div key={index} className={`${styleCount}`}>
            <div className="flex h-8 w-8 rounded-lg bg-white shadow-lg items-center justify-center">
              { item.icon}
            </div>
           <span >
            { item.name}
           </span>
         </div>
        })}
        </div>    
      </div>

  );
}

export default Siderbar;