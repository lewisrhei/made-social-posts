import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Star, Shield } from 'lucide-react';

export const DonaldMillerPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
      {/* Story path background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <motion.path
            d="M 50 100 Q 200 300 50 500 Q -100 700 50 900 Q 200 1100 50 1300"
            stroke="white"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Opening - The Problem */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="w-12 h-12 bg-red-500/30 rounded-full border-2 border-red-400 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">😰</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Every creator's nightmare...
          </h2>
          <p className="text-blue-200 text-lg leading-relaxed">
            Drowning in creative tasks.<br />
            No time for what matters.<br />
            Budget spiraling out of control.
          </p>
        </motion.div>

        {/* The Journey - Hero's Path */}
        <div className="space-y-6">
          {/* Stage 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-start"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 flex-1 border border-white/20">
              <div className="text-blue-300 text-sm font-semibold mb-1">THE PROBLEM</div>
              <p className="text-white">You need 6 specialists but can't afford the $20K/month</p>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="flex justify-center"
          >
            <ArrowRight className="w-6 h-6 text-purple-400 rotate-90" />
          </motion.div>

          {/* Stage 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-start"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 flex-1 border border-white/20">
              <div className="text-purple-300 text-sm font-semibold mb-1">THE GUIDE</div>
              <p className="text-white">Made enters with 6 AI specialists ready to help</p>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.1 }}
            className="flex justify-center"
          >
            <ArrowRight className="w-6 h-6 text-green-400 rotate-90" />
          </motion.div>

          {/* Stage 3 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-start"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div className="bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-lg rounded-xl p-4 flex-1 border-2 border-green-400">
              <div className="text-green-300 text-sm font-semibold mb-1">THE VICTORY</div>
              <p className="text-white font-bold">All creative work handled for $29.99/month</p>
            </div>
          </motion.div>
        </div>

        {/* The Transformation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 mb-4">
            <div className="text-slate-900 text-lg font-bold mb-2">
              Your Transformation Awaits
            </div>
            <div className="flex items-center justify-center space-x-8 text-slate-900">
              <div>
                <div className="text-3xl font-bold">$29.99</div>
                <div className="text-sm">per month</div>
              </div>
              <div className="text-2xl">→</div>
              <div>
                <div className="text-3xl font-bold">6</div>
                <div className="text-sm">AI specialists</div>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-purple-900 font-bold text-lg rounded-full shadow-2xl"
          >
            Begin Your Story
          </motion.button>
          <p className="text-blue-300 text-sm mt-4">made.com • Your guide to success</p>
        </motion.div>
      </div>
    </div>
  );
};
