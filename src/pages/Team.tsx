import React from 'react'
import { motion } from 'framer-motion'

// Import team member images
import team1 from '@/assets/team1.jpg'
import team2 from '@/assets/team2.jpg'
import team3 from '@/assets/team3.jpg'
import team4 from '@/assets/team4.jpg'

const teamMembers = [
  {
    name: 'Kartik Gulati',
    role: 'President',
    image: team1,
    linkedin: '#',
    email: 'kartik@ecell.com',
  },
  {
    name: 'Manya Mehrotra',
    role: 'Vice president',
    image: team2,
    linkedin: '#',
    email: 'manya@ecell.com',
  },
  {
    name: 'Harsh Raj',
    role: 'General Secretary',
    image: team3,
    linkedin: '#',
    email: 'harsh@ecell.com',
  },
  {
    name: 'Ishu Singh',
    role: 'Social Media Head',
    image: team4,
    linkedin: '#',
    email: 'ishu@ecell.com',
  },
  // Add more team members as needed
]

const departments = [
  'Core Team',
  'Technical',
  'Marketing',
  'Events',
  'Content',
  'Design',
]

export default function Team() {
  return (
    <main className="pt-20 pb-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The passionate individuals behind E-Cell working together to foster
            entrepreneurship and innovation.
          </p>
          <a 
            href="/ecell-website" 
            className="mt-4 inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
          >
            Back to Home
          </a>
        </motion.div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((dept) => (
            <button
              key={dept}
              className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-w-3 aspect-h-4 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary transition-colors"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-white hover:text-primary transition-colors"
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
