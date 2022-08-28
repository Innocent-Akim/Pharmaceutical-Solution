import React from "react";
import { Siderbar, Settings } from "./components/index";

const App = () => {
  return (
    <div className="flex justify-between items-center bg-white h-screen w-screen">
      <Siderbar />
      <Settings />
    </div>
  );
};

export default App;
