import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Search from './pages/Search'
import BookDetails from './pages/BookDetails'
import Library from './pages/Library'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App