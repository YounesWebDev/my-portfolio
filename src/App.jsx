import { useEffect, useState } from 'react'
import { StarsBackground } from './components/animate-ui/components/backgrounds/stars'
import Intro from './Intro'
import Hero from './Hero'
import NavBar from './NavBar'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [isIntroClosing, setIsIntroClosing] = useState(false)

  useEffect(() => {
    if (!isIntroClosing) {
      return
    }

    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [isIntroClosing])

  const handleIntroClick = () => {
    if (isIntroClosing) {
      return
    }

    setIsIntroClosing(true)
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#020409] text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <StarsBackground factor={0} speed={65} starColor="#f8fbff" pointerEvents={false} />
      </div>

      {showIntro ? (
        <div className="relative z-20 transition-all duration-400 ease-in-out">
          <Intro onIntroClick={handleIntroClick} isClosing={isIntroClosing} />
        </div>
      ) : (
        <>
          <NavBar />

          <main className="relative z-20 scroll-smooth">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          <div className="h-10 md:h-0" />
        </>
      )}
    </div>
  )
}

export default App
