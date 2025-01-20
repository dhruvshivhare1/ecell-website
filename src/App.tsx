import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Team from './pages/Team'
import SponsorsSection from './components/sections/SponsorsSection'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <SponsorsSection />
      </div>
      <Footer />
    </div>
  )
}

export default App
