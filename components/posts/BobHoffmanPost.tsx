import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, DollarSign, TrendingDown, Eye } from 'lucide-react';

export const BobHoffmanPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
      {/* Newspaper-style background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 30px)',
        }} />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Header - Skeptical Style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Eye className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          </motion.div>
          <div className="bg-yellow-500 inline-block px-6 py-2 mb-4">
            <span className="text-black font-bold text-sm uppercase tracking-wider">
              The Ad Contrarian
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 leading-tight">
            Let's Talk About<br />
            The AI Bullshit
          </h1>
          <p className="text-gray-400 text-lg">
            (And why Made is actually different)
          </p>
        </motion.div>

        {/* The Industry BS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-red-900/30 border-l-4 border-red-600 p-5 rounded-lg"
        >
          <div className="flex items-center mb-4">
            <AlertCircle className="w-6 h-6 text-red-500 mr-3" />
            <h3 className="text-red-400 font-bold text-lg uppercase">
              What The Industry Wants You To Believe:
            </h3>
          </div>

          <div className="space-y-3 text-gray-300">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-black/30 p-3 rounded italic"
            >
              "AI will revolutionize everything!" (Sure it will.)
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="bg-black/30 p-3 rounded italic"
            >
              "You need our $500/month SaaS!" (Of course you do.)
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="bg-black/30 p-3 rounded italic"
            >
              "Hire 6 specialists for $50K/month!" (Good luck with that.)
            </motion.div>
          </div>

          <div className="mt-4 pt-4 border-t border-red-600">
            <p className="text-red-400 font-bold text-center">
              I've been in this business 50 years. It's all hype.
            </p>
          </div>
        </motion.div>

        {/* The Actual Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-gray-600"
        >
          <h3 className="text-yellow-400 font-bold text-lg mb-4 uppercase text-center">
            But Here Are The Actual Facts:
          </h3>

          <div className="space-y-4">
            <div className="bg-black/50 rounded-lg p-4">
              <div className="text-gray-400 text-sm mb-2">Average cost for creative team:</div>
              <div className="flex items-center justify-between">
                <TrendingDown className="w-6 h-6 text-red-500" />
                <span className="text-red-400 font-bold text-2xl">$20,000 - $50,000/mo</span>
              </div>
              <div className="text-gray-500 text-xs mt-2">*Plus benefits, overhead, management time</div>
            </div>

            <div className="bg-black/50 rounded-lg p-4">
              <div className="text-gray-400 text-sm mb-2">Freelancer platforms:</div>
              <div className="text-yellow-500 font-bold">
                Variable quality, unreliable timing, coordination nightmare
              </div>
            </div>

            <div className="bg-black/50 rounded-lg p-4">
              <div className="text-gray-400 text-sm mb-2">DIY approach:</div>
              <div className="text-yellow-500 font-bold">
                40+ hours/week on tasks you hate
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Skeptic's Verdict */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="bg-gradient-to-r from-green-700 to-emerald-700 rounded-xl p-6 border-2 border-green-400"
        >
          <div className="text-center mb-4">
            <DollarSign className="w-10 h-10 text-green-300 mx-auto mb-2" />
            <h3 className="text-white font-bold text-xl uppercase">
              Made's Actual Value Proposition
            </h3>
            <div className="text-green-300 text-sm mt-1">(And I hate admitting this works)</div>
          </div>

          <div className="bg-black/30 rounded-lg p-5 mb-4">
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                'Content Writer',
                'Graphic Designer',
                'Social Manager',
                'Video Editor',
                'SEO Specialist',
                'Data Analyst',
              ].map((role, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.6 + idx * 0.05 }}
                  className="bg-green-500/30 rounded py-2 text-center text-green-200 text-sm font-semibold"
                >
                  ✓ {role}
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <div className="text-gray-400 text-sm mb-1">Real cost:</div>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-green-400 font-black text-5xl mb-2"
              >
                $29.99
              </motion.div>
              <div className="text-green-300 text-lg font-semibold">per month</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-white text-center font-semibold leading-relaxed">
              I spent 50 years fighting BS. This isn't BS.<br />
              It's simple economics that actually work.
            </p>
          </div>
        </motion.div>

        {/* The Honest Assessment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="bg-yellow-500/20 border-2 border-yellow-500 rounded-lg p-5"
        >
          <p className="text-yellow-300 font-bold text-center text-lg italic leading-relaxed">
            "Look, I'm the last person to endorse anything.<br />
            But the math here is undeniable.<br />
            Sometimes, rarely, something actually delivers."
          </p>
          <div className="text-gray-400 text-center mt-3 text-sm">
            — The Ad Contrarian's rare endorsement
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.3 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded shadow-2xl"
          >
            See The Truth For Yourself
          </motion.button>
          <p className="text-gray-400 text-sm mt-4">
            made.com • Finally, something that's not bullshit
          </p>
        </motion.div>
      </div>
    </div>
  );
};
