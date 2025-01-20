import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { TrophyIcon, StarIcon, LightBulbIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { useInView } from 'react-intersection-observer';
import { FaLightbulb } from 'react-icons/fa';

const achievements = [
  {
    icon: TrophyIcon,
    number: 30,
    title: 'Awards Won',
    description: 'Recognized for outstanding entrepreneurial initiatives'
  },
  {
    icon: StarIcon,
    number: 50,
    title: 'Sponserships',
    description: 'Launched and supported by our E-Cell members'
  },
  {
    icon: UserGroupIcon,
    number: 100,
    title: 'Students Reach',
    description: 'Groundbreaking ideas developed and nurtured'
  },
  {
    icon: FaLightbulb,
    number: 50,
    title: 'Events Organised',
    description: 'Empowered through entrepreneurship programs'
  }
]

const AchievementsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="achievements" className="section-padding bg-dark-100">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-heading font-bold mb-4">
            Our <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-light-50 max-w-2xl mx-auto">
            A testament to our commitment to fostering entrepreneurship and innovation
          </p>
        </motion.div>
        
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 
              }}
              className="bg-dark-50 p-6 rounded-lg text-center hover:shadow-lg transition-all"
            >
              <div className="mb-4 flex justify-center">
                <achievement.icon 
                  className="w-16 h-16 text-primary" 
                />
              </div>
              <h3 className="text-3xl font-bold text-light mb-2">
                {inView ? (
                  <CountUp 
                    start={0} 
                    end={achievement.number} 
                    duration={2.5} 
                    separator="," 
                    suffix="+" 
                  />
                ) : (
                  '0+'
                )}
              </h3>
              <h4 className="text-xl font-semibold text-primary mb-2">
                {achievement.title}
              </h4>
              <p className="text-light-50">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
