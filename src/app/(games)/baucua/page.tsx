import { Metadata } from "next";
import BaucuaBoard from "./components/Board";

export const metadata: Metadata = {
  title: "Bầu cua Game | Made by Bevis",
  description: "Welcome to Bau Cua Page",
};

const BaucuaPage = () => {
  return <BaucuaBoard />;
};

export default BaucuaPage;
