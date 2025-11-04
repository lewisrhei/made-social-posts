import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Search, BarChart2, CheckCircle, AlertCircle } from 'lucide-react';

export const RandFishkinPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-800 via-orange-900 to-slate-900 overflow-hidden">
      {/* Whiteboard texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Header - Whiteboard style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 bg-orange-500/30 rounded-lg border-2 border-orange-400 mb-4">
            <span className="text-orange-200 text-sm font-semibold uppercase tracking-wide">
              Transparent SEO Insights
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">
            Let's Talk About<br />The Real Cost of Content
          </h1>
        </motion.div>

        {/* The Honest Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-orange-400/50"
        >
          <div className="flex items-center mb-4">
            <AlertCircle className="w-6 h-6 text-orange-400 mr-2" />
            <span className="text-orange-300 font-semibold text-lg">The Reality</span>
          </div>

          <div className="space-y-3 mb-4">
            {[
              { label: 'Content Writer', cost: '$3,000-5,000/mo' },
              { label: 'SEO Specialist', cost: '$4,000-6,000/mo' },
              { label: 'Social Media Manager', cost: '$3,500-5,000/mo' },
              { label: 'Graphic Designer', cost: '$3,500-5,000/mo' },
              { label: 'Video Editor', cost: '$3,000-4,500/mo' },
              { label: 'Data Analyst', cost: '$4,000-6,000/mo' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex justify-between items-center text-white"
              >
                <span className="text-gray-300">{item.label}</span>
                <span className="font-mono font-bold text-red-400">{item.cost}</span>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-orange-400/30 pt-3 mt-3">
            <div className="flex justify-between items-center">
              <span className="text-white font-bold text-lg">Total Traditional Cost:</span>
              <span className="font-mono font-bold text-2xl text-red-400">$21K-31K/mo</span>
            </div>
          </div>
        </motion.div>

        {/* The Made Solution */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-6 border-2 border-green-400"
        >
          <div className="flex items-center mb-4">
            <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
            <span className="text-green-300 font-semibold text-lg">Made: All 6 Specialists</span>
          </div>

          <div className="text-center mb-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl font-bold text-white mb-2"
            >
              $29.99
            </motion.div>
            <div className="text-green-300 text-xl font-semibold">/month</div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {['SEO', 'Content', 'Social', 'Design', 'Video', 'Analytics'].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.05 }}
                className="bg-green-500/20 rounded-lg p-2 text-center"
              >
                <span className="text-green-300 text-sm font-semibold">{skill}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-4 text-center"
          >
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full">
              <span className="font-bold text-slate-900">99.9% cost savings</span>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg rounded-full shadow-2xl"
          >
            See The Full Breakdown
          </motion.button>
          <p className="text-gray-400 text-sm mt-4">made.com • No BS, just data</p>
        </motion.div>
      </div>
    </div>
  );
};
