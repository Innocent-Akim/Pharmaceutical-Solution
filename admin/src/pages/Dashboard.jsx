import React from "react";
import Card from "../components/Card";
import { TbUsers } from "react-icons/tb";
import { GrDocumentUser } from "react-icons/gr";
import { GiEvilBook } from "react-icons/gi";
import { BsBook } from "react-icons/bs";
const Dashboard = () => {
  return (
    <>
      <div className="mt-14 mr-8 grid grid-cols-4 gap-3 p-2 place-content-between  overflow-y-auto bg-slate-50 w-screen">
        {/* flex-1 h-full overflow-x-hidden overflow-y-auto */}
        <Card
          title={"Participants"}
          count={"230"}
          icons={<TbUsers  />}
          icon={<GrDocumentUser />}
          greyColor={"border-blue-50"}
          color={"bg-blue-900"}
          backgroundColor={"bg-blue-900"}
          colortext={"text-blue"}
        />
        <Card
          title={"Cours"}
          count={"50"}
          icons={<TbUsers/>}
          icon={<GiEvilBook />}
          greyColor={"border-red-50"}
          color={"bg-red-900"}
          backgroundColor={"bg-red-900"}
          colortext={"text-red"}
        />
            <Card
          title={"Cours"}
          count={"50"}
          icons={<BsBook/>}
          icon={<GiEvilBook />}
          greyColor={"border-red-50"}
          color={"bg-red-900"}
          backgroundColor={"bg-red-900"}
          colortext={"text-red"}
        />
              <Card
          title={"Cours"}
          count={"50"}
          icons={<BsBook/>}
          icon={<GiEvilBook />}
          greyColor={"border-red-50"}
          color={"bg-red-900"}
          backgroundColor={"bg-red-900"}
          colortext={"text-red"}
        />
        
      </div>
    </>
  );
};

export default Dashboard;
