import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, LineChart, Terminal, Server, Globe, Cpu } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-8 h-8 text-blue-600" />,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'R', level: 85 },
        { name: 'SQL', level: 90 },
        { name: 'JavaScript', level: 80 },
      ],
    },
    {
      title: 'Machine Learning',
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      skills: [
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 85 },
        { name: 'scikit-learn', level: 92 },
        { name: 'Deep Learning', level: 88 },
      ],
    },
    {
      title: 'Data Analysis',
      icon: <LineChart className="w-8 h-8 text-green-600" />,
      skills: [
        { name: 'Pandas', level: 95 },
        { name: 'NumPy', level: 90 },
        { name: 'Data Visualization', level: 88 },
        { name: 'Statistical Analysis', level: 85 },
      ],
    },
    {
      title: 'Big Data',
      icon: <Database className="w-8 h-8 text-orange-600" />,
      skills: [
        { name: 'Apache Spark', level: 82 },
        { name: 'Hadoop', level: 75 },
        { name: 'MongoDB', level: 85 },
        { name: 'ETL Pipelines', level: 80 },
      ],
    },
  ];

  const tools = [
    { name: 'Git', icon: <Terminal className="w-6 h-6" /> },
    { name: 'Docker', icon: <Server className="w-6 h-6" /> },
    { name: 'AWS', icon: <Globe className="w-6 h-6" /> },
    { name: 'Kubernetes', icon: <Cpu className="w-6 h-6" /> },
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
            My Skills
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Technical{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical skills and proficiency
            in various data science and machine learning technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gray-50"
              >
                {tool.icon}
                <span className="font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;