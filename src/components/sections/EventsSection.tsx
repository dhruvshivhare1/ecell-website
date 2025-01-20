import React, { useRef, useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

// Event images with absolute imports
import EventImage1 from '@assets/Entricon.png'
import EventImage2 from '@assets/ori.jpeg'
import EventImage3 from '@assets/orientation.jpg'
import EventImage4 from '@assets/womensday.png'
import NSICImage from '@assets/NSIC.png'
import VisionExImage from '@assets/VisionEx.png'

// Define event type for better type safety
interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  fullDescription?: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Entricon',
    description: 'The annual flagship event of the Entrepreneurship Cell aims to inspire and empower students by connecting them with industry experts and emerging startups, fostering entrepreneurial spirit and learning.',
    image: EventImage1,
    fullDescription: 'Entricon is our premier annual event designed to bridge the gap between aspiring entrepreneurs and the dynamic world of startups. This comprehensive event brings together industry leaders, successful entrepreneurs, and passionate students to create a vibrant ecosystem of innovation and learning.'
  },
  {
    id: 2,
    title: 'Orientation Program',
    description: 'The E-Cell hosted an inspiring orientation, igniting entrepreneurial passion among students. The event showcased the E-Cell\'s vision, upcoming opportunities, and success stories, motivating students to embark on their journey of innovation and leadership.',
    image: EventImage2,
    fullDescription: 'Our annual Orientation Program is a transformative event that introduces students to the exciting world of entrepreneurship. Through engaging presentations, interactive sessions, and inspiring talks, we aim to kindle the entrepreneurial spirit and provide a roadmap for innovation and leadership.'
  },
  {
    id: 3,
    title: 'Induction Ceremony',
    description: 'On 14th November, the E-Cell welcomed new members with engaging introductions, interactive activities, and team-building sessions. The event was filled with energy, fun, and the promise of an exciting journey ahead. ',
    image: EventImage3,
    fullDescription: ' On 14th November, the E-Cell welcomed new members with engaging introductions, interactive activities, and team-building sessions. The event was filled with energy, fun, and the promise of an exciting journey ahead.'
  },
  {
    id: 4,
    title: 'World Entrepreneurship Day',
    description: 'Organized an impactful event featuring esteemed entrepreneurs Jitender Girdhar, Vaneeta Aggarwal, and Shubham Maheshwari, celebrating entrepreneurial achievements and sharing valuable insights. ',
    image: EventImage4,
    fullDescription: 'Our Women\'s Day Celebration is a powerful event dedicated to highlighting and empowering women entrepreneurs. Through inspiring talks, panel discussions, and networking opportunities, we aim to break barriers and showcase the incredible potential of women in entrepreneurship.'
  },
  {
    id: 5,
    title: 'NSIC Okhla Visit',
    description: 'On November 30, 2023, E Cell visited the National Small Industries Corporation, gaining practical exposure to entrepreneurship operations and small-business insights. ',
    image: NSICImage,
    fullDescription: 'On November 30, 2023, the E-Cell embarked on an insightful visit to the National Small Industries Corporation (NSIC) in Okhla. This educational trip provided students with a firsthand look into the ecosystem of small-scale industries, offering valuable insights into entrepreneurship, business operations, and the challenges and opportunities in the small business sector.'
  },
  {
    id: 6,
    title: 'VisisonEX Podcast',
    description: 'Hosted insightful podcasts with industry leaders like Sunny Vaghela (cybersecurity expert) and Surnit Shah (CEO of Dukaan), focusing on innovation, entrepreneurship, and leadershipWe have also conducted several more episodes featuring visionary speakers across diverse fields.',
    image: VisionExImage,
    fullDescription: 'The VisionEX Podcast series is an innovative platform where E-Cell brings together thought leaders, industry experts, and successful entrepreneurs to share their insights, experiences, and wisdom. Featuring distinguished guests like Sunny Vaghela, a cybersecurity expert, and Surnit Shah, CEO of Dukaan, these podcasts dive deep into topics of innovation, entrepreneurship, leadership, and personal growth.'
  }
]

