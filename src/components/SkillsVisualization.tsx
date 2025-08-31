import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Monitor, Smartphone, Camera, Zap, Globe, Layers } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  color: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: 'Graphic Design',
    level: 95,
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    description: 'Visual identity, logos, and brand design'
  },
  {
    name: 'UI/UX Design',
    level: 90,
    icon: Monitor,
    color: 'from-blue-500 to-cyan-500',
    description: 'User interfaces and experience design'
  },
  {
    name: 'Web Development',
    level: 85,
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    description: 'Frontend development and responsive design'
  },
  {
    name: 'Mobile Design',
    level: 88,
    icon: Smartphone,
    color: 'from-purple-500 to-violet-500',
    description: 'iOS and Android app interface design'
  },
  {
    name: 'Photography',
    level: 80,
    icon: Camera,
    color: 'from-orange-500 to-amber-500',
    description: 'Product and portrait photography'
  },
  {
    name: 'Motion Graphics',
    level: 75,
    icon: Zap,
    color: 'from-red-500 to-pink-500',
    description: 'Animation and video editing'
  },
  {
    name: 'Brand Strategy',
    level: 92,
    icon: Globe,
    color: 'from-indigo-500 to-blue-500',
    description: 'Brand positioning and market analysis'
  },
  {
    name: '3D Design',
    level: 70,
    icon: Layers,
    color: 'from-teal-500 to-cyan-500',
    description: 'Product visualization and 3D modeling'
  }
];

const SkillsVisualization: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-900/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my design and technical capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="text-white" size={24} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {skill.description}
                </p>

                {/* Skill level visualization */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Proficiency
                    </span>
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`bg-gradient-to-r ${skill.color} h-2 rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                {/* Skill level dots */}
                <div className="flex justify-center mt-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < Math.floor(skill.level / 20)
                          ? `bg-gradient-to-r ${skill.color}`
                          : 'bg-gray-200 dark:bg-gray-600'
                      }`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsVisualization;