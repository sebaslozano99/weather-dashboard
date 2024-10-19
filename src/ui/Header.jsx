import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";
import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";







export default function Header() {

  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu(){
    setShowMenu((prev) => !prev);
  }

  return (
    <header className={`sticky top-0 z-50 flex items-center justify-between min-[580px]:justify-around px-6 min-[580px]:p-0 w-full h-[10vh] bg-[#21295C] shadow-2xl`} >
      <Logo />
      <NavBar />
      <NavBarMobile showMenu={showMenu} setShowMenu={handleShowMenu} />
      <BurgerMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      
    </header>
  )
}
