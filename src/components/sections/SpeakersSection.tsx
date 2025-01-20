import React, { useRef, useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import speaker1 from '@/assets/speaker1.png'
import speaker2 from '@/assets/speaker2.png'
import speaker3 from '@/assets/speaker3.png'
import speaker4 from '@/assets/speaker4.png'
import speaker5 from '@/assets/speaker5.png'
import speaker6 from '@/assets/speaker6.png'
import speaker7 from '@/assets/speaker7.png'
import speaker8 from '@/assets/speaker8.png'

interface Speaker {
  id: number;
  name: string;
  role: string;
  image: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Dr Abhishek Tandon',
    role: 'Joint CEO, Udhmodya Foundation',
    image: speaker1,
  },
  {
    id: 2,
    name: 'Shri Bharat Bhushan Arora',
    role: 'Director, Udhmodya Foundation',
    image: speaker2,
  },
  {
    id: 3,
    name: 'Mr. Sunny Vaghela',
    role: 'Co-Founder & CPO, Zyper 365',
    image: speaker3,
  },
  {
    id: 4,
    name: 'Arijit Bhattacharyya',
    role: 'Founder & CEO, Virtualinfocam',
    image: speaker4,
  },
  {
    id: 5,
    name: 'Mr. Sumit Shah',
    role: 'Founder And CEO Dukaan',
    image: speaker5,
  },
  {
    id: 6,
    name: 'Mr. Shubham Maheshawari ',
    role: 'Founder, Being Chief',
    image: speaker6,
  },
  {
    id: 7,
    name: 'Mr Jitendra Girdhar',
    role: 'Founder & Director, QTC and VDC',
    image: speaker7,
  },
  {
    id: 8,
    name: 'Mrs. Vaneeta Aggarwal',
    role: 'Founder, Bizemag Advisor',
    image: speaker8,
  }
]

export default function SpeakersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isScrollStart, setIsScrollStart] = useState(true)
  const [isScrollEnd, setIsScrollEnd] = useState(false)
  const [activeEventIndex, setActiveEventIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)

  const checkScrollPosition = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setIsScrollStart(scrollLeft === 0)
      setIsScrollEnd(scrollLeft + clientWidth >= scrollWidth - 10)
    }
  }, [])

  const scrollEvents = useCallback((direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="speakers" className="section-padding relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Guest <span className="text-primary">Speakers</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Learn from industry leaders and successful entrepreneurs who share their
            experiences and insights.
          </p>
        </motion.div>

        {/* Mobile/Tablet View with Scroll Controls */}
        <div className="relative">
          {!isScrollStart && (
            <button
              onClick={() => scrollEvents('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 dark:bg-dark-100/70 rounded-full p-2 shadow-lg"
            >
              <ChevronLeftIcon className="w-6 h-6 text-primary" />
            </button>
          )}

          {!isScrollEnd && (
            <button
              onClick={() => scrollEvents('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 dark:bg-dark-100/70 rounded-full p-2 shadow-lg"
            >
              <ChevronRightIcon className="w-6 h-6 text-primary" />
            </button>
          )}

          <motion.div
            ref={scrollRef}
            onScroll={checkScrollPosition}
            className="grid grid-flow-col auto-cols-[calc(100%/1)] sm:auto-cols-[calc(100%/2)] md:auto-cols-[calc(100%/4)] gap-10 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedSpeaker(speaker)}
                className="cursor-pointer group flex flex-col items-center"
              >
                <div className="w-64 h-64 border-4 border-primary/20 rounded-lg p-2 mb-4 hover:border-primary/40 transition-all duration-300">
                  <div className="relative overflow-hidden rounded-md w-full h-full">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-md"
                    />
                  </div>
                </div>
                <div className="text-center mt-2">
                  <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{speaker.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Speaker Details Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedSpeaker(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white dark:bg-dark-100 rounded-xl max-w-2xl w-full mx-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-4 right-4 z-10 bg-gray-100 dark:bg-dark-50 rounded-full p-2"
              >
                <XMarkIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={selectedSpeaker.image} 
                    alt={selectedSpeaker.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-2">{selectedSpeaker.name}</h2>
                  <p className="text-primary font-medium mb-4">{selectedSpeaker.role}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
