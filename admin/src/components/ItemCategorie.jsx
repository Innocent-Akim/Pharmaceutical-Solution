import React from "react";
import android from "../assets/react.png";

const ItemCategorie = () => {
  return (
    <div className="bg-white shadow-sm rounded-sm my-2 block hover:ease-in duration-150 cursor-pointer">
      <img className=" flex bg-left-top p-1 " src={android} alt="android" />
      <div className="text-sx flex ml-2 sm:text-xl font-bold text-blue-900 ">
        Debutant React Js
      </div>
      <div className="text-12 flex ml-2 mr-2 sm:text-14 text-justify text-gray-600 font-thin">
        React JS is a JavaScript library, commonly used to develop software that
        is constantly refreshing data on its UI. This technology eliminates the
        need of reloading the whole screen and also avoids processing every
        single line of code. React JS allows you to create components actually
        made with JavaScript; the famous scripting language used to create
        interactive applications and interfaces. If you’re using an app that is
        constantly updating its data, then it was probably developed with
        JavaScript.
      </div>
     
    </div>
  );
};

export default ItemCategorie;
