import { motion } from 'framer-motion'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import EventsSection from '../components/sections/EventsSection'
import PodcastsSection from '../components/sections/PodcastsSection'
import AchievementsSection from '../components/sections/AchievementsSection'
import SpeakersSection from '../components/sections/SpeakersSection'
import NewsletterSection from '../components/sections/NewsletterSection'

export default function Home() {
  return (
    <main className="pt-16">
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="events">
        <EventsSection />
      </div>
      <div id="podcasts">
        <PodcastsSection />
      </div>
      <div id="achievements">
        <AchievementsSection />
      </div>
      <div id="speakers">
        <SpeakersSection />
      </div>
      <div id="newsletter">
        <NewsletterSection />
      </div>
    </main>
  )
}
