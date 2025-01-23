import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Samir Meshram
          </h1>
          <div className="text-xl md:text-2xl text-gray-600 mb-6 h-20">
            <TypeAnimation
              sequence={[
                'B.Tech Student',
                1000,
                'Data Science Enthusiast',
                1000,
                'Problem Solver',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-gray-600 mb-8">
            Passionate about leveraging data science to solve real-world problems and create impactful solutions.
          </p>
          <div className="flex space-x-4">
            <motion.a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <div className="flex space-x-4 items-center">
              <motion.a
                href="https://github.com/samir-meshram"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-gray-900"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/samir-meshram"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:samir.meshram@example.com"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-gray-900"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="aspect-square rounded-full overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80"
              alt="Samir Meshram"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
            <span className="text-blue-600 font-semibold">Data Science</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;