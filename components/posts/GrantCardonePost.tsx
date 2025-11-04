import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Rocket, Zap, Target } from 'lucide-react';

export const GrantCardonePost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-black via-green-900 to-black overflow-hidden">
      {/* Money rain effect */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-10%',
            }}
            animate={{
              y: ['0vh', '120vh'],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          >
            💵
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* 10X HEADER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [-5, 5, -5],
            }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block bg-green-500 px-8 py-4 mb-4 transform rotate-3"
          >
            <span className="text-black font-black text-4xl">10X</span>
          </motion.div>

          <h1 className="text-5xl font-black text-white mb-3 leading-tight">
            THINK<br />
            BIGGER!
          </h1>

          <p className="text-green-400 text-xl font-bold uppercase tracking-wide">
            It's not about doing more,<br />
            it's about 10X MORE
          </p>
        </motion.div>

        {/* THE OLD THINKING */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-red-600/30 border-4 border-red-600 p-5"
        >
          <div className="text-red-400 font-black text-xl mb-3 uppercase">
            ❌ Small Thinking
          </div>
          <div className="space-y-2 text-white font-bold">
            <div>• Hire 1-2 freelancers</div>
            <div>• Spend $5K-10K/month</div>
            <div>• Hope they're available</div>
            <div>• Pray for good results</div>
          </div>
          <div className="mt-3 text-red-300 font-black text-2xl">
            = AVERAGE RESULTS
          </div>
        </motion.div>

        {/* THE 10X THINKING */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-green-500 p-6 border-4 border-green-300 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />

          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Rocket className="w-10 h-10 text-black mr-3" />
              </motion.div>
              <span className="text-black font-black text-2xl uppercase">
                ✓ 10X Thinking
              </span>
            </div>

            <div className="space-y-2 text-black font-bold text-lg mb-4">
              <div>• 6 FULL AI SPECIALISTS</div>
              <div>• 24/7 AVAILABILITY</div>
              <div>• UNLIMITED OUTPUT</div>
              <div>• CONSISTENT EXCELLENCE</div>
            </div>

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="bg-black p-4 text-center"
            >
              <div className="text-green-400 text-sm font-bold mb-1">ONLY</div>
              <div className="text-white font-black text-5xl">$29.99</div>
              <div className="text-green-400 text-lg font-bold">/MONTH</div>
            </motion.div>
          </div>
        </motion.div>

        {/* THE MATH */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-black/80 border-4 border-green-500 p-5"
        >
          <div className="text-center mb-4">
            <div className="text-green-400 font-black text-2xl uppercase">
              Do The Math!
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 text-white font-black text-xl">
            <div className="text-center">
              <div className="text-red-400">$20,000</div>
              <div className="text-xs">Old way</div>
            </div>
            <div className="text-4xl text-green-400">→</div>
            <div className="text-center">
              <div className="text-green-400">$29.99</div>
              <div className="text-xs">Made way</div>
            </div>
          </div>

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-4 text-center"
          >
            <div className="text-green-400 font-black text-3xl">
              = 10X YOUR BUSINESS
            </div>
          </motion.div>
        </motion.div>

        {/* MASSIVE ACTION CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(34, 197, 94, 0.5)',
                '0 0 60px rgba(34, 197, 94, 1)',
                '0 0 20px rgba(34, 197, 94, 0.5)',
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-full py-6 bg-green-500 text-black font-black text-2xl uppercase"
          >
            Take Massive Action NOW!
          </motion.button>
          <p className="text-green-400 text-sm mt-3 font-bold uppercase">
            made.com • 10X YOUR OUTPUT
          </p>
        </motion.div>
      </div>
    </div>
  );
};
