import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star, Eye, Zap, Brain, ShoppingCart, BarChart3, X, Dumbbell, Activity, Target } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  stats: {
    accuracy?: string;
    improvement?: string;
    processed?: string;
  };
  detailedFeatures?: string[];
  challenges?: string[];
  outcomes?: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'AI-Fitness-Companion',
      description: 'AI-powered fitness companion with personalized workout recommendations',
      longDescription: 'An intelligent fitness companion that uses machine learning to provide personalized workout recommendations, track progress, and adapt training plans based on user performance. Features real-time form analysis, nutrition tracking, and motivational coaching powered by AI.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React', 'SQLite', 'Computer Vision'],
      githubUrl: 'https://github.com/surya077-mj/AI-Fitness-Companion',
      featured: true,
      stats: { accuracy: '95% Form Analysis', improvement: '40% Better Results' },
      detailedFeatures: [
        'Real-time exercise form analysis using computer vision',
        'Personalized workout plan generation based on fitness goals',
        'Progress tracking with detailed analytics and insights',
        'AI-powered nutrition recommendations and meal planning',
        'Voice-guided workout sessions with motivational coaching',
        'Integration with wearable devices for comprehensive health monitoring'
      ],
      challenges: [
        'Implementing accurate pose detection for various exercise forms',
        'Creating adaptive algorithms that learn from user behavior',
        'Optimizing real-time video processing for smooth performance',
        'Designing an intuitive UI that works across different devices'
      ],
      outcomes: [
        'Achieved 95% accuracy in exercise form detection',
        'Improved user workout consistency by 40%',
        'Reduced injury risk through proper form guidance',
        'Enhanced user engagement with personalized AI coaching'
      ]
    },
    {
      id: 2,
      title: 'GestureNinja',
      description: 'Gesture-controlled game using OpenCV & Pygame',
      longDescription: 'An innovative gesture-controlled gaming experience that uses computer vision to detect hand movements. Improved user interaction by 30% and reduced latency by 15% through optimized OpenCV algorithms and real-time processing.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'OpenCV', 'Pygame', 'Computer Vision'],
      githubUrl: 'https://github.com/surya077-mj/gestureninja',
      featured: true,
      stats: { improvement: '30% Better UX', accuracy: '15% Less Latency' },
      detailedFeatures: [
        'Hand gesture recognition using OpenCV',
        'Real-time game control without physical input devices',
        'Multiple gesture commands for different game actions',
        'Smooth gameplay with optimized frame processing'
      ],
      challenges: [
        'Minimizing input latency for responsive gameplay',
        'Handling varying lighting conditions for consistent detection',
        'Optimizing computer vision algorithms for real-time performance'
      ],
      outcomes: [
        'Created an engaging hands-free gaming experience',
        'Demonstrated practical application of computer vision',
        'Achieved smooth 60fps gameplay with gesture controls'
      ]
    },
    {
      id: 3,
      title: 'AI Movie Recommendation System',
      description: 'AI-based hybrid movie recommender with real-time IMDb integration',
      longDescription: 'A sophisticated recommendation system that combines collaborative filtering and content-based filtering techniques. Features real-time IMDb integration, personalized recommendations, and advanced machine learning algorithms for accurate movie suggestions.',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'Streamlit', 'IMDb API'],
      githubUrl: 'https://github.com/surya077-mj/movie-recommender',
      featured: true,
      stats: { accuracy: 'Hybrid Filtering', improvement: 'Real-time IMDb' },
      detailedFeatures: [
        'Hybrid recommendation using collaborative and content-based filtering',
        'Real-time movie data integration with IMDb API',
        'Personalized user profiles and preference learning',
        'Interactive web interface built with Streamlit'
      ],
      challenges: [
        'Balancing collaborative and content-based filtering approaches',
        'Handling sparse user-item interaction matrices',
        'Integrating real-time data from external APIs'
      ],
      outcomes: [
        'Delivered highly accurate movie recommendations',
        'Created an intuitive user experience for movie discovery',
        'Successfully deployed a scalable recommendation engine'
      ]
    },
    {
      id: 4,
      title: 'Real-Time Vehicle Detection',
      description: 'IoT-integrated traffic vision system with 90% accuracy',
      longDescription: 'An advanced traffic monitoring system that combines IoT sensors with computer vision for real-time vehicle detection and counting. Achieved 90% accuracy in vehicle classification and reduced detection time by 20% through optimized algorithms.',
      image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'OpenCV', 'IoT', 'Computer Vision', 'MQTT'],
      githubUrl: 'https://github.com/surya077-mj/Real-Time-Vehicle-Detection',
      featured: true,
      stats: { accuracy: '90% Accuracy', improvement: '20% Faster Detection' },
      detailedFeatures: [
        'Real-time vehicle detection and classification',
        'IoT sensor integration for comprehensive traffic monitoring',
        'MQTT protocol for efficient data transmission',
        'Advanced computer vision algorithms for accurate detection'
      ],
      challenges: [
        'Achieving high accuracy in varying weather conditions',
        'Optimizing detection algorithms for real-time processing',
        'Integrating multiple IoT sensors seamlessly'
      ],
      outcomes: [
        'Achieved 90% accuracy in vehicle detection',
        'Reduced processing time by 20%',
        'Created a scalable traffic monitoring solution'
      ]
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          
          {/* Featured Projects */}
          <motion.div 
            className="space-y-20 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                variants={itemVariants}
              >
                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} cursor-pointer`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative group overflow-hidden rounded-xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-4">
                        <motion.button
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-purple-500 hover:to-blue-500 transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye size={16} />
                          View Details
                        </motion.button>
                        {project.githubUrl && (
                          <motion.a 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-lg font-semibold hover:from-slate-600 hover:to-slate-500 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={16} />
                            Code
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <motion.h3 
                      className="text-3xl font-bold text-white mb-4 hover:text-blue-400 transition-colors cursor-pointer"
                      whileHover={{ x: 10 }}
                      onClick={() => setSelectedProject(project)}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      {project.longDescription}
                    </p>
                    
                    <div className="flex items-center gap-6 mb-6 text-sm">
                      {project.stats.accuracy && (
                        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-400/30">
                          <Zap size={16} />
                          <span>{project.stats.accuracy}</span>
                        </div>
                      )}
                      {project.stats.improvement && (
                        <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-400/30">
                          <BarChart3 size={16} />
                          <span>{project.stats.improvement}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, i) => (
                      <motion.span 
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 rounded-full text-sm border border-purple-400/30"
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
                  
                  <div className="flex gap-4 pt-4">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye size={18} />
                      View Details
                    </motion.button>
                    {project.githubUrl && (
                      <motion.a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-600 text-white font-semibold rounded-lg hover:from-slate-600 hover:to-slate-500 transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                        View Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Other Projects Grid */}
          {otherProjects.length > 0 && (
            <div>
              <motion.h3 
                className="text-3xl font-bold text-center mb-12 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                More Projects
              </motion.h3>
              
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {otherProjects.map((project) => (
                  <motion.div 
                    key={project.id}
                    className="group bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                    }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span 
                            key={i}
                            className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs border border-blue-400/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-slate-400 text-xs">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-slate-400">
                          {project.stats.accuracy && (
                            <div className="flex items-center gap-1">
                              <Zap size={12} className="text-emerald-400" />
                              <span>{project.stats.accuracy}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          {project.githubUrl && (
                            <motion.a 
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-white transition-colors"
                              whileHover={{ scale: 1.1 }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github size={16} />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-600/50"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-t-2xl"></div>
                <motion.button
                  className="absolute top-4 right-4 p-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-white hover:bg-slate-700/80 transition-colors"
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
                
                <div className="absolute bottom-4 left-6 right-6">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <div className="flex items-center gap-4">
                    {selectedProject.stats.accuracy && (
                      <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-400/30">
                        <Zap size={16} />
                        <span>{selectedProject.stats.accuracy}</span>
                      </div>
                    )}
                    {selectedProject.stats.improvement && (
                      <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-400/30">
                        <BarChart3 size={16} />
                        <span>{selectedProject.stats.improvement}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  {selectedProject.longDescription}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, i) => (
                      <motion.span 
                        key={i}
                        className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 rounded-full border border-purple-400/30 font-medium"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                {selectedProject.detailedFeatures && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-400" />
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.detailedFeatures.map((feature, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-start gap-3 text-slate-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges */}
                {selectedProject.challenges && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-purple-400" />
                      Technical Challenges
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.challenges.map((challenge, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-start gap-3 text-slate-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{challenge}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Outcomes */}
                {selectedProject.outcomes && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-emerald-400" />
                      Project Outcomes
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.outcomes.map((outcome, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-start gap-3 text-slate-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{outcome}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-slate-700">
                  {selectedProject.githubUrl && (
                    <motion.a 
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      View on GitHub
                    </motion.a>
                  )}
                  {selectedProject.liveUrl && (
                    <motion.a 
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-emerald-500 transition-all duration-300 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;