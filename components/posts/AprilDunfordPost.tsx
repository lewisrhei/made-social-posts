import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Target, TrendingUp } from 'lucide-react';

export const AprilDunfordPost: React.FC = () => {
  const comparison = [
    { feature: 'Number of Specialists', traditional: '1-2', made: '6', winner: 'made' },
    { feature: 'Monthly Cost', traditional: '$8K-15K', made: '$29.99', winner: 'made' },
    { feature: 'Availability', traditional: '40hrs/week', made: '24/7', winner: 'made' },
    { feature: 'Setup Time', traditional: '2-4 weeks', made: '5 minutes', winner: 'made' },
    { feature: 'Quality Consistency', traditional: 'Variable', made: 'Always High', winner: 'made' },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block px-6 py-2 bg-yellow-500 mb-4">
            <span className="text-black font-bold text-sm uppercase tracking-wider">
              Category: AI Creative Teams
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Obviously Better
          </h1>
          <p className="text-purple-300 text-lg">
            A positioning comparison that speaks for itself
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-white/20">
            <div className="text-purple-300 font-semibold text-sm"></div>
            <div className="text-center">
              <div className="text-gray-400 font-semibold text-sm mb-2">Traditional</div>
              <XCircle className="w-8 h-8 text-red-400 mx-auto" />
            </div>
            <div className="text-center">
              <div className="text-green-400 font-semibold text-sm mb-2">Made</div>
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto" />
            </div>
          </div>

          {/* Table Rows */}
          <div className="space-y-3">
            {comparison.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="grid grid-cols-3 gap-4 items-center bg-white/5 p-3 rounded-lg"
              >
                <div className="text-white font-semibold text-sm">{row.feature}</div>
                <div className={`text-center font-bold ${row.winner === 'made' ? 'text-red-400' : 'text-white'}`}>
                  {row.traditional}
                </div>
                <div className={`text-center font-bold ${row.winner === 'made' ? 'text-green-400' : 'text-white'}`}>
                  {row.made}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Positioning Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6"
        >
          <div className="text-center mb-4">
            <Target className="w-10 h-10 text-black mx-auto mb-3" />
            <h3 className="text-black font-bold text-xl mb-3">Made's Market Position</h3>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 mb-4">
            <p className="text-black font-semibold leading-relaxed">
              For <span className="font-black">creators and entrepreneurs</span> who need a full creative team,
              Made is the <span className="font-black">AI creative platform</span> that provides
              6 specialists for <span className="font-black">$29.99/month</span>.
            </p>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4">
            <p className="text-black font-semibold leading-relaxed">
              Unlike <span className="font-black">traditional hiring</span> or <span className="font-black">freelancer platforms</span>,
              Made delivers <span className="font-black">instant availability</span>, <span className="font-black">consistent quality</span>,
              and <span className="font-black">99% cost savings</span>.
            </p>
          </div>
        </motion.div>

        {/* Winner Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block bg-green-500 text-black font-black text-3xl px-8 py-4 rounded-full mb-4"
          >
            CLEAR WINNER
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-purple-900 font-bold text-lg rounded-full shadow-2xl"
          >
            Position Your Brand with Made
          </motion.button>
          <p className="text-purple-300 text-sm mt-4">made.com • Obviously better positioning</p>
        </motion.div>
      </div>
    </div>
  );
};
