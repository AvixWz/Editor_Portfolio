import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, Award, Calendar, Users } from 'lucide-react';
import LazyImage from './LazyImage';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  image: string;
  images: string[];
  link: string;
  github?: string;
  featured: boolean;
  year: string;
  client: string;
  duration: string;
  teamSize: number;
  awards?: string[];
  technologies: string[];
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'TechCorp Brand Identity',
    description: 'Complete brand identity package for a tech startup',
    longDescription: 'Developed a comprehensive brand identity system for TechCorp, a cutting-edge AI startup. The project included logo design, color palette development, typography selection, and brand guidelines. The modern, tech-forward design helped the company secure $2M in Series A funding.',
    category: 'Branding',
    tags: ['Logo Design', 'Brand Identity', 'Visual Design'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    link: 'https://example.com/project1',
    github: 'https://github.com/henrygfx/techcorp-brand',
    featured: true,
    year: '2024',
    client: 'TechCorp Inc.',
    duration: '6 weeks',
    teamSize: 3,
    awards: ['Design Excellence Award 2024', 'Best Brand Identity - Startup Category'],
    technologies: ['Adobe Illustrator', 'Figma', 'After Effects']
  },
  {
    id: 2,
    title: 'FashionHub E-commerce',
    description: 'Modern e-commerce platform with focus on user experience',
    longDescription: 'Designed and developed a complete e-commerce platform for FashionHub, featuring an intuitive shopping experience, advanced filtering, and seamless checkout process. The design increased conversion rates by 45% and reduced cart abandonment by 30%.',
    category: 'Web Design',
    tags: ['UI/UX', 'E-commerce', 'Responsive Design'],
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    link: 'https://example.com/project2',
    github: 'https://github.com/henrygfx/fashionhub',
    featured: true,
    year: '2024',
    client: 'FashionHub Ltd.',
    duration: '8 weeks',
    teamSize: 5,
    awards: ['UX Design Award 2024'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 3,
    title: 'FitTracker Mobile App',
    description: 'Comprehensive fitness tracking application',
    longDescription: 'Created a complete mobile app design for FitTracker, focusing on motivation and user engagement. The app features workout tracking, nutrition logging, and social challenges. The intuitive design led to 100K+ downloads in the first month.',
    category: 'Mobile Design',
    tags: ['Mobile UI', 'App Design', 'User Experience'],
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    link: 'https://example.com/project3',
    featured: true,
    year: '2024',
    client: 'FitTracker Inc.',
    duration: '10 weeks',
    teamSize: 4,
    technologies: ['Figma', 'Principle', 'Sketch', 'InVision']
  }
];

const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Detailed case studies of my most impactful work
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                  >
                    <Play size={24} />
                  </motion.div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <Users size={12} className="mr-1" />
                      {project.teamSize}
                    </div>
                  </div>
                  {project.awards && (
                    <Award className="text-yellow-500" size={16} />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <div className="aspect-video relative overflow-hidden rounded-t-2xl">
                    <LazyImage
                      src={selectedProject.images[currentImageIndex]}
                      alt={selectedProject.title}
                      className="w-full h-full"
                    />
                    
                    {/* Image navigation */}
                    {selectedProject.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                              index === currentImageIndex
                                ? 'bg-white'
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    ×
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap items-center justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedProject.title}
                      </h2>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                        {selectedProject.client}
                      </p>
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Live
                      </a>
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
                        >
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <Calendar className="mx-auto text-blue-600 dark:text-blue-400 mb-2" size={20} />
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {selectedProject.duration}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Duration</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <Users className="mx-auto text-blue-600 dark:text-blue-400 mb-2" size={20} />
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {selectedProject.teamSize}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Team Size</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <Award className="mx-auto text-blue-600 dark:text-blue-400 mb-2" size={20} />
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {selectedProject.awards?.length || 0}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Awards</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {selectedProject.year}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Year</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Awards */}
                  {selectedProject.awards && selectedProject.awards.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Awards & Recognition
                      </h3>
                      <div className="space-y-2">
                        {selectedProject.awards.map((award) => (
                          <div key={award} className="flex items-center">
                            <Award className="text-yellow-500 mr-2" size={16} />
                            <span className="text-gray-600 dark:text-gray-300">{award}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectShowcase;