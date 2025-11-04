import React from 'react';
import { motion } from 'framer-motion';

export const SethGodinPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      {/* Simple dot pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-900 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center p-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-serif text-slate-800 leading-tight"
          >
            The work<br />you avoid<br />doing
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-1 bg-orange-600 mx-auto"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl text-slate-700 leading-relaxed max-w-md mx-auto font-light"
          >
            is the work<br />that needs doing most.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="pt-8"
          >
            <div className="inline-block bg-slate-800 text-white px-8 py-4 rounded-sm">
              <div className="text-sm uppercase tracking-wider mb-1">Made</div>
              <div className="text-2xl font-bold">$29.99/month</div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-slate-600 text-sm"
          >
            Six specialists. One tribe.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};
