import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Palette, Coffee, Zap, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Exploring cutting-edge technologies in IoT, ML, and AI to create impactful solutions.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Problem Solving',
      description: 'Transforming complex challenges into elegant, user-friendly technical solutions.'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Working together with teams to achieve extraordinary results and shared success.'
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="">
              About Me
            </span>
          </motion.h2>
          
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-6" variants={itemVariants}>
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate Computer Science student specializing in IoT,
                <span className="text-blue-400 font-semibold"></span>. 
                I build creative and functional web apps using React and JavaScript, develop smart ML solutions 
                in Python, and explore the synergy of IoT and AI.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                I love transforming problems into elegant tech solutions. My journey spans from frontend 
                development to machine learning, always seeking to bridge the gap between innovative 
                technology and real-world applications. 🚀
              </p>
              
              <motion.div 
                className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  "Code. Create. Collaborate. Repeat."
                </p>
              </motion.div>
              
              <div className="flex flex-wrap gap-4 mt-8">
               
                
              </div>
            </motion.div>
            
            <motion.div className="relative" variants={itemVariants}>
              <motion.div 
                className="w-full h-96 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center z-10">
                  <motion.div 
                    className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 flex items-center justify-center text-2xl font-bold text-white"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    🚀
                  </motion.div>
                  <p className="text-slate-300 font-medium">Always Learning & Building</p>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-blue-400/30 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-6 h-6 bg-purple-400/30 rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                }}
              >
                <motion.div 
                  className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;