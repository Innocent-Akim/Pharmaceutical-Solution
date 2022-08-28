import React from "react";
import { FaUsers } from "react-icons/fa";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
const Card = ({title,count ,icon,icons,greyColor,backgroundColor}) => {
  return (
    <div className={`w-72 h-32 shadow-md border-4 ${greyColor} p-2 rounded-lg`}>
      <div>
        <div className={`flex ${greyColor} w-12 h-12  justify-center text-lg items-center text-center text-white rounded-lg`}>
          <div className={`w-7 h-7 ${backgroundColor} flex justify-center rounded-md`}>
            {icon}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="grid grid-rows-1 gap-0">
            <span className="font-normal text-14">{title}</span>
            <span className="font-bold text-lg">{count}</span>
          </div>
          <div className={`text-5xl ${backgroundColor}`}>
            {icons}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
