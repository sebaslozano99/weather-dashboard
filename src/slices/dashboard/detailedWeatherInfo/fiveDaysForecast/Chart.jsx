import { CartesianGrid, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { useTempScaleContext } from "../../../../contexts/TempScaleContext";
import { useThemeContext } from "../../../../contexts/ThemeContext";
import PropTypes from "prop-types";



const CustomTooltip = ({ active, payload }) => {

  const { isCelcius } = useTempScaleContext();
  if (active && payload && payload.length) {


    const temperature = isCelcius ? payload[0].value :  (payload[0].value * 9/5) + 32;
    const date = new Date(payload[0].payload.dt_txt).toLocaleDateString();

    return (
      <div className="bg-white px-2 py-4 rounded-md">
        <p>Date: {date}</p>
        <p className="label">{`Temperature: ${temperature.toFixed(0)}°${isCelcius ? "C" : "F"}`}</p>
      </div>
    );
  }
}


export default function Chart({data}) {

  const { isDarkMode } = useThemeContext();

  return (
    <ResponsiveContainer width="100%" height="100%" >
      <AreaChart width="100%" height="100%" margin={{left: -30}} data={data} >
        <Area type="monotone" dataKey="main.temp"   />
        <CartesianGrid stroke={isDarkMode ? "#aaaaaa" : "#1C7293"} strokeDasharray="5 5" />
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