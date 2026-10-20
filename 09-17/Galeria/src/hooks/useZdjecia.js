import { useState,useEffect, use } from "react";
import { pobierzZdjecia } from "../services/zdjecia";


export function useZdjecia(){
    cosnt [zdjecia,setZdjecia] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(() => {
        pobierzZdjecia().then(dane => setZdjecia(dane)).catch(err => setError(err.message)).finally(() => setIsLoading(false))
    },[])
    return {zdjecia,setZdjecia,isLoading,error}
}