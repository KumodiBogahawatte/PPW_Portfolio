import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Journal from './components/Journal'
import CareerPlan from './components/CareerPlan'
import CV from './components/CV'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

function App() {
  const [dark, setDark] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = stored ? stored === 'dark' : prefersDark
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 760,
      easing: 'ease-out-cubic',
      once: true,
      offset: 40,
    })

    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {loading && (
        <div className="fixed inset-0 z-[100] bg-white dark:bg-slate-950 flex items-center justify-center">
          <div className="loader-ring" aria-label="Loading portfolio" />
        </div>
      )}
      <Navbar dark={dark} toggleDark={toggleDark} />
      <main>
        <Introduction startTyping={!loading} />
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
