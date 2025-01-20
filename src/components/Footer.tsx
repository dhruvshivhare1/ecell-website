import { Link } from 'react-router-dom'
import { 
  FaLinkedin, 
  FaInstagram, 
  FaTwitter, 
  FaFacebook, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaYoutube
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import EcellLogo from '@/assets/E-cell.png'

const socialLinks = [
  { 
    icon: FaLinkedin, 
    href: 'https://www.linkedin.com/company/ecell-sac', 
    color: '#0077B5' 
  },
  { 
    icon: FaInstagram, 
    href: 'https://www.instagram.com/ecell_sac/', 
    color: '#E1306C' 
  },
  { 
    icon: FaTwitter, 
    href: 'https://www.instagram.com/ecell_sac/', 
    color: '#1DA1F2' 
  },
  { 
    icon: FaYoutube, 
    href: 'https://www.youtube.com/@E-CellSACUniversityOfDelhi', 
    color: '#4267B2' 
  }
]

const quickLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Events', href: '/#events' },
  { name: 'Team', href: '/team' },
  { name: 'Achievements', href: '/#achievements' }
]

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const targetSection = document.querySelector(sectionId)
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark-100 text-light py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
        {/* Logo and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center mb-8">
            <Link 
              to="/" 
              className="flex items-center text-2xl font-heading font-bold text-white hover:text-primary transition-colors mb-4"
            >
              <img 
                src={EcellLogo} 
                alt="E-Cell Logo" 
                className="h-20 w-auto" 
              />
            </Link>
            <p className="text-gray-400 text-center max-w-xl">
              Empowering entrepreneurship through innovation, mentorship, and transformative experiences.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1 
                }}
                className="text-2xl hover:opacity-80 transition-all"
                style={{ color: social.color }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>
          <div className="grid grid-cols-2 gap-4">
            {quickLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  // If it's a section link, scroll, otherwise navigate
                  link.href.startsWith('/#') 
                    ? scrollToSection(link.href.replace('/', '')) 
                    : window.location.href = link.href
                }}
                className="text-light-50 hover:text-primary text-left transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-6">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-primary" />
              <a 
                href="mailto:contact@ecell.org" 
                className="text-light-50 hover:text-white"
              >
                contact@ecellsac.in
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-primary" />
              <a 
                href="tel:+919119035011" 
                className="text-light-50 hover:text-white"
              >
                +91 91190 35011
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="container mx-auto px-4 mt-12 pt-6 border-t border-dark-50 text-center"
      >
        <p className="text-light-50">
          {new Date().getFullYear()} E-Cell-SAC. All Rights Reserved.
          <br />
          Designed with by the E-Cell-SAC Team
        </p>
      </motion.div>
    </footer>
  )
}
