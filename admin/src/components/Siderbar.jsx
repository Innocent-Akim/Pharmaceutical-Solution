import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { SiInformatica } from "react-icons/si";
import { links } from "../contexts/DataItems";
// import {useStateContext} from '../contexts/DataContexts';

function Siderbar() {
  // const[getSelected, setSelected]=useStateContext();
  const styleCount =
    "flex p-4 h-10 mx-2 my-2 font-normal items-center rounded cursor-pointer gap-3 bg-white hover:border-b-4 hover:border-blue-900 text-blue-900 ease-in duration-150";
  return (
    <div className="fixed flex h-screen w-52 bg-white shadow-sm">
    
      <div className="mt-32">
        {links.map((item, index) => {
          return (
            <NavLink
            key={index}
            to={item.route}>
              <div key={index} className={`${styleCount}`}>
                <div className="flex h-8 w-8 rounded-lg bg-white shadow-lg items-center justify-center">
                  {item.icon}
                </div>
                <span>{item.name}</span>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Siderbar;
