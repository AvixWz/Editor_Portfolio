import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Instagram, Linkedin, Twitter, MapPin, Clock, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@henrygfx.com',
      link: 'mailto:hello@henrygfx.com',
      description: 'Best for project inquiries and detailed discussions',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: MessageSquare,
      title: 'Discord',
      value: 'henrygfx#1234',
      link: 'https://discord.com/users/henrygfx',
      description: 'Quick chats and real-time collaboration',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+1 (555) 123-4567',
      link: 'https://wa.me/15551234567',
      description: 'Voice calls and instant messaging',
      color: 'from-green-500 to-emerald-600',
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@henrygfx',
      link: 'https://instagram.com/henrygfx',
      followers: '12.5K',
      description: 'Daily design inspiration and behind-the-scenes content',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: 'Henry Rodriguez',
      link: 'https://linkedin.com/in/henrygfx',
      followers: '3.2K',
      description: 'Professional updates and industry insights',
    },
    {
      icon: Twitter,
      name: 'Twitter',
      handle: '@henrygfx',
      link: 'https://twitter.com/henrygfx',
      followers: '8.7K',
      description: 'Design tips, trends, and quick thoughts',
    },
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM EST' },
    { day: 'Sunday', hours: 'Closed' },
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
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to bring your vision to life? Choose your preferred way to get in touch
          </p>
        </motion.div>

        {/* Contact Methods */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Methods
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Multiple ways to reach me for different needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group block p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  {method.title}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold text-center mb-3">
                  {method.value}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                  {method.description}
                </p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Social Media */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Follow My Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Stay updated with my latest work and insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <social.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {social.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {social.handle}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {social.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {social.followers} followers
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:underline">
                    Follow →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Additional Info */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center mb-6">
              <Clock className="text-blue-600 dark:text-blue-400 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Working Hours
              </h3>
            </div>
            <div className="space-y-4">
              {workingHours.map((schedule) => (
                <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                  <span className="text-gray-600 dark:text-gray-300 font-medium">
                    {schedule.day}
                  </span>
                  <span className="text-gray-900 dark:text-white font-semibold">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <p className="text-sm text-blue-600 dark:text-blue-400">
                <strong>Response Time:</strong> I typically respond to messages within 2-4 hours during working hours.
              </p>
            </div>
          </motion.div>

          {/* Location & Process */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Location */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <MapPin className="text-blue-600 dark:text-blue-400 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Location
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Based in New York, USA (EST Timezone)
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Available for remote work worldwide and local meetings in the NYC area.
              </p>
            </div>

            {/* Project Process */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                How We'll Work Together
              </h3>
              <div className="space-y-3">
                {[
                  'Initial consultation to understand your needs',
                  'Project proposal with timeline and pricing',
                  'Iterative design process with regular check-ins',
                  'Final delivery with all source files and assets',
                ].map((step, index) => (
                  <div key={step} className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 dark:bg-blue-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Don't hesitate to reach out - I'd love to hear about your vision!
          </p>
          <motion.a
            href="mailto:hello@henrygfx.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
          >
            <Mail className="mr-2" size={20} />
            Send Me an Email
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;