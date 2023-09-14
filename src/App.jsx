import React from 'react'
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Homepage from './components/Homepage'
import MovieDetails from './components/MovieDetails'
import ErrorPage from './components/ErrorPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </Router>
  )
}
