import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download, Code, Brain, Cpu } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const titles = [
    { text: "Frontend Developer", icon: <Code className="w-5 h-5" /> },
    { text: "ML & AI Enthusiast", icon: <Brain className="w-5 h-5" /> },
    { text: "Open Source Contributor", icon: <Github className="w-5 h-5" /> }
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

  const titleVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-[28rem] h-[28rem] bg-gradient-to-r from-blue-400/20 to-purple-600/50 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-blue-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <motion.div 
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          {/* Profile Picture */}
          <motion.div 
            className="mb-8 mt-20"
            variants={floatingVariants}
            animate="animate"
          >
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 p-1 shadow-2xl shadow-purple-500/25">
  <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden">
    <img
      src="https://drive.google.com/thumbnail?id=1gYBrXAzyWZ8bPSzzOETdc9DgFv32dLHN"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
</div>

          </motion.div>
          
          {/* Main Title with Modern SaaS Gradient */}
          <motion.h1 
            className="text-6xl md:text-5xl font-black mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
            </span>
            <br />
   <span className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-sm">
  Surya vikas
</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed font-medium"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-semibold">
              Frontend Developer
            </span>
            {" | "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              Machine Learning & IoT Enthusiast
            </span>
          </motion.p>
          
          {/* Animated Titles */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            {titles.map((title, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-full text-slate-200 font-medium hover:border-blue-400/50 transition-all duration-300"
                variants={titleVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-blue-400">{title.icon}</span>
                {title.text}
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            variants={itemVariants}
          >
            <motion.button 
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#projects">
  <span className="relative z-10 flex items-center gap-2 cursor-pointer">
    <Code className="w-5 h-5" />
    View My Work
  </span>
</a>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button 
              className="group px-8 py-4 border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
  href="https://drive.google.com/uc?export=download&id=1N_AHY7a955VnI6hRIqWt0etk3d0dhHsM"
  download
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="bg-slate-900 rounded-full px-6 py-2 flex items-center gap-2">
    <Download className="w-5 h-5 text-blue-400" />
    <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      Download Resume
    </span>
  </div>
</a>
            </motion.button>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-8 mb-16"
            variants={itemVariants}
          >
            <motion.a 
              href="https://github.com/surya077-mj" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={28} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/surya-vikas-kannuri-a60b58260" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a 
              href="mailto:kannurivikas22@gmail.com"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={28} />
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-blue-400 transition-colors duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;