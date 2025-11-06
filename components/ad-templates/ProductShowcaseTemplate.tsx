import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ProductShowcaseTemplateProps {
  hook: string;
  voiceName: string;
  voicePersonality?: string;
  assets?: string[];
}

export const ProductShowcaseTemplate: React.FC<ProductShowcaseTemplateProps> = ({
  hook,
  voiceName,
  voicePersonality,
  assets = []
}) => {
  // Use uploaded assets or default to Lila screenshots
  const displayAssets = assets.length > 0 ? assets : [
    '/product/lila/Find Popular Reposts/See more.png',
    '/product/lila/Rank My Reuploders/See more.png',
    '/product/lila/View All Claims/Expand.png'
  ];

  const [currentAssetIndex, setCurrentAssetIndex] = React.useState(0);

  // Auto-cycle through assets
  React.useEffect(() => {
    if (displayAssets.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentAssetIndex((prev) => (prev + 1) % displayAssets.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [displayAssets.length]);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 h-full flex flex-col">
        {/* Top section with branding */}
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
            className="opacity-80"
          />
        </motion.div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-8">
          {/* Hook text */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${hook.length > 50 ? 'text-3xl' : 'text-4xl'} font-black text-white text-center leading-tight mb-8 max-w-[300px]`}
          >
            {hook}
          </motion.h1>

          {/* Product screenshot showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentAssetIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img
                  src={displayAssets[currentAssetIndex]}
                  alt="Product screenshot"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Screenshot overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Asset indicators */}
          {displayAssets.length > 1 && (
            <div className="flex gap-1.5 mt-4">
              {displayAssets.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === currentAssetIndex
                      ? 'w-6 bg-purple-500'
                      : 'w-1.5 bg-white/30'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="p-6 pt-0 space-y-3"
        >
          <div className="text-center text-white/50 text-xs uppercase tracking-widest">
            AI-Powered Creative Platform
          </div>
          <div className="flex items-center justify-center gap-3 px-5 py-3.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-lg">
            <span className="text-white font-bold text-base">getmade.ai</span>
            <div className="w-px h-4 bg-white/30" />
            <span className="text-white/80 text-sm">From $29.99</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 100%)'
      }} />
    </div>
  );
};
