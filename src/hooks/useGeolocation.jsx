import { useState } from "react";
import useLocalstorage from "./useLocalstorage";





export default function useGeolocation(){

    const { value: position, setValue: setPosition } = useLocalstorage("usersPosition", null) 
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function removeErrorAfterTime(){
        setTimeout(() => {
            setError("");
        }, 2000)
    }

    
    function getGeoLocation(setterFunction){
        if(!navigator.geolocation){
            setError("Geolocation is not supported by this browswer!");
        }
        else {
            setIsLoading(true);
            navigator.geolocation.getCurrentPosition((position) => {
                setterFunction({lat: position.coords.latitude, lon: position.coords.longitude});
                setPosition({lat: position.coords.latitude, lon: position.coords.longitude});
                setIsLoading(false);
            },

            (error) => {
                setError(error);
                removeErrorAfterTime();
                setIsLoading(false);
            });
        }

    }
    


    return { getGeoLocation, position, isLoading, error }

}