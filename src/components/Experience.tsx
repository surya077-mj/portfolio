import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink, Award, TrendingUp } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
  achievements: string[];
  website?: string;
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: 'APSSDC',
      position: 'Data Science Intern',
      location: 'Andhra Pradesh, India',
      duration: 'May 2024 – June 2024',
      description: [
        'Developed a comprehensive sentiment analysis tool using Python and Flask',
        'Classified 10,000+ customer reviews with 90% accuracy using advanced NLP techniques',
        'Implemented TF-IDF, Word2Vec, and BERT for sophisticated feature engineering',
        'Built an interactive Streamlit dashboard for real-time data visualization',
        'Improved model accuracy by 20% through systematic hyperparameter tuning'
      ],
      technologies: ['Python', 'Flask', 'Streamlit', 'TF-IDF', 'Word2Vec', 'BERT', 'Pandas', 'Scikit-learn'],
      achievements: [
        '90% Classification Accuracy',
        '20% Performance Improvement',
        '10,000+ Reviews Processed'
      ],
      website: 'https://apssdc.in'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>
          
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-emerald-400 rounded-full"></div>
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id} 
                className={`relative mb-16 ${index % 2 === 0 ? 'md:text-right' : ''}`}
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-slate-900 z-10 shadow-lg shadow-blue-500/50"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                
                {/* Content */}
                <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'}`}>
                  <motion.div 
                    className="group bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300 shadow-xl"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div>
                        <motion.h3 
                          className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          {exp.position}
                        </motion.h3>
                        <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                          <span className="text-lg">{exp.company}</span>
                          {exp.website && (
                            <motion.a 
                              href={exp.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-purple-400 transition-colors"
                              whileHover={{ scale: 1.1 }}
                            >
                              <ExternalLink size={16} />
                            </motion.a>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:items-end text-sm text-slate-400">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar size={14} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-2 p-3 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg border border-emerald-400/20"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Award className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400 text-sm font-medium">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <ul className="space-y-3 text-slate-300 mb-6">
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <TrendingUp className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span 
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full text-sm border border-blue-400/30 font-medium"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;