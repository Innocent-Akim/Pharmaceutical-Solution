import React from "react";
import { ItemCategorie } from "../components";
import { Button } from "../components";
import { useStateContext } from "../contexts/DataContexts";

const Cours = () => {
  const {getSelected,setSelected} = useStateContext();
  return (
    <div className="mt-14 mr-8 grid grid-row-2">
      <div className="flex justify-between">
        <div className="fixed flex items-center mr-10 bg-slate-50 w-full h-14 gap-2">
          <Button title={"Development"} />
          <Button
            title={"Culture"}
            bgColor={getSelected ? " border-blue-100" : "bg-blue-900"}
            onClick={(prev) => {
              setSelected(!prev);
            }}
          />
          <Button title={"Language"} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-14  bg-slate-50 w-full">
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
