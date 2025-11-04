import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Target } from 'lucide-react';

export const AlRiesPost: React.FC = () => {
  const laws = [
    { number: 1, law: 'The Law of Leadership', application: 'First AI Creative Team Platform' },
    { number: 2, law: 'The Law of Category', application: 'Own "AI Creative Teams" category' },
    { number: 3, law: 'The Law of Mind', application: 'First in mind = 6 specialists, $29.99' },
    { number: 4, law: 'The Law of Focus', application: 'One clear message: Creative busywork solved' },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 overflow-hidden">
      {/* Classic book texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #fff, #fff 2px, transparent 2px, transparent 4px)`
        }} />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Header - Classic marketing book style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <BookOpen className="w-16 h-16 text-red-500 mx-auto mb-4" />
          </motion.div>
          <div className="bg-red-600 inline-block px-6 py-2 mb-4">
            <span className="text-white font-bold text-lg uppercase tracking-wider">
              The 22 Immutable Laws
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Of Marketing<br />Applied to Made
          </h1>
        </motion.div>

        {/* The Laws */}
        <div className="space-y-4">
          {laws.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border-l-4 border-red-500"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">{item.number}</span>
                </div>
                <div className="flex-1">
                  <div className="text-red-400 font-bold text-lg mb-1">{item.law}</div>
                  <div className="text-gray-300 text-sm leading-relaxed">{item.application}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Positioning Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-6 border-4 border-white/20"
        >
          <div className="text-center mb-4">
            <Award className="w-10 h-10 text-white mx-auto mb-2" />
            <h3 className="text-white font-bold text-xl uppercase tracking-wide">
              The Winning Position
            </h3>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-5 space-y-3">
            <div className="text-center">
              <div className="text-yellow-300 text-sm font-bold mb-1 uppercase">Category</div>
              <div className="text-white font-bold text-xl">AI Creative Teams</div>
            </div>

            <div className="border-t border-white/20 pt-3">
              <div className="text-center">
                <div className="text-yellow-300 text-sm font-bold mb-1 uppercase">The Ladder</div>
                <div className="space-y-2">
                  <div className="bg-yellow-500 text-black font-bold py-2 px-4 rounded">
                    #1 MADE - $29.99
                  </div>
                  <div className="bg-white/20 text-gray-400 py-2 px-4 rounded line-through">
                    #2 Traditional - $20,000
                  </div>
                  <div className="bg-white/20 text-gray-400 py-2 px-4 rounded line-through">
                    #3 Freelancers - Variable
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Classic principle statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/20 text-center"
        >
          <p className="text-white text-lg font-serif italic leading-relaxed">
            "It's better to be first in the mind<br />
            than first in the marketplace."
          </p>
          <div className="mt-3 text-red-400 font-bold">
            Made owns the AI Creative Team category.
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-red-600 text-white font-bold text-lg rounded uppercase tracking-wide shadow-2xl"
          >
            Win The Category
          </motion.button>
          <p className="text-gray-400 text-sm mt-4">made.com • Classic marketing principles</p>
        </motion.div>
      </div>
    </div>
  );
};
