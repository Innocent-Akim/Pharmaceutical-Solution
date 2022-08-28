import React from "react";
import Card from "../components/Card";
import { TbUsers } from "react-icons/tb";
import { GrDocumentUser } from "react-icons/gr";
const Dashboard = () => {
  return (
    <>
      <div className="mt-20 grid grid-cols-4 gap-3 p-2 place-content-between">
        <Card
          title={"Participants"}
          count={"230"}
          icons={<TbUsers/>}
          icon={<GrDocumentUser/>}
          greyColor={"text-blue-900"}
          color={"text-blue-900"}
          backgroundColor={"text-blue-900"}
        />
      </div>
      <div></div>
    </>
  );
};

export default Dashboard;
