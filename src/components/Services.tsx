import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Monitor, Smartphone, Printer, Camera, Zap } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Palette,
    title: 'Brand Identity Design',
    description: 'Complete brand identity packages that make your business memorable',
    features: ['Logo Design', 'Color Palette', 'Typography', 'Brand Guidelines'],
  },
  {
    icon: Printer,
    title: 'Print Design',
    description: 'Eye-catching print materials that leave lasting impressions',
    features: ['Brochures', 'Business Cards', 'Posters', 'Packaging'],
  },
  {
    icon: Camera,
    title: 'Social Media Graphics',
    description: 'Consistent visual content that builds your online presence',
    features: ['Post Templates', 'Story Graphics', 'Ad Creatives', 'Content Strategy'],
  },
  {
    icon: Zap,
    title: 'Motion Graphics',
    description: 'Dynamic animations that bring your brand to life',
    features: ['Logo Animation', 'Explainer Videos', 'Social Media Clips', 'Presentations'],
  },
];

const Services: React.FC = () => {
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
            Services i Offer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive design solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;