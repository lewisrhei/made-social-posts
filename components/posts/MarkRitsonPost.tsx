import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, XCircle, CheckCircle, TrendingDown, TrendingUp } from 'lucide-react';

export const MarkRitsonPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-red-900 via-black to-red-950 overflow-hidden">
      {/* Contrarian warning stripes */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-8 bg-red-600 transform -rotate-12"
            style={{ top: `${i * 7}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Header - Blunt and Direct */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            className="inline-block"
          >
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          </motion.div>
          <div className="bg-red-600 inline-block px-6 py-3 mb-4 transform -rotate-1">
            <span className="text-white font-black text-xl uppercase tracking-wider">
              STOP BEING AN IDIOT
            </span>
          </div>
          <h1 className="text-4xl font-black text-white mb-3 leading-tight uppercase">
            You're Doing<br />
            It Wrong
          </h1>
        </motion.div>

        {/* The BS Everyone Believes */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-red-600/20 border-4 border-red-600 p-5 rounded-lg"
        >
          <div className="flex items-center mb-4">
            <XCircle className="w-8 h-8 text-red-500 mr-3" />
            <h3 className="text-red-400 font-black text-xl uppercase">The Bullshit:</h3>
          </div>

          <div className="space-y-3">
            {[
              '"You need to hustle 24/7"',
              '"Hire a full team for $50K/month"',
              '"Do everything yourself to save money"',
              '"Good creative takes months"',
            ].map((bs, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="flex items-start"
              >
                <div className="text-red-500 font-black text-2xl mr-3">✗</div>
                <div className="text-white font-bold pt-1">{bs}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-5 pt-5 border-t-4 border-red-600"
          >
            <p className="text-red-300 font-black text-center text-xl">
              ALL COMPLETE NONSENSE.
            </p>
          </motion.div>
        </motion.div>

        {/* The Reality Check */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="bg-white/10 backdrop-blur-lg border-4 border-green-500 p-5 rounded-lg"
        >
          <div className="flex items-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
            <h3 className="text-green-400 font-black text-xl uppercase">The Reality:</h3>
          </div>

          <div className="bg-green-500/20 rounded-lg p-4 mb-4">
            <div className="text-white font-bold text-lg mb-3 text-center">
              Made gives you 6 specialists
            </div>
            <div className="grid grid-cols-2 gap-2">
              {['Content', 'Design', 'Social', 'Video', 'SEO', 'Data'].map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.4 + idx * 0.05 }}
                  className="bg-green-400 text-black font-black text-sm py-2 text-center rounded"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-black/50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-400 text-sm mb-1">Traditional Nonsense:</div>
                <div className="flex items-center">
                  <TrendingDown className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-red-400 font-black text-2xl line-through">$20,000/mo</span>
                </div>
              </div>
              <div className="text-4xl font-black text-white">→</div>
              <div>
                <div className="text-gray-400 text-sm mb-1">Made Reality:</div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-green-400 font-black text-2xl">$29.99/mo</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Contrarian Truth */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="bg-red-600 p-6 rounded-lg border-4 border-white"
        >
          <h3 className="text-white font-black text-2xl mb-4 text-center uppercase">
            The Truth No One Tells You
          </h3>
          <p className="text-white font-bold text-lg leading-relaxed text-center mb-4">
            You don't need to be a martyr. You don't need to spend a fortune.
            You need to stop listening to morons and make a smart decision.
          </p>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="bg-white text-red-600 font-black text-4xl py-4 text-center rounded"
          >
            $29.99
          </motion.div>
          <div className="text-white text-center mt-3 font-bold">
            That's it. Stop overthinking.
          </div>
        </motion.div>

        {/* No-BS Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.1 }}
          className="bg-black/60 backdrop-blur-lg rounded-lg p-5 border-2 border-red-500"
        >
          <p className="text-red-400 font-black text-center text-lg italic">
            "Most marketing advice is terrible.<br />
            Made is the rare exception that actually works."
          </p>
          <div className="text-white text-center mt-2 text-sm">
            — A rare moment of praise
          </div>
        </motion.div>

        {/* CTA - Direct */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-5 bg-red-600 text-white font-black text-xl uppercase tracking-wider border-4 border-white"
          >
            Stop Being Stupid. Get Made.
          </motion.button>
          <p className="text-red-400 text-sm mt-4 font-bold uppercase">
            made.com • No-BS marketing
          </p>
        </motion.div>
      </div>
    </div>
  );
};
