import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Target, Flame } from 'lucide-react';

export const GaryVaynerchukPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Electric energy background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 bg-gradient-to-b from-green-400 to-transparent"
            style={{
              left: `${(i * 5)}%`,
              height: '100%',
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* EXPLOSIVE HEADER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
            className="inline-block"
          >
            <div className="bg-green-500 text-black px-6 py-3 font-black text-xl transform -rotate-2 mb-4">
              STOP MAKING EXCUSES
            </div>
          </motion.div>

          <h1 className="text-5xl font-black text-white mb-4 leading-tight tracking-tight">
            YOU'RE<br />
            WASTING<br />
            TIME & MONEY
          </h1>

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Flame className="w-16 h-16 text-orange-500 mx-auto" />
          </motion.div>
        </motion.div>

        {/* THE REALITY CHECK */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          <div className="bg-red-600 p-5 transform rotate-1">
            <div className="text-white font-black text-2xl mb-2">THE OLD WAY:</div>
            <div className="text-yellow-300 font-bold text-lg">
              $20,000/MONTH FOR A TEAM
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center"
          >
            <div className="text-6xl font-black text-red-500">VS</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-green-500 p-5 transform -rotate-1"
          >
            <div className="text-black font-black text-2xl mb-2">THE MADE WAY:</div>
            <div className="text-white font-black text-3xl">
              $29.99/MONTH
            </div>
            <div className="text-black font-bold text-lg mt-2">
              6 AI SPECIALISTS READY TO GRIND 24/7
            </div>
          </motion.div>
        </motion.div>

        {/* THE EXECUTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-3 gap-2">
            {['CONTENT', 'DESIGN', 'VIDEO', 'SEO', 'SOCIAL', 'DATA'].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                className="bg-white text-black font-black text-xs py-3 text-center"
              >
                {skill}
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(34, 197, 94, 0.5)',
                '0 0 40px rgba(34, 197, 94, 0.8)',
                '0 0 20px rgba(34, 197, 94, 0.5)',
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="bg-gradient-to-r from-green-400 to-emerald-500 p-6 text-center"
          >
            <div className="text-black font-black text-4xl mb-2">
              ZERO EXCUSES
            </div>
            <div className="text-black font-bold text-lg">
              TIME TO EXECUTE. NOW.
            </div>
          </motion.div>
        </motion.div>

        {/* CTA - URGENT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="w-full py-6 bg-green-500 text-black font-black text-2xl transform hover:rotate-1 transition-transform"
          >
            GET MADE NOW!
          </motion.button>
          <p className="text-green-400 text-sm mt-3 font-bold uppercase tracking-wider">
            made.com • HUSTLE SMARTER NOT HARDER
          </p>
        </motion.div>
      </div>
    </div>
  );
};
