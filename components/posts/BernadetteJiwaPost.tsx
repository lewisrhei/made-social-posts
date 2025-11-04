import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Sparkles, Target } from 'lucide-react';

export const BernadetteJiwaPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 overflow-hidden">
      {/* Soft, human-centered patterns */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + (i % 3) * 30}%`,
              top: `${10 + Math.floor(i / 3) * 20}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              delay: i * 0.3,
              repeat: Infinity,
            }}
          >
            <Heart className="w-6 h-6 text-rose-400" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Header - Empathy First */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-20 h-20 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
          >
            <Heart className="w-10 h-10 text-rose-600" fill="currentColor" />
          </motion.div>
          <h1 className="text-4xl font-serif text-slate-800 mb-4 leading-relaxed">
            What do you really want?
          </h1>
          <p className="text-rose-700 text-lg italic leading-relaxed px-4">
            Not more tools. Not more tasks.<br />
            You want time to create what matters.
          </p>
        </motion.div>

        {/* The Human Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg"
        >
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center italic"
            >
              I see you...
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p>
                Staying up late editing videos when you should be dreaming about your next big idea.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <p>
                Choosing between hiring a designer or a writer, knowing you need both.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p>
                Feeling guilty for wanting help, for not being able to "do it all."
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-6 pt-6 border-t border-rose-200"
          >
            <p className="text-center text-slate-800 font-semibold">
              You deserve better than this.
            </p>
          </motion.div>
        </motion.div>

        {/* The Meaningful Solution */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="bg-gradient-to-br from-rose-400 to-purple-400 rounded-3xl p-6 shadow-2xl"
        >
          <div className="text-center mb-5">
            <Sparkles className="w-12 h-12 text-white mx-auto mb-3" />
            <h3 className="text-white text-2xl font-serif mb-2">
              What if it could be different?
            </h3>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 mb-4">
            <p className="text-white leading-relaxed text-center mb-4">
              Imagine waking up knowing all the busywork is handled.
              Your content writer, designer, video editor, social media manager, SEO specialist, and analyst -
              all working while you sleep.
            </p>

            <div className="grid grid-cols-2 gap-2">
              {[
                { emoji: '🌅', text: 'Mornings for creativity' },
                { emoji: '💭', text: 'Space to think' },
                { emoji: '✨', text: 'Ideas that matter' },
                { emoji: '🎯', text: 'Focus on vision' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.8 + idx * 0.1 }}
                  className="bg-white/30 rounded-xl p-3 text-center"
                >
                  <div className="text-2xl mb-1">{item.emoji}</div>
                  <div className="text-white text-xs font-semibold">{item.text}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-white rounded-2xl p-5 text-center"
          >
            <div className="text-rose-600 text-sm font-semibold mb-2">All of this, for</div>
            <div className="text-slate-900 font-bold text-4xl mb-2">$29.99</div>
            <div className="text-slate-600 text-sm">per month</div>
          </motion.div>
        </motion.div>

        {/* The Human Connection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 text-center"
        >
          <p className="text-slate-700 italic leading-relaxed mb-2">
            "This isn't about productivity.<br />
            It's about preserving what makes you human -<br />
            your creativity, your vision, your soul."
          </p>
          <div className="text-rose-600 font-semibold text-sm">
            — What Made is really for
          </div>
        </motion.div>

        {/* CTA - Gentle and meaningful */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-rose-500 to-purple-500 text-white font-semibold text-lg rounded-full shadow-xl"
          >
            Reclaim Your Creative Soul
          </motion.button>
          <p className="text-slate-600 text-sm mt-4 italic">
            made.com • Marketing with meaning
          </p>
        </motion.div>
      </div>
    </div>
  );
};
