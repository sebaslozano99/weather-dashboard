import { useThemeContext } from "../contexts/ThemeContext";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Applayout() {

  const { isDarkMode } = useThemeContext();

  return (
    <main className={`w-full min-h-screen ${isDarkMode ? "bg-[#111018]" : "bg-[#9EB3C2]"} ${isDarkMode && "dark"}`} >
      <Header />
      <Outlet />
    </main>
  )
}
