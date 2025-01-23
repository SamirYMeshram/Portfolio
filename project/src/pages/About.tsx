import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Brain, Code, Target, GraduationCap, Award, Briefcase, Book } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const timelineItems = [
    {
      year: '2020',
      title: 'Started B.Tech in Data Science',
      description: 'Began journey at prestigious institute with focus on data science and analytics',
      icon: <Book className="w-4 h-4 text-white" />,
    },
    {
      year: '2021',
      title: 'First Research Project',
      description: 'Led machine learning research project in healthcare, achieving 95% accuracy in disease prediction',
      icon: <Brain className="w-4 h-4 text-white" />,
    },
    {
      year: '2022',
      title: 'Summer Internship',
      description: 'Data Science intern at Tech Corp, developing AI solutions for real-world problems',
      icon: <Briefcase className="w-4 h-4 text-white" />,
    },
    {
      year: '2023',
      title: 'Academic Excellence Award',
      description: 'Received department award for outstanding academic performance and research contributions',
      icon: <Award className="w-4 h-4 text-white" />,
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
          ref={ref}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4"
          >
            About Me
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Passionate About{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Data Science
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A dedicated B.Tech student with a strong foundation in data science,
            machine learning, and artificial intelligence. Committed to creating
            innovative solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">My Journey</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Throughout my academic journey, I've developed expertise in mathematics,
                  statistics, and programming. My passion for data science has led me to
                  explore cutting-edge technologies and their practical applications.
                </p>
                <p className="text-gray-600">
                  I've worked on various projects involving machine learning, deep learning,
                  and data analytics, consistently achieving exceptional results and
                  gaining valuable insights into real-world problem-solving.
                </p>
                <p className="text-gray-600">
                  My goal is to leverage these skills to create innovative solutions
                  that address complex challenges in the field of artificial intelligence
                  and data science.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative pl-8 border-l-2 border-blue-200 space-y-12"
          >
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-10 mt-1">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-2">
                    {item.icon}
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              icon: <BookOpen className="w-8 h-8 text-blue-600" />,
              title: 'Education',
              content: 'B.Tech in Data Science with specialization in AI and Machine Learning',
              bg: 'from-blue-50 to-blue-100',
            },
            {
              icon: <Brain className="w-8 h-8 text-purple-600" />,
              title: 'Research Interests',
              content: 'Deep Learning, Computer Vision, Natural Language Processing',
              bg: 'from-purple-50 to-purple-100',
            },
            {
              icon: <Code className="w-8 h-8 text-indigo-600" />,
              title: 'Technical Skills',
              content: 'Python, TensorFlow, PyTorch, SQL, Big Data Technologies',
              bg: 'from-indigo-50 to-indigo-100',
            },
            {
              icon: <Target className="w-8 h-8 text-rose-600" />,
              title: 'Career Goals',
              content: 'Leading AI research and development in innovative technology solutions',
              bg: 'from-rose-50 to-rose-100',
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${card.bg} p-8 rounded-2xl shadow-lg`}
            >
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-700">{card.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;