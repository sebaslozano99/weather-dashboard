import { useQuery } from "@tanstack/react-query";
import { getWeatherData } from "../services/openWeather";



function useGetWeatherInfoOfPosition(cityObjectWithLatAndLon){
    const { data, isPending, error, isError } = useQuery({
        queryKey: ["mainWeather", cityObjectWithLatAndLon],
        queryFn: ({signal}) => getWeatherData(cityObjectWithLatAndLon, signal),
        retry: 2,
        refetchOnWindowFocus: false,
    });


    return { data, isPending, error, isError }

}


export default useGetWeatherInfoOfPosition;