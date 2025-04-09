import { Metadata } from "next";
import BaucuaGame from "./components/BaucuaGame";

export const metadata: Metadata = {
  title: "Bầu cua Game | Made by Bevis",
  description: "Welcome to Bau Cua Page",
};

const BaucuaPage = () => {
  return <BaucuaGame />;
};

export default BaucuaPage;
