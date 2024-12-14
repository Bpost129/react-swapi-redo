import { Route, Routes } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipPage from './pages/StarshipPage/StarshipPage'
import './App.css'

function App() {
  return (
    <>
      {/* NavBar */}
      <h1 style={{color: 'yellow'}}>Star Wars</h1>
      <Routes>
        <Route path='/starships' element={<StarshipList />} />
        <Route path='/starships/:starshipId' element={<StarshipPage />} />
      </Routes>
    </>
  )
}

export default App
