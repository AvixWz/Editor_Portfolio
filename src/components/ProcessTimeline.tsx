import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Palette, Code, TestTube, Rocket } from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  duration: string;
  deliverables: string[];
  color: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Discovery & Research',
    description: 'Understanding your vision, goals, and target audience through detailed consultation.',
    icon: MessageSquare,
    duration: '1-2 days',
    deliverables: ['Project brief', 'Research findings', 'Mood board'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Concept Development',
    description: 'Brainstorming and developing initial concepts based on research insights.',
    icon: Lightbulb,
    duration: '2-3 days',
    deliverables: ['Concept sketches', 'Wireframes', 'Style exploration'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 3,
    title: 'Design Creation',
    description: 'Crafting the visual design with attention to every detail and user experience.',
    icon: Palette,
    duration: '1-2 weeks',
    deliverables: ['High-fidelity designs', 'Design system', 'Asset library'],
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 4,
    title: 'Development',
    description: 'Bringing designs to life with clean, efficient code and modern technologies.',
    icon: Code,
    duration: '2-4 weeks',
    deliverables: ['Responsive website', 'Interactive prototypes', 'Source code'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 5,
    title: 'Testing & Refinement',
    description: 'Thorough testing across devices and browsers with iterative improvements.',
    icon: TestTube,
    duration: '3-5 days',
    deliverables: ['Test reports', 'Bug fixes', 'Performance optimization'],
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 6,
    title: 'Launch & Support',
    description: 'Deploying your project and providing ongoing support for a smooth launch.',
    icon: Rocket,
    duration: '1-2 days',
    deliverables: ['Live deployment', 'Documentation', 'Training materials'],
    color: 'from-red-500 to-pink-500'
  }
];

const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50/50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Design Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A proven methodology that ensures exceptional results every time
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full hidden lg:block" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-8`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mr-4`}>
                        <step.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {step.duration}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Deliverables:
                      </h4>
                      <ul className="space-y-1">
                        {step.deliverables.map((deliverable) => (
                          <li key={deliverable} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline node */}
                <div className="relative hidden lg:block">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900`}
                  >
                    <span className="text-white font-bold text-lg">{step.id}</span>
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 lg:max-w-md hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;