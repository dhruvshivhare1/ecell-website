import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1000)
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="newsletter" className="section-padding py-8">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-purple-900 rounded-2xl p-6 md:p-8 text-center max-w-xl md:max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-heading font-bold text-white mb-4"
          >
            Stay Updated
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-purple-200 mb-6 text-sm md:text-base"
          >
            Subscribe to our newsletter for the latest updates on events, opportunities, and entrepreneurial insights.
          </motion.p>
          <form onSubmit={handleSubmit}>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 max-w-md md:max-w-2xl mx-auto"
            >
              <motion.input
                variants={itemVariants}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-full bg-purple-800 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={status === 'loading'}
                className="bg-white text-primary hover:bg-gray-100 disabled:opacity-50 rounded-full px-5 py-2 text-sm"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </motion.button>
            </motion.div>
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-300 text-sm mt-2"
              >
                Thank you for subscribing!
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-300 text-sm mt-2"
              >
                An error occurred. Please try again.
              </motion.p>
            )}
          </form>
          <p className="text-sm text-gray-300 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default NewsletterSection;
