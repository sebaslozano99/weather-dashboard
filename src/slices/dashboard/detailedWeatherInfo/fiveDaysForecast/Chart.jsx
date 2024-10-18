import { CartesianGrid, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import PropTypes from "prop-types";



const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {

    const date = new Date(payload[0].payload.dt_txt).toLocaleDateString();

    return (
      <div className="bg-white px-2 py-4 rounded-md">
        <p>Date: {date}</p>
        <p className="label">{`Temperature: ${(payload[0].value).toFixed(1)}°C`}</p>
      </div>
    );
  }
}


export default function Chart({data}) {
  return (
    <ResponsiveContainer width="100%" height="100%" >
        <AreaChart width="100%" height="100%" data={data} >
            <Area type="monotone" dataKey="main.temp"   />
            <CartesianGrid stroke="#1C7293" strokeDasharray="5 5" />
            <YAxis />
            <Tooltip content={ <CustomTooltip /> } />
        </AreaChart>
    </ResponsiveContainer>
  )
}



Chart.propTypes = {
  data: PropTypes.array,
}


CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}