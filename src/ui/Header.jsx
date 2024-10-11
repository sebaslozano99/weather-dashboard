import Logo from "./Logo";
import NavBar from "./NavBar";
import { FiMoon } from "react-icons/fi";


export default function Header() {
  return (
    <header className={`flex items-center justify-around w-full h-[10vh] bg-[#21295C] shadow-2xl`} >
      <Logo />
      <NavBar />
      <button >
        <FiMoon color="#fff" size={20} />
      </button>
    </header>
  )
}
