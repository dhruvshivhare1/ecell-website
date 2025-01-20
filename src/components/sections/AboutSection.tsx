import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-dark-100">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            About <span className="text-primary">E-Cell</span>
          </h2>
          <p className="text-light-50 text-xl mb-8 leading-relaxed"> 
            The Entrepreneurship Cell (E-Cell),Sri Aurobindo College is a student-run organization dedicated to promoting the spirit of entrepreneurship among students. We believe in fostering innovation, creativity, and an entrepreneurial mindset through various activities and initiatives.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">50+</h3>
              <p className="text-light-50">Events Organized</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">100+</h3>
              <p className="text-light-50">Student Reached</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">30+</h3>
              <p className="text-light-50">awards Won</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-light-50 text-lg leading-relaxed">
            Our mission is to equip students with entrepreneurial skills, foster innovation, and develop ethical leaders. Through resources, workshops, and mentorship, we support collaboration and creativity, empowering the next generation of entrepreneurs to drive innovation and growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
