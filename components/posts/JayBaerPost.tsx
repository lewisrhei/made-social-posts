import React from 'react';
import { motion } from 'framer-motion';
import { Heart, HelpCircle, ThumbsUp, Users, Sparkles } from 'lucide-react';

export const JayBaerPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-700 overflow-hidden">
      {/* Helpful background pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.15,
              repeat: Infinity,
            }}
          >
            <HelpCircle className="w-8 h-8 text-white" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Header - Youtility focused */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Heart className="w-8 h-8 text-teal-900" />
          </motion.div>
          <div className="inline-block px-6 py-3 bg-yellow-400 text-teal-900 font-black text-xl mb-4 rounded-lg transform -rotate-1">
            YOUTILITY
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 leading-tight">
            Marketing So Useful,<br />
            People Would Pay For It
          </h1>
          <p className="text-teal-100 text-lg">
            (But with Made, you don't have to)
          </p>
        </motion.div>

        {/* The Problem People Face */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        >
          <div className="flex items-center mb-4">
            <HelpCircle className="w-6 h-6 text-yellow-400 mr-3" />
            <h3 className="text-white font-bold text-lg">The Real Problem You're Solving</h3>
          </div>

          <div className="space-y-3">
            {[
              'How do I create consistent content without burning out?',
              'How can I afford professional design on a small budget?',
              'How do I manage multiple creative specialists?',
              'How can I scale content without hiring a team?',
            ].map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 p-4 rounded-lg"
              >
                <p className="text-teal-100 text-sm leading-relaxed">{question}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Helpful Solution */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-6"
        >
          <div className="text-center mb-4">
            <Sparkles className="w-10 h-10 text-teal-900 mx-auto mb-3" />
            <h3 className="text-teal-900 font-black text-2xl">Made Solves All of This</h3>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { icon: '✍️', title: 'Content Writer', help: 'Never blank page again' },
              { icon: '🎨', title: 'Designer', help: 'Pro visuals anytime' },
              { icon: '📱', title: 'Social Media', help: 'Always on-brand' },
              { icon: '🎥', title: 'Video Editor', help: 'Polish every frame' },
              { icon: '📊', title: 'SEO Expert', help: 'Get discovered' },
              { icon: '📈', title: 'Analyst', help: 'Know what works' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.05 }}
                className="bg-teal-900/80 rounded-xl p-3"
              >
                <div className="text-3xl mb-1">{item.icon}</div>
                <div className="text-yellow-300 text-xs font-bold mb-1">{item.title}</div>
                <div className="text-teal-100 text-xs">{item.help}</div>
              </motion.div>
            ))}
          </div>

          <div className="bg-teal-900/80 rounded-2xl p-5 text-center">
            <div className="text-yellow-300 text-sm font-bold mb-2">All This Helpfulness For</div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white font-black text-5xl mb-2"
            >
              $29.99
            </motion.div>
            <div className="text-teal-200 text-lg font-semibold">per month</div>
          </div>
        </motion.div>

        {/* The Youtility Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border-2 border-yellow-400"
        >
          <div className="flex items-center justify-center mb-3">
            <ThumbsUp className="w-6 h-6 text-yellow-400 mr-2" />
            <h3 className="text-white font-bold text-lg">The Youtility Promise</h3>
          </div>
          <p className="text-center text-teal-100 leading-relaxed">
            Made isn't just a tool. It's so useful, it becomes indispensable to your business.
            <span className="block mt-2 font-bold text-white">That's marketing worth talking about.</span>
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.9 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-yellow-400 text-teal-900 font-bold text-lg rounded-full shadow-2xl"
          >
            Get Helpful. Get Made.
          </motion.button>
          <p className="text-teal-200 text-sm mt-4">made.com • Youtility in action</p>
        </motion.div>
      </div>
    </div>
  );
};
