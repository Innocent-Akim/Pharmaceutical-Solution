import React from "react";
import { BiCheck } from "react-icons/bi";
import { useStateContext } from "../contexts/DataContexts";

const Button = ({ title, onClick }) => {
  const [getSelected] = useStateContext();
  return (
    <button
      className={`flex items-center gap-1 h-8 hover: ease-in duration-300 text-center px-2 hover:bg-blue-900 hover:text-white rounded-full font-light justify-center border-solid border-2 ${
        getSelected ? " border-blue-100" : "bg-blue-900"
      }`}
      onClick={onClick}
    >
      <BiCheck />
      {title}
    </button>
  );
};

export default Button;
