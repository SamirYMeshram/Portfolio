import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Brain, Code, Target } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cards = [
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: 'Education',
      content: 'B.Tech in Data Science, Final Year Student with strong academic performance',
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      title: 'Interests',
      content: 'Machine Learning, Data Analytics, AI, and Software Development',
    },
    {
      icon: <Code className="w-6 h-6 text-blue-600" />,
      title: 'Technical Skills',
      content: 'Python, R, SQL, TensorFlow, PyTorch, and Web Development',
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: 'Career Goals',
      content: 'Aspiring to become a Data Scientist and contribute to innovative AI solutions',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          variants={cardVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm a passionate B.Tech student specializing in Data Science, eager to apply my knowledge
            and skills to solve real-world problems through innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-gray-50 p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-4">My Journey</h3>
          <p className="text-gray-600 mb-4">
            Throughout my academic journey, I've developed a strong foundation in mathematics,
            statistics, and programming. I've worked on various projects involving machine learning,
            data analysis, and software development, which have helped me gain practical experience
            in applying theoretical concepts to real-world problems.
          </p>
          <p className="text-gray-600">
            I'm particularly interested in the intersection of AI and practical applications,
            always looking for opportunities to learn and grow in this rapidly evolving field.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;