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
      className={`px-1.5 py-1 w-16 bg-[#21295C] transition-all duration-300 ease-in-out rounded-2xl`}
      onClick={handleClick} 
    >
      <div 
        className={`flex justify-center items-center text-black w-6 h-6 bg-[#fff] rounded-full transition-all duration-300 ease-in-out ${isRight ? "translate-x-[120%]" : "translate-x-0"}`} 
      >
        {children}
      </div>
    </button>
  )
}



Button.propTypes = {
    children: PropTypes.any,
    setterFunc: PropTypes.func,
}