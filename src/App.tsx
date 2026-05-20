import { Navigation } from './components/layout/Navigation'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { TimelineSection } from './components/sections/TimelineSection'
import { PersonalProjectsSection } from './components/sections/PersonalProjectsSection'
import { ResumeSection } from './components/sections/ResumeSection'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <PersonalProjectsSection />
        <ResumeSection />
      </main>
      <Footer />
    </div>
  )
}
