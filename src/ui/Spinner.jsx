import PropTypes from "prop-types";



export default function Spinner({size = 0}) {
  return (
    <div 
      className={`border-t-2 border-t-[#21295C] border-r-2 border-r-[#21295C] rounded-full animate-spin`}
      style={size ? {width: `${size}rem`, height: `${size}rem`} : {width: "2rem", height: "2rem"}}
     >
      
    </div>
  )
}



Spinner.propTypes = {
    size: PropTypes.number,
}