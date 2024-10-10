import PropTypes from "prop-types";



export default function Spinner() {
  return (
    <div className={`w-[2rem] h-[2rem]  border-t-2 border-t-[#21295C] border-r-2 border-r-[#21295C] rounded-full animate-spin`} >
      
    </div>
  )
}



Spinner.propTypes = {
    size: PropTypes.number,
}