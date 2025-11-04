import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, DollarSign, Users, Clock, Zap } from 'lucide-react';

export const NeilPatelPost: React.FC = () => {
  const stats = [
    { value: '6', label: 'AI Specialists', icon: Users, color: '#FF6B35' },
    { value: '80%', label: 'Time Saved', icon: Clock, color: '#4ECDC4' },
    { value: '$29.99', label: 'Per Month', icon: DollarSign, color: '#95E1D3' },
    { value: '10x', label: 'Output Boost', icon: Zap, color: '#F38181' },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-blue-400"
            style={{ top: `${i * 5}%` }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
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
          <div className="inline-block px-4 py-2 bg-blue-500/30 rounded-full border border-blue-400 mb-4">
            <span className="text-blue-300 text-sm font-semibold">DATA-DRIVEN INSIGHTS</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            The Numbers Don't Lie
          </h1>
          <p className="text-blue-300 text-lg">ROI Analysis: Made vs Traditional Hiring</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                >
                  <Icon className="w-8 h-8 mb-3" style={{ color: stat.color }} />
                </motion.div>
                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Chart visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        >
          <div className="flex items-center mb-4">
            <BarChart3 className="w-6 h-6 text-blue-400 mr-2" />
            <span className="text-white font-semibold">Cost Comparison</span>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Traditional Team</span>
                <span className="text-red-400 font-bold">$15,000/mo</span>
              </div>
              <motion.div
                className="h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1 }}
              />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Made Platform</span>
                <span className="text-green-400 font-bold">$29.99/mo</span>
              </div>
              <motion.div
                className="h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '2%' }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <motion.span
              className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              99.8% Cost Reduction
            </motion.span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-full shadow-2xl"
          >
            View Full Analytics Report
          </motion.button>
          <p className="text-gray-400 text-sm mt-4">made.com • Data-backed growth</p>
        </motion.div>
      </div>
    </div>
  );
};
