import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal, AlignCenterVertical as Certificate, Crown } from 'lucide-react';

const Achievements = () => {
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

  const achievements = [
    {
      title: 'Academic Excellence Award',
      organization: 'Department of Data Science',
      date: '2023',
      description: 'Awarded for outstanding academic performance and research contributions in data science.',
      icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: 'Best Research Paper',
      organization: 'International Conference on Machine Learning',
      date: '2022',
      description: 'Research paper on novel deep learning architecture recognized for innovation.',
      icon: <Star className="w-6 h-6 text-blue-500" />,
    },
    {
      title: 'Data Science Hackathon Winner',
      organization: 'TechCorp Innovation Challenge',
      date: '2022',
      description: 'Led team to victory in developing AI solution for healthcare diagnostics.',
      icon: <Medal className="w-6 h-6 text-purple-500" />,
    },
    {
      title: 'Machine Learning Certification',
      organization: 'Google AI',
      date: '2021',
      description: 'Advanced certification in machine learning and artificial intelligence.',
      icon: <Certificate className="w-6 h-6 text-green-500" />,
    },
  ];

  const certifications = [
    {
      name: 'Deep Learning Specialization',
      issuer: 'Coursera',
      date: '2023',
      credential: 'ABC123XYZ',
    },
    {
      name: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      date: '2022',
      credential: 'TF789DEV',
    },
    {
      name: 'AWS Machine Learning Specialty',
      issuer: 'Amazon Web Services',
      date: '2022',
      credential: 'AWS456ML',
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
            My Achievements
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Awards &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Recognition
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Highlighting key milestones and recognition received throughout
            my academic and professional journey in data science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-50 rounded-xl">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 mb-1">{achievement.organization}</p>
                  <p className="text-sm text-gray-500 mb-3">{achievement.date}</p>
                  <p className="text-gray-700">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <div className="flex items-center gap-3 mb-8">
            <Crown className="w-8 h-8 text-yellow-500" />
            <h2 className="text-2xl font-bold">Professional Certifications</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100"
              >
                <Award className="w-6 h-6 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
                <p className="text-xs text-gray-400 mt-2">Credential: {cert.credential}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Achievements;