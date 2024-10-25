import { useQuery } from "@tanstack/react-query";
import { fetchUsersWeatherList } from "../services/supabase";



function useGetUsersLocation(user){

    const { data: usersLocations, isPending, error, isError } = useQuery({
        queryKey: ["usersWeather"],
        queryFn: () => fetchUsersWeatherList(user.id),
        refetchOnWindowFocus: false,
        enabled: user !== null,
        retry: 1
    });


    return { usersLocations, isPending, error, isError  }
}

export default useGetUsersLocation;