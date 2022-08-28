import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GoBook } from "react-icons/go";
import { BsPeople } from "react-icons/bs";
import { TbFileDollar } from "react-icons/tb";
import { GiSettingsKnobs } from "react-icons/gi";
export const links = [
  {
    name: "Dashboard",
    icon: <MdOutlineDashboardCustomize />,
    route:'/dashboard'
  },
  {
    name: "Cours",
    icon: <GoBook />,
    route:'/cours'
  },
  {
    name: "Participants",
    icon: <BsPeople />,
    route:'/participants'
  },
  {
    name: "Paiement",
    icon: <TbFileDollar />,
    route:'/paiement'
  },
  {
    name: "Parametres",
    icon: <GiSettingsKnobs />,
    route:'/parametres'
  },
];

