import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Sparkles, Users } from 'lucide-react';

export const AnnHandleyPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-pink-50 via-rose-100 to-orange-50 overflow-hidden">
      {/* Warm, friendly background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          >
            <Sparkles className="w-6 h-6 text-rose-400" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Header - Warm and personal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 bg-rose-400 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Heart className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-4xl font-serif text-slate-800 mb-3 leading-tight">
            Can we talk about<br />creative burnout?
          </h1>
          <p className="text-rose-600 text-lg italic">
            (Because it's real, and we get it)
          </p>
        </motion.div>

        {/* The Authentic Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-rose-200"
        >
          <div className="flex items-center mb-4">
            <Coffee className="w-5 h-5 text-amber-600 mr-2" />
            <span className="text-slate-700 font-semibold">Here's what I see every day:</span>
          </div>

          <div className="space-y-4 text-slate-700 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Talented creators spending their evenings wrestling with video edits instead of brainstorming their next big idea. 💔
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Small business owners choosing between a designer and a content writer because they can't afford both. 😔
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Entrepreneurs losing their creative spark to the grind of busywork. 😓
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-6 pt-6 border-t border-rose-200"
          >
            <p className="text-slate-700 font-medium text-center">
              What if there was a better way?
            </p>
          </motion.div>
        </motion.div>

        {/* The Warm Solution */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="bg-gradient-to-r from-rose-400 to-pink-500 rounded-3xl p-6 shadow-2xl"
        >
          <div className="text-center mb-4">
            <div className="text-white text-lg mb-2">
              Meet your new creative team ✨
            </div>
            <div className="flex items-center justify-center mb-3">
              <Users className="w-6 h-6 text-white mr-2" />
              <span className="text-white font-bold text-xl">6 AI Specialists</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { icon: '✍️', label: 'Content Writer' },
              { icon: '🎨', label: 'Designer' },
              { icon: '📱', label: 'Social Media' },
              { icon: '🎥', label: 'Video Editor' },
              { icon: '📊', label: 'SEO Expert' },
              { icon: '📈', label: 'Analyst' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.5 + index * 0.1 }}
                className="bg-white/30 backdrop-blur-sm rounded-xl p-3 text-center"
              >
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-white text-xs font-semibold">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
            <div className="text-white text-sm mb-1">All of this for...</div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl font-bold text-white mb-1"
            >
              $29.99
            </motion.div>
            <div className="text-white text-sm">per month (seriously!)</div>
          </div>
        </motion.div>

        {/* CTA - Conversational */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-slate-800 text-white font-semibold text-lg rounded-full shadow-xl"
          >
            Let's Chat About Made
          </motion.button>
          <p className="text-slate-600 text-sm mt-4 italic">
            made.com • Your creative partner, not just a tool
          </p>
        </motion.div>
      </div>
    </div>
  );
};
