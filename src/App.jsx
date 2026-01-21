import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  )
}

export default App
