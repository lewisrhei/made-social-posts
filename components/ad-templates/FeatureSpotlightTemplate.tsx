import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

interface FeatureSpotlightTemplateProps {
  hook: string;
  voiceName: string;
  voicePersonality?: string;
  assets?: string[];
}

export const FeatureSpotlightTemplate: React.FC<FeatureSpotlightTemplateProps> = ({
  hook,
  voiceName,
  voicePersonality,
  assets = []
}) => {
  // Use uploaded asset or default
  const featureImage = assets.length > 0 ? assets[0] : '/product/lila/Find Popular Reposts/See more.png';

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/20" />

      {/* Animated accent lines */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"
        animate={{ x: ['100%', '-100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 flex items-center justify-between"
        >
          <Image
            src="/made-logo-horizontal.svg"
            alt="Made"
            width={70}
            height={20}
            className="opacity-75"
          />
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
          </motion.div>
        </motion.div>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center px-6 space-y-6">
          {/* Hook with accent */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
              <h1 className={`${hook.length > 50 ? 'text-2xl' : 'text-3xl'} font-black text-white leading-tight`}>
                {hook}
              </h1>
            </div>
          </motion.div>

          {/* Feature screenshot with animated border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            {/* Animated glow effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Screenshot container */}
            <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-2xl">
              <img
                src={featureImage}
                alt="Feature showcase"
                className="w-full h-auto"
              />

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
              />
            </div>
          </motion.div>

          {/* Feature highlight badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center gap-2 self-start px-4 py-2 bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-full border border-purple-500/50"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-xs font-semibold uppercase tracking-wide">
              Powered by AI
            </span>
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="p-6 space-y-2"
        >
          <div className="text-center">
            <div className="text-white/40 text-[10px] uppercase tracking-widest mb-2">
              Your Complete Creative Team
            </div>
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
              <span className="text-white font-bold text-sm">getmade.ai</span>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-white/70 text-xs">Starting $29.99/mo</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};
