import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import EcellLogo from '@/assets/E-cell.png'

const navigation = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Events', href: '/#events' },
  { name: 'Achievements', href: '/#achievements' },
  { name: 'Newsletter', href: '/#newsletter' },
  { name: 'Guest Speakers', href: '/#speakers' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/${sectionId}`
      return
    }

    // Remove the '#' from the sectionId
    const targetSection = document.querySelector(sectionId)
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    // Handle hash changes for direct section navigation
    if (location.hash) {
      const sectionId = location.hash
      const targetSection = document.querySelector(sectionId)
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <header className="fixed w-full z-50 bg-transparent">
      <nav className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="flex items-center text-2xl font-heading font-bold text-white hover:text-primary transition-colors"
          >
            <img 
              src={EcellLogo} 
              alt="E-Cell Logo" 
              className="h-16 w-auto mr-3" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href.replace('/', ''))}
              className="text-white hover:text-primary transition-colors"
            >
              {item.name}
            </button>
          ))}
          <Link
            to="/team"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Team
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-white hover:text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-4 bg-transparent">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.replace('/', ''))}
                  className="block w-full text-left text-white hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <Link
                to="/team"
                target="_blank"
                rel="noopener noreferrer"
                className="block btn btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
