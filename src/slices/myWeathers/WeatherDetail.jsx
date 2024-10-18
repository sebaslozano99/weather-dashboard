import PropTypes from "prop-types";



export default function WeatherDetail({label, data, children}) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-1 border-[1px] border-black/20 rounded-md shadow-md" >   

        <p className="font-semibold" >{label}</p>
        <span className="flex items-center justify-center w-8 h-8  bg-[#b6b6b6] rounded-full" >{children}</span>   

        <p>{data}</p>
    </div>
  )
}


WeatherDetail.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    data: PropTypes.string,
}