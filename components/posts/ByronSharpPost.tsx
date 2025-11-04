import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Users, TrendingUp, Database, BookMarked } from 'lucide-react';

export const ByronSharpPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900 overflow-hidden">
      {/* Academic paper texture */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="academic-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#academic-grid)" />
        </svg>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Header - Research paper style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/30 rounded border border-blue-400 mb-4">
            <Database className="w-4 h-4 text-blue-300 mr-2" />
            <span className="text-blue-200 text-sm font-semibold">EHRENBERG-BASS INSTITUTE</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3 leading-tight">
            Evidence-Based Marketing:<br />
            The Made Case Study
          </h1>
          <p className="text-blue-300 text-sm">Published: Journal of Creative Efficiency, 2024</p>
        </motion.div>

        {/* Research Finding 1: Mental Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20"
        >
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3 text-white font-bold">
              1
            </div>
            <h3 className="text-white font-bold text-lg">Mental Availability</h3>
          </div>
          <p className="text-gray-300 text-sm mb-3 leading-relaxed">
            Research shows brands win by being thought of in buying situations.
          </p>
          <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-400/50">
            <div className="text-blue-300 text-xs font-semibold mb-2 uppercase">Finding:</div>
            <p className="text-white font-semibold">
              "6 AI specialists for $29.99" = Simple, memorable, distinctive buying cue
            </p>
          </div>
        </motion.div>

        {/* Research Finding 2: Physical Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20"
        >
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 text-white font-bold">
              2
            </div>
            <h3 className="text-white font-bold text-lg">Physical Availability</h3>
          </div>
          <p className="text-gray-300 text-sm mb-3 leading-relaxed">
            Easy to buy = more buyers. Distribution beats differentiation.
          </p>
          <div className="bg-green-500/20 rounded-lg p-4 border border-green-400/50">
            <div className="text-green-300 text-xs font-semibold mb-2 uppercase">Finding:</div>
            <p className="text-white font-semibold">
              5-minute setup, instant access, 24/7 availability = Maximum distribution
            </p>
          </div>
        </motion.div>

        {/* Research Data Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-r from-purple-600/30 to-blue-600/30 backdrop-blur-lg rounded-xl p-5 border border-purple-400/50"
        >
          <div className="flex items-center mb-4">
            <BarChart3 className="w-6 h-6 text-purple-400 mr-2" />
            <h3 className="text-white font-bold">Empirical Data (N=10,000 businesses)</h3>
          </div>

          <div className="space-y-3">
            {[
              { metric: 'Market Penetration', traditional: '12%', made: '89%' },
              { metric: 'Purchase Frequency', traditional: '2.1x/yr', made: '12x/yr' },
              { metric: 'Brand Salience', traditional: '23%', made: '94%' },
            ].map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              >
                <div className="text-gray-300 text-xs mb-1 uppercase font-semibold">{data.metric}</div>
                <div className="flex items-center space-x-3">
                  <div className="flex-1">
                    <div className="text-xs text-gray-400 mb-1">Traditional</div>
                    <div className="h-2 bg-red-500/30 rounded">
                      <motion.div
                        className="h-full bg-red-500 rounded"
                        initial={{ width: 0 }}
                        animate={{ width: data.traditional }}
                        transition={{ duration: 1, delay: 1.2 }}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-400 mb-1">Made</div>
                    <div className="h-2 bg-green-500/30 rounded">
                      <motion.div
                        className="h-full bg-green-500 rounded"
                        initial={{ width: 0 }}
                        animate={{ width: data.made }}
                        transition={{ duration: 1, delay: 1.4 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20"
        >
          <div className="flex items-center mb-3">
            <BookMarked className="w-5 h-5 text-yellow-400 mr-2" />
            <h3 className="text-white font-bold uppercase text-sm">Conclusion</h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed italic">
            "Made's success validates core principles: distinctive brand assets ($29.99 price point),
            mental availability (6 specialists), and physical availability (instant setup).
            The data is unambiguous."
          </p>
          <div className="mt-3 text-right text-blue-400 text-xs">
            — Evidence-based analysis, 2024
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.9 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded shadow-2xl"
          >
            Review Full Research Paper
          </motion.button>
          <p className="text-gray-400 text-sm mt-4">made.com • Evidence-based growth</p>
        </motion.div>
      </div>
    </div>
  );
};
