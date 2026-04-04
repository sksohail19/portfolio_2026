import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Intro from '../components/intro'
import Projects from '../components/projects'
import Education from '../components/education'
import Contact from '../components/contact'

export default function Main() {
    return (
        <>
            <Hero />
            <Intro />
            <Skills />
            <Projects />
            <Education />
            <Contact />
        </>
    )
}