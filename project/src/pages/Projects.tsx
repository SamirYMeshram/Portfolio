import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Brain, LineChart } from 'lucide-react';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      title: 'AI-Powered Disease Prediction',
      description: 'Developed a machine learning model for early disease detection using patient data, achieving 95% accuracy.',
      tech: ['Python', 'TensorFlow', 'scikit-learn', 'Pandas'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
      github: 'https://github.com/samir-meshram/disease-prediction',
      live: 'https://disease-prediction-demo.example.com',
      icon: <Brain className="w-6 h-6" />,
      category: 'Machine Learning',
    },
    {
      title: 'Big Data Analytics Platform',
      description: 'Created a scalable data analytics platform for processing and visualizing large datasets in real-time.',
      tech: ['Apache Spark', 'Python', 'React', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      github: 'https://github.com/samir-meshram/data-analytics',
      live: 'https://data-analytics-demo.example.com',
      icon: <Database className="w-6 h-6" />,
      category: 'Data Analytics',
    },
    {
      title: 'NLP Text Analysis Tool',
      description: 'Built a natural language processing tool for sentiment analysis and text classification.',
      tech: ['Python', 'NLTK', 'Transformers', 'Flask'],
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&auto=format&fit=crop&q=80',
      github: 'https://github.com/samir-meshram/nlp-tool',
      live: 'https://nlp-tool-demo.example.com',
      icon: <Code className="w-6 h-6" />,
      category: 'NLP',
    },
    {
      title: 'Stock Market Predictor',
      description: 'Implemented a deep learning model for stock price prediction using historical market data.',
      tech: ['Python', 'PyTorch', 'pandas', 'Plotly'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
      github: 'https://github.com/samir-meshram/stock-predictor',
      live: 'https://stock-predictor-demo.example.com',
      icon: <LineChart className="w-6 h-6" />,
      category: 'Finance',
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-16 bg-gradient-to-b from-blue-50 via-white to-purple-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4"
          >
            My Projects
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore my portfolio of data science and machine learning projects,
            showcasing practical applications of AI in solving real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
                  {project.icon}
                  <span className="text-sm font-medium">{project.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;