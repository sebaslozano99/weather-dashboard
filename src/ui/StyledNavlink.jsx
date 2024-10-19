import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";


export default function StyledNavlink({
  to, 
  children, 
  handleClick = () => {}
}) {


  return (
    <li>
      <NavLink 
        to={to} 
        className={({isActive}) => `${isActive ? "text-[#ffffff]" : "text-[#9EB3C2]"} font-semibold text-3xl min-[580px]:text-lg`} 
        onClick={handleClick}
      >
        {children}
      </NavLink>
    </li>
  )
}


 StyledNavlink.propTypes = {
    to: PropTypes.string,
    children: PropTypes.string,
    handleClick: PropTypes.func,
}