export default function EventsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isScrollStart, setIsScrollStart] = useState(true)
  const [isScrollEnd, setIsScrollEnd] = useState(false)
  const [activeEventIndex, setActiveEventIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    // Check on mount
    checkMobile()
    
    // Add resize listener
    window.addEventListener('resize', checkMobile)
    
    // Cleanup listener
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Mobile scroll animation
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    
    if (isMobile) {
      intervalId = setInterval(() => {
        setActiveEventIndex((prevIndex) => 
          (prevIndex + 1) % events.length
        )
      }, 3000) // Change event every 3 seconds
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [isMobile])

  // Memoized scroll function to prevent unnecessary re-renders
  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = current.clientWidth
      const targetScrollLeft = direction === 'left' 
        ? current.scrollLeft - scrollAmount 
        : current.scrollLeft + scrollAmount

      current.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      })

      // Update scroll position state
      setIsScrollStart(targetScrollLeft <= 0)
      setIsScrollEnd(
        targetScrollLeft + current.clientWidth >= current.scrollWidth
      )
    }
  }, [])

  // Memoized scroll handler to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const { current } = scrollRef
      setIsScrollStart(current.scrollLeft <= 0)
      setIsScrollEnd(
        current.scrollLeft + current.clientWidth >= current.scrollWidth
      )
    }
  }, [])

  // Mobile view animation variants
  const mobileEventVariants = {
    initial: { 
      opacity: 0, 
      x: 100,
      scale: 0.8 
    },
    animate: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      x: -100,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  }

  // Event Modal Animation Variants
  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <>
      <section id="events" className="section-padding bg-dark-100 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
              Our <span className="text-primary">Events</span>
            </h2>

            {/* Navigation Buttons */}
            <div className="absolute left-4 md:left-12 top-1/2 transform -translate-y-1/2 z-10">
              <button 
                onClick={() => scroll('left')}
                disabled={isScrollStart}
                className={`
                  p-2 rounded-full bg-white/10 hover:bg-white/20 
                  ${isScrollStart ? 'opacity-30 cursor-not-allowed' : ''}
                `}
              >
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="absolute right-4 md:right-12 top-1/2 transform -translate-y-1/2 z-10">
              <button 
                onClick={() => scroll('right')}
                disabled={isScrollEnd}
                className={`
                  p-2 rounded-full bg-white/10 hover:bg-white/20 
                  ${isScrollEnd ? 'opacity-30 cursor-not-allowed' : ''}
                `}
              >
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Desktop View */}
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="hidden md:flex overflow-x-scroll scrollbar-hide space-x-6 pb-6"
              style={{ 
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {events.map((event) => (
                <div 
                  key={event.id}
                  className="flex-shrink-0 w-72 md:w-96 scroll-snap-align-start cursor-pointer"
                  style={{ scrollSnapAlign: 'center' }}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="bg-dark-50 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 h-full flex flex-col">
                    <div className="h-48 md:h-64 w-full overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-2 flex-shrink-0">
                        {event.title}
                      </h3>
                      <p className="text-light-50 mb-4 flex-grow line-clamp-3">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden relative w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={events[activeEventIndex].id}
                  variants={mobileEventVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full px-4"
                  onClick={() => setSelectedEvent(events[activeEventIndex])}
                >
                  <div className="bg-dark-50 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                    <div className="h-48 w-full overflow-hidden">
                      <img 
                        src={events[activeEventIndex].image} 
                        alt={events[activeEventIndex].title} 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-2 flex-shrink-0">
                        {events[activeEventIndex].title}
                      </h3>
                      <p className="text-light-50 mb-4 flex-grow line-clamp-3">
                        {events[activeEventIndex].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="bg-dark-50 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2"
              >
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>

              {/* Event Image */}
              <div className="h-64 md:h-96 w-full overflow-hidden">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Event Details */}
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {selectedEvent.title}
                </h2>

                <p className="text-light-50 mb-6">
                  {selectedEvent.fullDescription}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
