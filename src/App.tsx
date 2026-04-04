import './App.css'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

/* Components */
import Navbar from './components/navbar'
import Main from './pages/main'
import { scrollToSectionId } from './utils/scrollToSection'

const NAV_LINKS = [
  { label: 'Home', sectionId: 'home' },
  { label: 'About', sectionId: 'about' },
  { label: 'Skills', sectionId: 'skills' },
  { label: 'Experience', sectionId: 'experience' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Education', sectionId: 'education'},
  { label: 'Contact', sectionId: 'contact' },
] as const

function ScrollToHashOnRoute() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return
    const id = decodeURIComponent(location.hash.slice(1))
    if (!id) return
    const frame = window.requestAnimationFrame(() => scrollToSectionId(id))
    return () => window.cancelAnimationFrame(frame)
  }, [location.pathname, location.hash])

  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToHashOnRoute />
      <Navbar
        title="Shaik Sohail"
        links={[...NAV_LINKS]}
        cta={{ label: 'Hire Me', sectionId: 'contact' }}
      />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
