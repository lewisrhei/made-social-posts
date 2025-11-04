import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users, Zap, ArrowRight } from 'lucide-react';

export const RussellBrunsonPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Funnel background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="funnel-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20,10 L80,10 L70,40 L30,40 Z" fill="white" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#funnel-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Header - ClickFunnels Style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-lg mb-4"
          >
            <span className="text-white font-black text-lg uppercase tracking-wider">
              The Value Ladder
            </span>
          </motion.div>
          <h1 className="text-5xl font-black text-white mb-3 leading-tight">
            From $24,000/mo<br />
            To $29.99/mo
          </h1>
          <p className="text-purple-300 text-xl font-bold">
            The PERFECT funnel for creative teams
          </p>
        </motion.div>

        {/* The Value Ladder */}
        <div className="space-y-3">
          {[
            { level: 'OLD WAY', value: 'Hire 6 people @ $4K each', cost: '$24,000/mo', color: 'from-red-600 to-red-700', bad: true },
            { level: 'BETTER', value: 'Mix of freelancers', cost: '$8,000-12,000/mo', color: 'from-orange-600 to-orange-700', bad: true },
            { level: 'GOOD', value: 'One AI tool per task', cost: '$300-500/mo', color: 'from-yellow-600 to-yellow-700', bad: true },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
              className={`bg-gradient-to-r ${step.color} rounded-xl p-4 border-2 border-white/20 opacity-50`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-red-200 text-sm font-bold uppercase mb-1">{step.level}</div>
                  <div className="text-white font-semibold">{step.value}</div>
                </div>
                <div className="text-right">
                  <div className="text-red-200 line-through text-2xl font-black">{step.cost}</div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Arrow Down */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ArrowRight className="w-12 h-12 text-green-400 rotate-90" />
            </motion.div>
          </motion.div>

          {/* The Made Solution - Value Bomb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 border-4 border-yellow-400 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
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
              <div className="text-center mb-4">
                <div className="inline-block bg-yellow-400 px-6 py-2 rounded-full mb-3 transform -rotate-2">
                  <span className="text-green-900 font-black text-xl uppercase">
                    BEST DEAL!
                  </span>
                </div>
                <h3 className="text-white font-black text-2xl uppercase mb-1">Made Platform</h3>
                <div className="text-green-900 font-bold">All 6 Specialists + Unlimited Work</div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {['Content', 'Design', 'Social', 'Video', 'SEO', 'Data'].map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, rotate: -10 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.3, delay: 1.3 + idx * 0.05 }}
                    className="bg-white text-green-700 font-black text-xs py-2 text-center rounded-lg"
                  >
                    ✓ {skill}
                  </motion.div>
                ))}
              </div>

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="bg-white rounded-xl p-5 text-center"
              >
                <div className="text-green-700 text-sm font-bold mb-2">INSANE VALUE:</div>
                <div className="text-green-900 font-black text-6xl mb-2">$29.99</div>
                <div className="text-green-700 font-bold text-xl">/month</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Value Stacking Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-purple-400"
        >
          <h3 className="text-center text-white font-black text-xl mb-4 uppercase">
            The Value Stack
          </h3>

          <div className="space-y-2">
            {[
              { item: 'AI Content Writer', value: '$4,000' },
              { item: 'AI Designer', value: '$4,000' },
              { item: 'AI Social Manager', value: '$3,500' },
              { item: 'AI Video Editor', value: '$3,500' },
              { item: 'AI SEO Specialist', value: '$4,500' },
              { item: 'AI Data Analyst', value: '$4,500' },
              { item: 'Unlimited Projects', value: 'PRICELESS' },
              { item: '24/7 Availability', value: 'PRICELESS' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.8 + idx * 0.05 }}
                className="flex justify-between items-center bg-white/10 px-4 py-2 rounded"
              >
                <span className="text-purple-200 font-semibold text-sm">{item.item}</span>
                <span className="text-yellow-400 font-bold">{item.value}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t-2 border-purple-400">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-bold">Total Value:</span>
              <span className="text-yellow-400 font-black text-2xl line-through">$24,000+</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white font-bold">Today's Price:</span>
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-green-400 font-black text-3xl"
              >
                $29.99
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* The Secret Formula */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.3 }}
          className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-5 text-center border-4 border-yellow-400"
        >
          <p className="text-white font-bold text-lg mb-2">
            "The best funnel is one that gives<br />insane value at every step."
          </p>
          <p className="text-yellow-300 font-black text-xl">
            Made = The Ultimate Value Ladder
          </p>
        </motion.div>

        {/* CTA - Funnel Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(234, 179, 8, 0.5)',
                '0 0 40px rgba(234, 179, 8, 0.8)',
                '0 0 20px rgba(234, 179, 8, 0.5)',
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-full py-6 bg-gradient-to-r from-orange-500 to-red-600 text-white font-black text-2xl uppercase rounded-full border-4 border-yellow-400"
          >
            Get Started Now! →
          </motion.button>
          <p className="text-purple-300 text-sm mt-3 font-bold">
            made.com • The perfect funnel for creators
          </p>
        </motion.div>
      </div>
    </div>
  );
};
