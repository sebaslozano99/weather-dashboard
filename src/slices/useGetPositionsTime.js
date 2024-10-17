import { useQuery } from "@tanstack/react-query";
import getCurrentPositionsTime from "../services/timeApi";



function useGetPositionsTime(latitude, longitude, queryKey){
    
    const { data, isPending, error, isError } = useQuery({
        queryKey: [queryKey],
        queryFn: () => getCurrentPositionsTime(latitude, longitude),
        refetchOnWindowFocus: false,
        retry: 2
    })


    return { data, isPending, error, isError }
}

export default useGetPositionsTime;