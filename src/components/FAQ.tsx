import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary depending on scope and complexity. A simple logo design typically takes 1-2 weeks, while a complete brand identity package can take 3-4 weeks. Web design projects usually range from 4-8 weeks depending on the number of pages and functionality required.',
  },
  {
    question: 'Do you work with clients internationally?',
    answer: 'Yes! I work with clients from all around the world. I\'ve successfully completed projects for clients in over 15 countries. Communication is handled through email, video calls, and project management tools to ensure smooth collaboration regardless of time zones.',
  },
  {
    question: 'What file formats do you provide?',
    answer: 'I provide all necessary file formats for your project. For logos, you\'ll receive AI, EPS, PDF, PNG, and JPG files. For web projects, I provide PSD/Figma files along with exported assets. Print projects include high-resolution PDF files ready for production.',
  },
  {
    question: 'How many revisions are included?',
    answer: 'Most projects include 2-3 rounds of revisions to ensure you\'re completely satisfied with the final result. Additional revisions can be accommodated if needed. I believe in collaborative design and want to make sure the final product exceeds your expectations.',
  },
  {
    question: 'What is your payment structure?',
    answer: 'I typically work with a 50% upfront payment to begin the project, with the remaining 50% due upon completion. For larger projects, we can arrange a payment schedule that works for both parties. I accept payments via PayPal, bank transfer, or other secure methods.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes! I offer ongoing support and maintenance for all projects. This includes minor updates, technical support, and guidance on how to use your new designs effectively. I believe in building long-term relationships with my clients.',
  },
  
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about working with me
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="text-blue-600 dark:text-blue-400" size={20} />
                    ) : (
                      <Plus className="text-blue-600 dark:text-blue-400" size={20} />
                    )}
                  </motion.div>
                </div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;