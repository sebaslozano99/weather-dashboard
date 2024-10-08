import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Applayout() {
  return (
    <main className="w-full min-h-screen bg-[#9EB3C2]" >
      <Header />
      <Outlet />
    </main>
  )
}
