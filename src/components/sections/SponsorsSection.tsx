import React from 'react';
import { motion } from 'framer-motion';
import sponsor1 from '@/assets/d.jpg'
import sponsor2 from '@/assets/d0.jpg'
import sponsor3 from '@/assets/d2.jpg'
import sponsor4 from '@/assets/d3.jpg'
import sponsor5 from '@/assets/d4.jpg'
import sponsor6 from '@/assets/d5.jpg'
import sponsor7 from '@/assets/d6.jpg'
import sponsor8 from '@/assets/d7.jpg'
import sponsor9 from '@/assets/d8.jpg'
import sponsor10 from '@/assets/d9.jpg'

// TODO: Replace these with actual sponsor logos
const sponsorLogos = [
  { name: 'Sponsor5', src: sponsor5 },
  { name: 'Sponsor6', src: sponsor6 },
  { name: 'Sponsor7', src: sponsor7 },
  { name: 'Sponsor4', src: sponsor4 },
  { name: 'Sponsor8', src: sponsor8 },
  { name: 'Sponsor2', src: sponsor2 },
  { name: 'Sponsor3', src: sponsor3 },
  { name: 'Sponsor1', src: sponsor1 },
  { name: 'Sponsor9', src: sponsor9 },
  { name: 'Sponsor10', src: sponsor10 }
];

const SponsorsSection: React.FC = () => {
  return (
    <section className="bg-dark-100 py-12 overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white">
          Our Sponsors & Partners
        </h2>
      </div>
      <div className="w-full overflow-hidden">
        <motion.div 
          className="flex"
          animate={{ 
            x: ['0%', '-100%'],
            transition: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 10,
              ease: 'linear'
            }
          }}
        >
          <div className="flex space-x-12 items-center">
            {[...sponsorLogos, ...sponsorLogos].map((logo, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0"
              >
                <div className="w-24 h-24 border-4 border-primary/20 rounded-full flex items-center justify-center p-2 hover:border-primary/40 transition-all duration-300 overflow-hidden">
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
