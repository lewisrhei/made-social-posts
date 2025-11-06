import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface SplitScreenProductTemplateProps {
  hook: string;
  voiceName: string;
  voicePersonality?: string;
  assets?: string[];
}

export const SplitScreenProductTemplate: React.FC<SplitScreenProductTemplateProps> = ({
  hook,
  voiceName,
  voicePersonality,
  assets = []
}) => {
  // Use uploaded assets or defaults (minimum 2 for split screen)
  const displayAssets = assets.length >= 2 ? assets.slice(0, 2) : [
    '/product/lila/Find Popular Reposts/See more.png',
    '/product/lila/Rank My Reuploders/See more.png'
  ];

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-black to-purple-900/40" />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 pb-4"
        >
          <Image
            src="/made-logo-horizontal.svg"
            alt="Made"
            width={75}
            height={22}
            className="opacity-85"
          />
        </motion.div>

        {/* Hook */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="px-6 pb-4"
        >
          <h1 className={`${hook.length > 50 ? 'text-2xl' : 'text-3xl'} font-black text-white leading-tight max-w-[280px]`}>
            {hook}
          </h1>
        </motion.div>

        {/* Split screen product shots */}
        <div className="flex-1 px-6 pb-6 space-y-3">
          {/* First screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-xl">
              <img
                src={displayAssets[0]}
                alt="Feature 1"
                className="w-full h-auto"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Animated indicator */}
            <motion.div
              className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
              animate={{ scaleY: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Arrow connector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full"
            >
              <ArrowRight className="w-4 h-4 text-white rotate-90" />
            </motion.div>
          </motion.div>

          {/* Second screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative group"
          >
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-xl">
              <img
                src={displayAssets[1]}
                alt="Feature 2"
                className="w-full h-auto"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/0 via-pink-600/20 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Animated indicator */}
            <motion.div
              className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"
              animate={{ scaleY: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="p-6 pt-0 space-y-2"
        >
          <div className="text-center text-white/40 text-[10px] uppercase tracking-widest">
            Everything You Need to Create
          </div>
          <div className="flex items-center justify-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-xl border border-purple-500/30">
            <span className="text-white font-bold text-sm">getmade.ai</span>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-white/70 text-xs">From $29.99</span>
          </div>
        </motion.div>
      </div>

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>
    </div>
  );
};
