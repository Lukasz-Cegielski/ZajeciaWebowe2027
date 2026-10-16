import { useState,useEffect } from "react";

function losowaId(){
    return Math.floor(Math.random() * 300)
}
export default function ZdjecieDnia(){
    const [id,setId] = useState(losowaId)
    const [zdjecie,setZdjecie] = useState(null)
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState(null)
    useEffect(() =>{
        async function pobierz() {
            setIsLoading(true)
            try{
                const resp = await fetch(`https://picsum.photos/id/${id}/info`)
                if(!resp.ok) throw new Error(`Błąd serwera ${resp.status}`)
                const dane = await resp.json()
                setZdjecie(dane)
            }
            catch(err){
                setError(err.message)
            }
            finally{
                setIsLoading(false)
            }
        }
        pobierz()
    },[id])
    return <p>Zdjęcie dnia - tu dopiero będzie widok</p>
}