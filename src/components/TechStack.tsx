import React from 'react';
import { motion } from 'framer-motion';

interface Tool {
  name: string;
  category: string;
  proficiency: number;
  logo: string;
  description: string;
}

const tools: Tool[] = [
  {
    name: 'Adobe Creative Suite',
    category: 'Design',
    proficiency: 95,
    logo: '🎨',
    description: 'Photoshop, Illustrator, InDesign, After Effects'
  },
  {
    name: 'Figma',
    category: 'Design',
    proficiency: 92,
    logo: '🎯',
    description: 'UI/UX design and prototyping'
  },
  {
    name: 'Sketch',
    category: 'Design',
    proficiency: 88,
    logo: '💎',
    description: 'Interface design and symbols'
  },
  {
    name: 'React',
    category: 'Development',
    proficiency: 85,
    logo: '⚛️',
    description: 'Frontend framework and ecosystem'
  },
  {
    name: 'TypeScript',
    category: 'Development',
    proficiency: 80,
    logo: '📘',
    description: 'Type-safe JavaScript development'
  },
  {
    name: 'Tailwind CSS',
    category: 'Development',
    proficiency: 90,
    logo: '🎨',
    description: 'Utility-first CSS framework'
  },
  // {
  //   name: 'Framer Motion',
  //   category: 'Animation',
  //   proficiency: 85,
  //   logo: '🎬',
  //   description: 'React animation library'
  // },
  // {
  //   name: 'Three.js',
  //   category: 'Animation',
  //   proficiency: 75,
  //   logo: '🌐',
  //   description: '3D graphics and WebGL'
  // },
  {
    name: 'Blender',
    category: '3D',
    proficiency: 70,
    logo: '🔷',
    description: '3D modeling and rendering'
  },
  {
    name: 'Cinema 4D',
    category: '3D',
    proficiency: 65,
    logo: '🎭',
    description: 'Professional 3D animation'
  }
];

const categories = Array.from(new Set(tools.map(tool => tool.category)));

const TechStack: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tools & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The powerful toolkit I use to bring creative visions to life
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {category}
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools
                .filter(tool => tool.category === category)
                .map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 group"
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        {tool.logo}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {tool.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {tool.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Proficiency
                        </span>
                        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                          {tool.proficiency}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tool.proficiency}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;