import ThreeBackground from './components/ThreeBackground'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import Education       from './components/Education'
import Projects        from './components/Projects'
import Footer          from './components/Footer'

export default function App() {
  return (
    <>
      <ThreeBackground />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
        <Hero />
        <Education />
        <Projects />
        <Footer />
      </div>
    </>
  )
}
