import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Journal from './components/Journal'
import CareerPlan from './components/CareerPlan'
import CV from './components/CV'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = stored ? stored === 'dark' : prefersDark
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar dark={dark} toggleDark={toggleDark} />
      <main>
        <Introduction />
        <Journal />
        <CareerPlan />
        <CV />
        <Certifications />
      </main>
      <Footer />
    </div>
  )
}

export default App
