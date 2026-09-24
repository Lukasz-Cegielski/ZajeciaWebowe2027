
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
   return (
    <>
    <Navbar></Navbar>
    <Naglowek/>
    <main className='container'>
      <CategoryBar/>
      <Gallery zdjecia = {zdjecia}/>
    </main>
    <Footer/>
    <AddPhotoModal/>
    <FiltersOffcanvas/>
    </>
  )
}

export default App
