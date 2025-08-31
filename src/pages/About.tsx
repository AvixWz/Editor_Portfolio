import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Users, Zap, Code, Palette, Globe, Heart } from 'lucide-react';
import LazyImage from '../components/LazyImage';
import SkillsVisualization from '../components/SkillsVisualization';
import AchievementsTimeline from '../components/AchievementsTimeline';
import TechStack from '../components/TechStack';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const skills = [
    { name: 'Graphic Design', level: 95 },
    { name: 'UI/UX Design', level: 90 },
    { name: 'Brand Identity', level: 92 },
    { name: 'Web Design', level: 88 },
    { name: 'Print Design', level: 85 },
    { name: 'Motion Graphics', level: 80 },
  ];

  const experiences = [
    {
      title: 'Senior Graphic Designer',
      company: 'Creative Studio Inc.',
      period: '2022 - Present',
      description: 'Leading design projects for major clients, managing a team of junior designers, and developing brand strategies.',
      achievements: ['Led 50+ successful projects', 'Increased client retention by 40%', 'Mentored 8 junior designers'],
    },
    {
      title: 'Freelance Designer',
      company: 'Self-Employed',
      period: '2020 - 2022',
      description: 'Provided comprehensive design services to startups and small businesses, specializing in brand identity and digital design.',
      achievements: ['Worked with 30+ clients', 'Generated $200K+ in revenue', 'Built strong portfolio'],
    },
    {
      title: 'Junior Designer',
      company: 'Digital Agency Co.',
      period: '2019 - 2020',
      description: 'Developed skills in web and mobile design, collaborated with development teams, and learned industry best practices.',
      achievements: ['Contributed to 25+ projects', 'Learned modern design tools', 'Developed coding skills'],
    },
  ];

  const values = [
    { icon: Heart, title: 'Passion-Driven', description: 'Every project is approached with genuine enthusiasm and creative energy.' },
    { icon: Users, title: 'Client-Focused', description: 'Your vision and goals are at the center of every design decision.' },
    { icon: Zap, title: 'Innovation', description: 'Constantly exploring new trends and technologies to deliver cutting-edge solutions.' },
    { icon: Award, title: 'Excellence', description: 'Committed to delivering the highest quality work that exceeds expectations.' },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate designer with a mission to create impactful visual experiences
          </p>
        </motion.div>

        {/* About Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <LazyImage
                    src="src/assets/henry.jpg"
                    alt="Henry - Graphic Designer"
                    className="w-full h-full opacity-80"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Hi, I'm Henry 👋
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate graphic designer with over 5 years of experience in creating
                stunning visual identities and digital experiences. My journey began with a
                simple love for art and has evolved into a comprehensive skill set spanning
                brand design, web interfaces, and print media.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe that great design has the power to transform businesses and connect
                with people on an emotional level. Every project I take on is an opportunity
                to solve problems creatively and make a lasting impact.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { icon: Clock, label: '5+ Years', desc: 'Experience' },
                  { icon: Users, label: '150+', desc: 'Projects' },
                  { icon: Globe, label: '15+', desc: 'Countries' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <stat.icon className="mx-auto text-blue-600 dark:text-blue-400 mb-2" size={24} />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <SkillsVisualization />
        </section>

        {/* Tech Stack */}
        <TechStack />

        {/* Achievements Timeline */}
        <AchievementsTimeline />

        {/* Experience Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              My journey through various roles and achievements
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-2 lg:mt-0">
                    <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 dark:text-gray-300 flex items-center"
                      >
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide every design decision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
