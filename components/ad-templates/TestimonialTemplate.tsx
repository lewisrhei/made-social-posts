import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

interface TestimonialTemplateProps {
  hook: string;
  voiceName: string;
  narrative?: string;
}

const AGENT_IMAGES = [
  '/agents/Amie_Transparent.png',
  '/agents/Enzo_Transparent.png',
  '/agents/Lila_Transparent.png',
  '/agents/Milo_Transparent.png',
  '/agents/Remi_Transparent.png',
  '/agents/Zara_Transparent.png',
];

export const TestimonialTemplate: React.FC<TestimonialTemplateProps> = ({
  hook,
  voiceName,
  narrative
}) => {
  // Select one agent for the testimonial
  const selectedAgent = React.useMemo(() => {
    return AGENT_IMAGES[Math.floor(Math.random() * AGENT_IMAGES.length)];
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden">
      {/* Ambient background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3), transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.3), transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3), transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Header with Made logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <Image
            src="/made-logo-horizontal.svg"
            alt="Made"
            width={70}
            height={20}
            className="opacity-80"
          />
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 space-y-6"
        >
          {/* Quote icon */}
          <Quote className="w-12 h-12 text-indigo-400/50" />

          {/* Testimonial text */}
          <div className="space-y-4">
            <p className="text-white text-2xl font-medium leading-relaxed">
              "{hook}"
            </p>

            {narrative && (
              <p className="text-white/70 text-base leading-relaxed">
                {narrative}
              </p>
            )}
          </div>

          {/* Creator profile with agent avatar */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center"
            >
              <Image
                src={selectedAgent}
                alt={voiceName}
                width={56}
                height={56}
                className="object-cover"
              />
            </motion.div>
            <div>
              <div className="text-white font-semibold">{voiceName}</div>
              <div className="text-white/60 text-sm">Content Creator • 500K+ followers</div>
            </div>
          </div>
        </motion.div>

        {/* Results metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-3 gap-3"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
            <div className="text-2xl font-bold text-emerald-400">6x</div>
            <div className="text-xs text-white/60">More Content</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
            <div className="text-2xl font-bold text-blue-400">80%</div>
            <div className="text-xs text-white/60">Time Saved</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
            <div className="text-2xl font-bold text-purple-400">$30</div>
            <div className="text-xs text-white/60">Per Month</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center space-y-3"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg rounded-xl"
          >
            Start Your Success Story
          </motion.button>
          <div className="text-white/40 text-xs">
            made.com • Join 10,000+ creators
          </div>
        </motion.div>
      </div>
    </div>
  );
};
