import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Target, Award, Zap } from 'lucide-react';

export const AlexHormoziPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-red-950 to-black overflow-hidden">
      {/* Clean, professional background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Header - Professional */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block px-6 py-2 bg-red-600 mb-4">
            <span className="text-white text-sm font-bold uppercase tracking-wider">
              $100M Offer Framework
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 leading-tight">
            The Grand Slam Offer<br />
            You've Been Missing
          </h1>
        </motion.div>

        {/* The Value Equation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
        >
          <div className="text-center mb-4">
            <span className="text-red-400 font-bold text-lg uppercase">Value Equation</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between bg-green-500/20 p-3 rounded-lg border border-green-500/50">
              <span className="text-green-300 font-semibold">Dream Outcome</span>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-white font-bold">MAXIMIZE</span>
              </div>
            </div>

            <div className="flex items-center justify-between bg-green-500/20 p-3 rounded-lg border border-green-500/50">
              <span className="text-green-300 font-semibold">Perceived Likelihood</span>
              <div className="flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-white font-bold">MAXIMIZE</span>
              </div>
            </div>

            <div className="text-center text-2xl font-bold text-white py-2">÷</div>

            <div className="flex items-center justify-between bg-red-500/20 p-3 rounded-lg border border-red-500/50">
              <span className="text-red-300 font-semibold">Time Delay</span>
              <div className="flex items-center">
                <Zap className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-white font-bold">MINIMIZE</span>
              </div>
            </div>

            <div className="flex items-center justify-between bg-red-500/20 p-3 rounded-lg border border-red-500/50">
              <span className="text-red-300 font-semibold">Effort & Sacrifice</span>
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-white font-bold">MINIMIZE</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Value Stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-red-600 to-orange-600 rounded-xl p-6"
        >
          <div className="text-center mb-4">
            <Award className="w-12 h-12 text-white mx-auto mb-2" />
            <span className="text-white font-bold text-xl uppercase">Made's Value Stack</span>
          </div>

          <div className="space-y-2 mb-4">
            {[
              { item: 'Content Writer Specialist', value: '$4,000' },
              { item: 'Graphic Designer', value: '$4,000' },
              { item: 'Social Media Manager', value: '$3,500' },
              { item: 'Video Editor', value: '$3,500' },
              { item: 'SEO Specialist', value: '$4,500' },
              { item: 'Data Analyst', value: '$4,500' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                className="flex items-center justify-between bg-white/20 backdrop-blur-sm px-4 py-2 rounded"
              >
                <span className="text-white font-semibold text-sm">{service.item}</span>
                <span className="text-yellow-300 font-bold">{service.value}</span>
              </motion.div>
            ))}
          </div>

          <div className="border-t-2 border-white/30 pt-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-bold">Total Value:</span>
              <span className="text-yellow-300 font-bold text-2xl">$24,000/mo</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white font-bold">You Pay:</span>
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-green-400 font-black text-4xl"
              >
                $29.99/mo
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* ROI Calculation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-black/60 backdrop-blur-lg rounded-xl p-5 border-2 border-green-500"
        >
          <div className="text-center">
            <div className="text-green-400 font-bold text-sm mb-2 uppercase">Your ROI</div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white font-black text-5xl mb-2"
            >
              79,926%
            </motion.div>
            <div className="text-gray-300 text-sm">
              Save $23,970.01 every single month
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-5 bg-red-600 text-white font-bold text-xl uppercase tracking-wide"
          >
            Claim This Offer
          </motion.button>
          <p className="text-gray-400 text-sm mt-3 font-semibold">
            made.com • No-brainer offer
          </p>
        </motion.div>
      </div>
    </div>
  );
};
