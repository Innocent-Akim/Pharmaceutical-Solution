import React from "react";
import { ItemCategorie } from "../components";
import { Button } from "../components";
import { useStateContext } from "../contexts/DataContexts";
import { RiFileAddLine } from "react-icons/ri";

const Cours = () => {
  const { getSelected, setSelected } = useStateContext();
  const select = getSelected ? " border-blue-100" : "bg-blue-900 text-white";
  return (
    <div className="mt-14 mr-8 grid grid-row-2">
      <div className="fixed flex justify-between right-8 w-full mr-10 bg-white h-14  ml-72 gap-2 ">
        <div className=" flex items-center gap-2  ml-72">
          <Button
            title={"All"}
            bgColor={select}
            onClick={(prev) => setSelected(!prev)}
          />
          <Button
            title={"Development"}
            bgColor={select}
            onClick={(prev) => setSelected(!prev)}
          />
          <Button
            title={"Culture"}
            bgColor={select}
            onClick={(prev) => setSelected(!prev)}
          />
          <Button
            title={"Language"}
            bgColor={select}
            onClick={(prev) => setSelected(!prev)}
          />
        </div>
        <button
          className={`flex items-center mt-2 gap-1 h-8 hover: ease-in duration-300 text-center px-2 bg-orange-600 text-white rounded-full font-light justify-center border-solid border-2 mr-8`}
          // onClick={()=>{}}
        >
          <RiFileAddLine />
          Ajouter
        </button>
      </div>
      <div className="xl:grid xl:grid-cols-3 md:grid md:grid-cols-2 sm:block gap-3 mt-14 bg-slate-50 w-full">
        <ItemCategorie />
        <ItemCategorie />
        <ItemCategorie />
        <ItemCategorie />
        <ItemCategorie />
        <ItemCategorie />
        <ItemCategorie />
      </div>
    </div>
  );
};

export default Cours;
