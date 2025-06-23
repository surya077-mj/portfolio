import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Globe, Server, Smartphone, Brain, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'C++', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Flask', level: 85 },
        { name: 'Streamlit', level: 90 },
        { name: 'Scikit-learn', level: 85 }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Jupyter Notebook', level: 90 },
        { name: 'AWS Cloud', level: 75 }
      ]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'IoT & Emerging Tech',
      skills: [
        { name: 'MQTT', level: 80 },
        { name: 'Sensor Networks', level: 85 },
        { name: 'IoT Protocols', level: 80 },
        { name: 'OpenCV', level: 85 }
      ]
    }
  ];

  const softSkills = [
    'Teamwork', 'Problem Solving', 'Communication', 'Project Management'
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-emerald-400 to-emerald-500';
    if (level >= 80) return 'from-blue-400 to-blue-500';
    if (level >= 70) return 'from-purple-400 to-purple-500';
    return 'from-amber-400 to-amber-500';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <motion.div 
                    className="text-blue-400"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-slate-600/50 rounded-full h-2 overflow-hidden">
                        <motion.div 
                          className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Soft Skills */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 rounded-full border border-purple-400/30 font-medium"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)"
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
              Always eager to learn new technologies and expand my skill set. Currently exploring 
              advanced AI/ML techniques, cloud architectures, and emerging IoT frameworks.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.span 
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 text-emerald-400 rounded-full border border-emerald-400/20"
                whileHover={{ scale: 1.05 }}
              >
                <Brain size={16} />
                Currently Learning: Deep Learning
              </motion.span>
              <motion.span 
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-400/10 to-purple-400/10 text-blue-400 rounded-full border border-blue-400/20"
                whileHover={{ scale: 1.05 }}
              >
                <Globe size={16} />
                Next: Cloud Computing
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;