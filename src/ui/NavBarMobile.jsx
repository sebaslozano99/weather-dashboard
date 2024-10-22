import StyledNavlink from "./StyledNavlink";
import PropTypes from "prop-types";



export default function NavBarMobile({showMenu, setShowMenu}) {
  return (
    <nav className={`fixed top-[10vh] ${showMenu ? "right-0" : "right-[-100%]"} min-[580px]:hidden z-50 h-[90vh] flex justify-center items-center w-full bg-[#21295C] dark:bg-[#0C070D] transition-all duration-500 ease-in-out`} >
      <ul className="flex flex-col items-center gap-12" >
        <StyledNavlink to="/homepage" handleClick={setShowMenu} >Home</StyledNavlink>
        <StyledNavlink to="/dashboard" handleClick={setShowMenu} >Dashboard</StyledNavlink>
        <StyledNavlink to="/myWeather" handleClick={setShowMenu} >My Weather</StyledNavlink>
        <StyledNavlink to="/account" handleClick={setShowMenu} >Account</StyledNavlink>
      </ul>
    </nav>
  )
}


NavBarMobile.propTypes = {
    showMenu: PropTypes.bool,
    setShowMenu: PropTypes.func,

  }