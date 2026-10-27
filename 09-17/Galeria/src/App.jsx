
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import GaleriaPage from './pages/GaleriaPage'
import NotFoundPage from './pages/NotFoundPage'
import DodajPage from './pages/DodajPage'
import ZdjeciePage from './pages/ZdjeciePage'

function App() {
  return (
    <Routes>
      <Route element = {<Layout/>}>
        <Route path='/' element={<GaleriaPage/>}/>
        <Route path='/zdjecie/:id' element={<ZdjeciePage/>}/>
        <Route path='/dodaj' element={<DodajPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
