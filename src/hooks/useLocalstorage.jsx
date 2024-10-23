import { useEffect, useState } from "react";

export default function useLocalstorage(key, initialValue) {

    const [value, setValue] = useState(() => {
        const storagedValue = localStorage.getItem(key);
        return JSON.parse(storagedValue) ?? initialValue;
    })


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])

    return { value, setValue }
}
