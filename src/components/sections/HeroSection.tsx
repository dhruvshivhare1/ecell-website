import { motion } from 'framer-motion'
import TeamCoverImage from '@assets/team-cover.jpg'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={TeamCoverImage} 
          alt="E-Cell Team" 
          className="w-full h-full object-cover opacity-70" 
          onError={(e) => {
            const imgElement = e.target as HTMLImageElement
            imgElement.src = '/fallback-image.png'
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white">
            Welcome to <span className="text-primary">E-Cell</span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto font-medium tracking-wide leading-relaxed">
            Where Dreams Become Venture
          </p>
        </motion.div>
      </div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full -top-20 -right-20 blur-3xl animate-pulse" />
      </div>
    </section>
  )
}
