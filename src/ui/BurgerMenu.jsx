import PropTypes from "prop-types";


const spanStyle = `block my-1 w-full h-[2px] bg-white transition-all duration-500 ease-in-out `;


export default function BurgerMenu({showMenu, setShowMenu}) {


  return (
    <div className="block min-[580px]:hidden w-6 h-6 cursor-pointer" onClick={() => setShowMenu((prev) => !prev)} >
        <span className={`${spanStyle} ${showMenu ? "rotate-45 translate-y-[6px]" : ""}`} ></span>
        <span className={`${spanStyle} ${showMenu ? "opacity-0" : ""}`} ></span>
        <span className={`${spanStyle} ${showMenu ? "-rotate-45 translate-y-[-6px]" : ""}`} ></span>
    </div>
  )
}


BurgerMenu.propTypes = {
  showMenu: PropTypes.bool,
  setShowMenu: PropTypes.func,
}