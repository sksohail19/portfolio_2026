import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/* Components */
import Navbar from './components/navbar'
import Main from './pages/main'
function App() {

  return (
    <>
      <Router>
        <Navbar title="Shaik Sohail"
          links={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: "Projects", href: '/projects' }, { label: "Resume", href: '/resume' }, { label: "Experience", href: '/experience' }, { label: 'Contact', href: '/contact' }]}
          cta={{ label: 'Hire Me', href: '/contact' }}
        />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
