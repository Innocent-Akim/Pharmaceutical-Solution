import React from "react";
import { Siderbar, Settings } from "./components/index";
import {FiSettings} from 'react-icons/fi'


const App = () => {
  return (
    <div className="flex justify-between items-center bg-white h-screen w-screen">
      <Siderbar />
      <div className="flex justify-center fixed right-4 bottom-4 items-center cursor-pointer bg-blue-900 h-10 w-10 rounded-full hover:drop-shadow-sm">
         <FiSettings className="text-white text-center items-center" />
      </div>
     
    </div>
  );
};

export default App;
