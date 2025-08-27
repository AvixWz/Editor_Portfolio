import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, Search } from 'lucide-react';
import LazyImage from '../components/LazyImage';
import { debounce } from '../utils/performance';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  link: string;
  featured: boolean;
  year: string;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const projects: Project[] = useMemo(() => [
    {
      id: 1,
      title: 'Brand Identity Design',
      description: 'Complete brand identity package for a tech startup including logo, color palette, and brand guidelines.',
      category: 'Branding',
      tags: ['Logo Design', 'Brand Identity', 'Visual Design'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://example.com/project1',
      featured: true,
      year: '2024',
    },
    {
      id: 2,
      title: 'E-commerce Website UI',
      description: 'Modern and intuitive user interface design for an online fashion retailer with focus on conversion optimization.',
      category: 'Web Design',
      tags: ['UI/UX', 'E-commerce', 'Responsive Design'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://example.com/project2',
      featured: true,
      year: '2024',
    },
    {
      id: 3,
      title: 'Mobile App Interface',
      description: 'Sleek mobile application design for a fitness tracking app with emphasis on user engagement.',
      category: 'Mobile Design',
      tags: ['Mobile UI', 'App Design', 'User Experience'],
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://example.com/project3',
      featured: false,
      year: '2023',
    },
    {
      id: 4,
      title: 'Print Campaign Design',
      description: 'Eye-catching print advertisement campaign for a luxury watch brand targeting high-end consumers.',
      category: 'Print Design',
      tags: ['Print Design', 'Advertisement', 'Luxury Branding'],
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://example.com/project4',
      featured: false,
      year: '2023',
    },
    {
      id: 5,
      title: 'Social Media Graphics',
      description: 'Consistent visual content creation for social media platforms including Instagram, Facebook, and Twitter.',
      category: 'Social Media',
      tags: ['Social Media', 'Content Creation', 'Visual Design'],
      image: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://example.com/project5',
      featured: true,
      year: '2024',
    },
    {
      id: 6,
      title: 'Corporate Website Redesign',
      description: 'Complete website redesign for a consulting firm focusing on professional appearance and user experience.',
      category: 'Web Design',
      tags: ['Web Design', 'Corporate', 'Redesign'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://example.com/project6',
      featured: false,
      year: '2023',
    },
  ], []);

  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map(p => p.category)))], [projects]);

  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const debouncedFilter = useMemo(
    () =>
      debounce((term: string, category: string) => {
        setIsLoading(true);
        setTimeout(() => {
          let filtered = projects;

          if (category !== 'All') {
            filtered = filtered.filter(p => p.category === category);
          }

          if (term.trim() !== '') {
            const lowerTerm = term.toLowerCase();
            filtered = filtered.filter(
              p =>
                p.title.toLowerCase().includes(lowerTerm) ||
                p.description.toLowerCase().includes(lowerTerm) ||
                p.tags.some(tag => tag.toLowerCase().includes(lowerTerm))
            );
          }

          setFilteredProjects(filtered);
          setIsLoading(false);
        }, 200);
      }, 300),
    [projects]
  );

  useEffect(() => {
    debouncedFilter(searchTerm, selectedCategory);
  }, [searchTerm, selectedCategory, debouncedFilter]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of my best work spanning various disciplines and industries
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Filter className="text-gray-500 dark:text-gray-400 mr-2" size={20} />
              {categories.map(category => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-64"
              />
              {isLoading && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="relative aspect-video overflow-hidden">
                  <LazyImage src={project.image} alt={project.title} className="w-full h-full group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">Featured</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">{project.year}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && !isLoading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-300">Try adjusting your search terms or filters</p>
          </motion.div>
        )}

        {isLoading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300">Loading projects...</p>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mt-20 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Let's collaborate and bring your creative vision to life</p>
          <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300">
            Get In Touch
            <ExternalLink className="ml-2" size={20} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
