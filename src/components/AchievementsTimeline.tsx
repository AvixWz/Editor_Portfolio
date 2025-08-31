import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, Star, Trophy, Target } from 'lucide-react';

interface Achievement {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  metric?: string;
  color: string;
  category: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    year: '2024',
    title: 'Design Excellence Award',
    description: 'Recognized for outstanding brand identity work at the International Design Awards',
    icon: Trophy,
    metric: '1st Place',
    color: 'from-yellow-500 to-orange-500',
    category: 'Award'
  },
  {
    id: 2,
    year: '2024',
    title: 'Client Portfolio Milestone',
    description: 'Reached 150+ completed projects with 98% client satisfaction rate',
    icon: Target,
    metric: '150+ Projects',
    color: 'from-green-500 to-emerald-500',
    category: 'Milestone'
  },
  {
    id: 3,
    year: '2023',
    title: 'Revenue Growth',
    description: 'Achieved 200% year-over-year revenue growth through strategic partnerships',
    icon: TrendingUp,
    metric: '+200%',
    color: 'from-blue-500 to-cyan-500',
    category: 'Business'
  },
  {
    id: 4,
    year: '2023',
    title: 'Team Expansion',
    description: 'Built and led a team of 5 talented designers for large-scale projects',
    icon: Users,
    metric: '5 Team Members',
    color: 'from-purple-500 to-violet-500',
    category: 'Leadership'
  },
  {
    id: 5,
    year: '2022',
    title: 'Featured Designer',
    description: 'Featured in Design Weekly as "Designer to Watch" for innovative work',
    icon: Star,
    color: 'from-pink-500 to-rose-500',
    category: 'Recognition'
  },
  {
    id: 6,
    year: '2021',
    title: 'First Major Client',
    description: 'Landed first Fortune 500 client, marking a significant career milestone',
    icon: Award,
    color: 'from-indigo-500 to-blue-500',
    category: 'Milestone'
  }
];

const AchievementsTimeline: React.FC = () => {
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
            Achievements & Milestones
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Key moments and accomplishments in my design journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full hidden lg:block" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-8`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <achievement.icon className="text-white" size={24} />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {achievement.year}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          {achievement.category}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>

                    {achievement.metric && (
                      <div className={`inline-block px-3 py-1 bg-gradient-to-r ${achievement.color} text-white text-sm font-semibold rounded-full mb-3`}>
                        {achievement.metric}
                      </div>
                    )}

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline node */}
                <div className="relative hidden lg:block">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900 z-10 relative`}
                  >
                    <achievement.icon className="text-white" size={24} />
                  </motion.div>
                  
                  {/* Pulse effect */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-full`}
                  />
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

export default AchievementsTimeline;