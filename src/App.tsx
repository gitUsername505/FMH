import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Forms from './pages/Forms'
import Services from './pages/Services'
import Footer from './components/Footer'


export default function App() {
  return (
    <>
      {/* <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}

      <header style={{height: '7vh'}}>
        <Navbar />
      </header>

      <main style={{minHeight: '86vh'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </main>

      
    </>
  )
}

