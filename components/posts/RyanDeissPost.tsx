import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, DollarSign, Repeat, TrendingUp, Target } from 'lucide-react';

export const RyanDeissPost: React.FC = () => {
  const funnelStages = [
    { stage: 'Awareness', metric: 'Time Spent: 40hrs/week', color: '#667eea' },
    { stage: 'Consideration', metric: 'Cost: $15,000/mo', color: '#764ba2' },
    { stage: 'Decision', metric: 'Quality: Inconsistent', color: '#f093fb' },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Animated circles background */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-white/10"
            style={{
              width: `${(i + 1) * 100}px`,
              height: `${(i + 1) * 100}px`,
              left: '50%',
              top: '20%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/30 rounded-full border border-purple-400 mb-4">
            <span className="text-purple-200 text-sm font-semibold">VALUE OPTIMIZATION</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Your Customer Value<br />Optimization System
          </h1>
        </motion.div>

        {/* Old Funnel */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4"
          >
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-2">
                ✕
              </div>
              <span className="text-red-300 font-semibold text-lg">Old System</span>
            </div>
          </motion.div>

          <div className="space-y-3 mb-6">
            {funnelStages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="relative"
              >
                <div
                  className="rounded-lg p-4 backdrop-blur-lg border border-white/20 opacity-50"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <div className="text-white font-semibold mb-1">{item.stage}</div>
                  <div className="text-red-300 text-sm">{item.metric}</div>
                </div>
                {index < funnelStages.length - 1 && (
                  <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2">
                    <ArrowRight className="w-6 h-6 text-white/30 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* New Funnel with Made */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-4"
          >
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-2">
                ✓
              </div>
              <span className="text-green-300 font-semibold text-lg">Made System</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-lg rounded-2xl p-6 border-2 border-green-400/50"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Target className="w-8 h-8 text-green-400 mr-3" />
                <span className="text-white font-bold text-xl">6 AI Specialists</span>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Repeat className="w-6 h-6 text-green-400" />
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">5min</div>
                <div className="text-xs text-gray-300">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">$29.99</div>
                <div className="text-xs text-gray-300">Per Month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">24/7</div>
                <div className="text-xs text-gray-300">Available</div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-semibold">500% LTV Increase</span>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-lg rounded-full shadow-2xl flex items-center mx-auto"
          >
            Optimize Your Funnel Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
          <p className="text-gray-300 text-sm mt-4">made.com • Maximum customer value</p>
        </motion.div>
      </div>
    </div>
  );
};
