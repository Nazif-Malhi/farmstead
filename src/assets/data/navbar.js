import { RxDashboard } from "react-icons/rx";
import { GiMoneyStack, GiTestTubes } from "react-icons/gi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaCreditCard } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { BsPersonBoundingBox } from "react-icons/bs";

const style = {
  color: "#344767",
  fontSize: "1.1rem",
};
const active_style = {
  color: "white",
  fontSize: "1.1rem",
};
export const side_navbar = [
  {
    title: "Dashboard",
    active: true,
    path: "dashboard",
    ico: <RxDashboard style={style} />,
    ico_active: <RxDashboard style={active_style} />,
  },
  {
    title: "Test Results",
    active: true,
    path: "test-results",
    ico: <GiTestTubes style={style} />,
    ico_active: <GiTestTubes style={active_style} />,
  },
  {
    title: "Profit/Loss",
    active: true,
    path: "profit-loss",
    ico: <GiMoneyStack style={style} />,
    ico_active: <GiMoneyStack style={active_style} />,
  },
  {
    title: "Reports",
    active: true,
    path: "reports",
    ico: <HiOutlineDocumentText style={style} />,
    ico_active: <HiOutlineDocumentText style={active_style} />,
  },
];

export const side_navbar_others = [
  {
    title: "Profile",
    active: true,
    path: "profile",
    ico: <BsPersonBoundingBox style={style} />,
    ico_active: <BsPersonBoundingBox style={active_style} />,
  },

  {
    title: "Settings",
    active: true,
    path: "reports",
    ico: <CiSettings style={style} />,
    ico_active: <CiSettings style={active_style} />,
  },
];
