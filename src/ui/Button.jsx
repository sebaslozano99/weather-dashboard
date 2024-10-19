import PropTypes from "prop-types";
import { useState } from "react";



export default function Button({children, setterFunc}) {

  const [isRight, setIsRight] = useState(false);

  function handleClick(){
    setIsRight((prev) => !prev);

    if(setterFunc) setterFunc();
  }

  return (
    <button 
        className={`flex ${isRight ? "justify-end" : "justify-start"} px-1.5 py-1 text-white  w-16 bg-[#21295C] transition-all duration-300 ease-in-out rounded-2xl`}
        onClick={handleClick} 
    >
        <div className={`text-black w-6 h-6 bg-white  rounded-full`} >{children}</div>
    </button>
  )
}



Button.propTypes = {
    children: PropTypes.string,
    setterFunc: PropTypes.func,
}