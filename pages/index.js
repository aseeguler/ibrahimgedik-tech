import Projects from 'components/Projects'
import Hero from '../components/Hero'

function Home() {
  return (
  <>
    <Hero />
    <div className="container">
      <div className="divider"></div>
    </div>
    <Projects />
  </>
  )
}

export default Home