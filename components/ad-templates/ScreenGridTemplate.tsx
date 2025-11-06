import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ScreenGridTemplateProps {
  hook: string;
  voiceName: string;
  voicePersonality?: string;
  assets?: string[];
}

export const ScreenGridTemplate: React.FC<ScreenGridTemplateProps> = ({
  hook,
  voiceName,
  voicePersonality,
  assets = []
}) => {
  // Use up to 4 assets for the grid
  const displayAssets = assets.length > 0
    ? assets.slice(0, 4)
    : [
        '/product/lila/View All Claims/Expand.png',
        '/product/lila/Find Popular Reposts/See more.png',
        '/product/lila/Rank My Reuploders/See more.png',
        '/product/lila/View All Claims/Expand.png'
      ];

  // Ensure we have 4 items (repeat last if needed)
  while (displayAssets.length < 4) {
    displayAssets.push(displayAssets[displayAssets.length - 1]);
  }

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col p-8 py-16">
        {/* Hook at top */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight mb-3">
            {hook}
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </motion.div>

        {/* Grid of screenshots */}
        <div className="flex-1 grid grid-cols-2 gap-4 max-w-md mx-auto">
          {displayAssets.map((asset, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                delay: 0.2 + index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-300" />

              {/* Screenshot container */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black shadow-xl">
                <div className="aspect-[9/16] relative">
                  <Image
                    src={asset}
                    alt={`Screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Index number */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Voice attribution at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
            <span className="text-white/80 text-sm font-medium">{voiceName}</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none" />
    </div>
  );
};
