import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, TrendingUp, Share2, Eye, MessageCircle } from 'lucide-react';

export const JonahBergerPost: React.FC = () => {
  const stepsFramework = [
    { letter: 'S', word: 'Social Currency', icon: Users, color: '#8B5CF6' },
    { letter: 'T', word: 'Triggers', icon: Zap, color: '#EC4899' },
    { letter: 'E', word: 'Emotion', icon: MessageCircle, color: '#F59E0B' },
    { letter: 'P', word: 'Public', icon: Eye, color: '#10B981' },
    { letter: 'P', word: 'Practical Value', icon: TrendingUp, color: '#3B82F6' },
    { letter: 'S', word: 'Stories', icon: Share2, color: '#EF4444' },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 overflow-hidden">
      {/* Viral wave pattern */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-32 border-t-2 border-white/10"
            style={{ top: `${i * 10}%` }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Header - Contagious style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Share2 className="w-8 h-8 text-white" />
          </motion.div>
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 mb-4 rounded-full">
            <span className="text-white font-bold text-sm uppercase tracking-wider">
              Why Ideas Go Viral
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 leading-tight">
            Making Made<br />
            Contagious
          </h1>
          <p className="text-pink-200 text-lg">
            The STEPPS Framework Applied
          </p>
        </motion.div>

        {/* STEPPS Framework */}
        <div className="space-y-2">
          {stepsFramework.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20"
              >
                <div className="flex items-center">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, delay: index * 0.3, repeat: Infinity }}
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    style={{ backgroundColor: step.color }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className="text-2xl font-black mr-2" style={{ color: step.color }}>
                        {step.letter}
                      </span>
                      <span className="text-white font-bold">{step.word}</span>
                    </div>
                    <div className="text-gray-300 text-xs">
                      {index === 0 && "6 specialists for $29.99 makes you look smart"}
                      {index === 1 && "Every creative task triggers 'I need Made'"}
                      {index === 2 && "Relief from creative overwhelm = strong emotion"}
                      {index === 3 && "Share your results, show the value"}
                      {index === 4 && "99% cost savings = ultimate practical value"}
                      {index === 5 && "Your success story becomes our story"}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Viral Potential Meter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6"
        >
          <div className="text-center mb-4">
            <h3 className="text-white font-black text-xl mb-3">Made's Viral Potential</h3>
          </div>

          <div className="space-y-3">
            {[
              { metric: 'Shareability', score: 95 },
              { metric: 'Word of Mouth', score: 92 },
              { metric: 'Social Currency', score: 98 },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
              >
                <div className="flex justify-between text-white text-sm mb-1 font-semibold">
                  <span>{item.metric}</span>
                  <span>{item.score}%</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.score}%` }}
                    transition={{ duration: 1, delay: 1.6 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-5 bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center"
          >
            <div className="text-yellow-300 text-sm font-bold mb-1">Overall Contagiousness</div>
            <div className="text-white font-black text-4xl">HIGHLY VIRAL</div>
          </motion.div>
        </motion.div>

        {/* The Share Moment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border-2 border-pink-400"
        >
          <div className="text-center">
            <p className="text-white font-bold text-lg mb-3">
              "I'm getting 6 specialists for the price of coffee"
            </p>
            <p className="text-pink-200 text-sm italic">
              — What your friends will say when you tell them about Made
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.1 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(236, 72, 153, 0.5)',
                '0 0 40px rgba(236, 72, 153, 0.8)',
                '0 0 20px rgba(236, 72, 153, 0.5)',
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-full shadow-2xl"
          >
            Become Contagious
          </motion.button>
          <p className="text-pink-200 text-sm mt-4">made.com • Built to spread</p>
        </motion.div>
      </div>
    </div>
  );
};
