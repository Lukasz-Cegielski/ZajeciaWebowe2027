import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pozycja from './components/Pozycja'
function App() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState("")
  const [number,setNumber] = useState("")
  const dyscypliny = [
  "Piłka nożna",
  "Koszykówka",
  "Siatkówka",
  "Pływanie",
  "Lekkoatletyka",
];
  
  function handleSubmit(event){
    event.preventDefault()
    console.log(name)
    if(dyscypliny[number - 1]){
      console.log(dyscypliny[number - 1]);
    }
    else{
      console.log("Nieprawidłowy numer dyscypliny sportowej")
    }
  }
  return (
    <div className='container'>
     <h1>Liczba dysciplin sportowych {dyscypliny.length} </h1>
     <ol>
      {dyscypliny.map((pozycja,index) => (
        <Pozycja key={index} nazwa={pozycja}/>
      ))}
     </ol>
     <form onSubmit={handleSubmit}>
      <label htmlFor="name" className='form-label'>Imię i nazwisko</label>
      <input type="text" className='form-control' name="imie" id="imie" value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="number" className='form-label'>Numer dyscypliny sportowej:</label>
      <input type="number" className='form-control' name="number" id="number" value={number} onChange={(e) => setNumber(e.target.value)} /> <br />
      <input type="submit" className="btn btn-primary" value="Zatwierdź wybór" />
     </form>
    </div>
  )
}

export default App
