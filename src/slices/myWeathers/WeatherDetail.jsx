import PropTypes from "prop-types";



export default function WeatherDetail({label, data, children}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-1 border-[1px] border-black/20 dark:border-white/20 rounded-md shadow-md" >   

      <p className="font-bold dark:text-white" >{label}</p>

      <span className="flex items-center justify-center text-3xl rounded-full dark:text-cyan-500" >{children}</span>   

      <p className="dark:text-white" >{data}</p>

    </div>
  )
}


WeatherDetail.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    data: PropTypes.string,
}