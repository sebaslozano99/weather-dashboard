import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import PropTypes from "prop-types";


export default function StyledInput({
  state,
  setState, 
  type = "text", 
  placeholder = "", 
  name = "",
  disabled = false,
  className = "",
}) {


  const [showPassword, setShowPassword] = useState(false);
  const baseStyle = "px-1 py-1 outline-none";

  function handleShowPassword(){
    setShowPassword(password => !password);
  }



  if(type === "password") return (
    <>
      <input 
        type={showPassword ? "text" : type} 
        placeholder={placeholder}
        name={name}
        className={`relative ${baseStyle} ${className}`}
        required 
        value={state}
        onChange={(e) => setState(e.target.value)}
        disabled={disabled}
      />
      { !showPassword && <FaEye className="absolute top-[60%] right-2 cursor-pointer" onClick={handleShowPassword}  />}
      { showPassword && <FaEyeSlash className="absolute top-[60%] right-2 cursor-pointer" onClick={handleShowPassword}  />}
    </>
  )


  return (
    <input 
      type={type} 
      placeholder={placeholder}
      name={name}
      className={`${baseStyle} ${className}`}
      required 
      value={state}
      onChange={(e) => setState(e.target.value)}
      disabled={disabled}
    />
  )
}


StyledInput.propTypes = {
  state: PropTypes.string,
  setState: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
}