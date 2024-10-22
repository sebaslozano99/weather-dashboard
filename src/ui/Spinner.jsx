import PropTypes from "prop-types";



export default function Spinner({size = 2, type = "primary"}) {

  const base = "border-t-2 border-r-2 rounded-full animate-spin";

  const styles = {
    primary: base + ` border-t-[#21295C] dark:border-t-[#ffffff] border-r-[#21295C] dark:border-r-[#ffffff] `,
    secondary: base + ` border-t-[#ffffff] border-r-[#ffffff]`
  }

  return (
    <div 
      className={styles[type]}
      style={size ? {width: `${size}rem`, height: `${size}rem`} : {width: "2rem", height: "2rem"}}
    >
      
    </div>
  )
}



Spinner.propTypes = {
  size: PropTypes.number,
  type: PropTypes.string,
}