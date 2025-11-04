import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, AlertTriangle, Target, Zap } from 'lucide-react';

export const DanKennedyPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Direct response urgency pattern */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-2 bg-red-600"
            style={{ top: `${i * 33}%` }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1,
              delay: i * 0.3,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Header - Urgency Driven */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -10, 10, 0],
            }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block bg-red-600 px-6 py-3 mb-4 border-4 border-yellow-400 transform rotate-3"
          >
            <span className="text-yellow-300 font-black text-xl uppercase">
              WARNING!
            </span>
          </motion.div>

          <h1 className="text-5xl font-black text-white mb-3 leading-none uppercase">
            You're<br />
            Losing<br />
            $19,970.01
          </h1>

          <p className="text-red-500 font-bold text-xl uppercase">
            Every. Single. Month.
          </p>
        </motion.div>

        {/* The Problem Box - Classic Kennedy Style */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-red-600 border-8 border-yellow-400 p-6"
        >
          <div className="bg-black p-5 border-4 border-dashed border-white">
            <h3 className="text-yellow-400 font-black text-2xl mb-4 text-center uppercase">
              The Brutal Truth
            </h3>

            <div className="space-y-3 text-white">
              {[
                'Content Writer: $4,000/mo',
                'Designer: $4,000/mo',
                'Social Manager: $3,500/mo',
                'Video Editor: $3,500/mo',
                'SEO Expert: $4,500/mo',
                'Analyst: $4,500/mo',
              ].map((cost, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                  className="flex justify-between items-center bg-red-700 p-3 font-bold"
                >
                  <span>{cost}</span>
                  <span className="text-yellow-400">⚠</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t-4 border-red-600">
              <div className="flex justify-between items-center">
                <span className="text-yellow-400 font-black text-xl uppercase">Total Loss:</span>
                <span className="text-red-400 font-black text-3xl">$24,000/mo</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Solution - Value Bomb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-gradient-to-r from-green-600 to-emerald-600 border-8 border-yellow-400 p-6"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(234, 179, 8, 0.5)',
                '0 0 60px rgba(234, 179, 8, 1)',
                '0 0 20px rgba(234, 179, 8, 0.5)',
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="bg-black p-6 border-4 border-yellow-400"
          >
            <div className="text-center mb-4">
              <div className="inline-block bg-yellow-400 px-6 py-2 mb-3 transform -rotate-2">
                <span className="text-black font-black text-lg uppercase">
                  LIMITED TIME OFFER
                </span>
              </div>
              <h3 className="text-white font-black text-2xl uppercase mb-2">
                Get All 6 Specialists
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              {['✓ Content', '✓ Design', '✓ Social', '✓ Video', '✓ SEO', '✓ Analytics'].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 + idx * 0.05 }}
                  className="bg-green-500 text-white font-black text-center py-3 text-sm"
                >
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="bg-red-600 p-6 text-center mb-4">
              <div className="text-yellow-400 text-sm font-bold mb-2 line-through">
                Regular Price: $24,000/month
              </div>
              <div className="text-white text-sm font-bold mb-2">YOUR PRICE:</div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-yellow-400 font-black text-6xl mb-2"
              >
                $29.99
              </motion.div>
              <div className="text-white font-bold text-xl">/MONTH</div>
            </div>

            <div className="bg-yellow-400 p-4 text-center">
              <div className="text-black font-black text-2xl mb-1">
                SAVE $23,970.01
              </div>
              <div className="text-black font-bold text-sm uppercase">
                Every Single Month!
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scarcity Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="bg-red-600 border-4 border-yellow-400 p-5 text-center"
        >
          <div className="flex items-center justify-center mb-3">
            <Clock className="w-8 h-8 text-yellow-400 mr-3" />
            <span className="text-white font-black text-xl uppercase">
              Act Now Or Pay Full Price
            </span>
          </div>
          <p className="text-yellow-300 font-bold">
            Every day you wait costs you $798.67
          </p>
        </motion.div>

        {/* Money-Back Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.9 }}
          className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border-2 border-green-500 text-center"
        >
          <div className="flex items-center justify-center mb-2">
            <Target className="w-6 h-6 text-green-400 mr-2" />
            <span className="text-green-400 font-bold uppercase">ZERO RISK GUARANTEE</span>
          </div>
          <p className="text-white text-sm font-semibold">
            If Made doesn't save you 10+ hours this week, we'll refund every penny
          </p>
        </motion.div>

        {/* CTA - Maximum Urgency */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-full py-6 bg-gradient-to-r from-red-600 to-orange-600 text-white font-black text-2xl uppercase border-8 border-yellow-400 shadow-2xl"
          >
            CLAIM YOUR SAVINGS NOW! →
          </motion.button>
          <p className="text-yellow-400 text-xs mt-3 font-bold uppercase tracking-wider">
            made.com • Direct Response That Works
          </p>
        </motion.div>
      </div>
    </div>
  );
};
