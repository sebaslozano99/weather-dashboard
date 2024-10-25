import { useQuery } from "@tanstack/react-query";
import { fetchUsersWeatherList } from "../services/supabase";


//USER'S ID variable as dependency, since if user logs in/out, it'll re-run the query. This is useful, because without it, if an user that was logged in and had saved a bunch of different places which were displaying in the map with a marker, but then that user logs out, and go back to the map those markers wont be there since the USER'S ID variable is null now, which made the query to run again. Wihtout it, even though an user logged out, his saved locations will still display on the map


function useGetUsersLocation(user){

    const { data: usersLocations, isPending, error, isError } = useQuery({
        queryKey: ["usersWeather", user],
        queryFn: () => fetchUsersWeatherList(user?.id),
        refetchOnWindowFocus: false,
        enabled: user !== null,
        retry: 1
    });


    return { usersLocations, isPending, error, isError  }
}

export default useGetUsersLocation;