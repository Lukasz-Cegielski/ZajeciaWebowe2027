
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import { useState } from 'react'
import Naglowek from './components/Naglowek'
import Navbar from './components/navbar'
import CategoryBar from './components/categoryBar'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import AddPhotoModal from './components/AddPhotoModal'
import FiltersOffcanvas from './components/FiltersOffCanvas'
import photos from './data/photos.json'
function App() {
  const [zdjecia,setZdjecia] = useState(photos)
  const [aktywnaKategoria,setAktywnaKategoria] = useState('wszystkie')
  const widoczne = aktywnaKategoria === 'wszystkie' ? zdjecia : zdjecia.filter(z => z.category === aktywnaKategoria)
   return (
    <>
    <Navbar></Navbar>
    <Naglowek/>
    <main className='container'>
      <CategoryBar aktywna = {aktywnaKategoria} onWybierz={setAktywnaKategoria}/>
      {widoczne.length === 0 &&(
        <div className="alert alert-warning">
          Nie znaleziono zdjęc w tej kategorii.
        </div>
      )}
      <Gallery zdjecia = {widoczne}/>
    </main>
    <Footer/>
    <AddPhotoModal/>
    <FiltersOffcanvas aktywna={aktywnaKategoria} onWybierz={setAktywnaKategoria}/>
    </>
  )
}

export default App
