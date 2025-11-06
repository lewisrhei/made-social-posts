import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ZoomFocusTemplateProps {
  hook: string;
  voiceName: string;
  voicePersonality?: string;
  assets?: string[];
}

export const ZoomFocusTemplate: React.FC<ZoomFocusTemplateProps> = ({
  hook,
  voiceName,
  voicePersonality,
  assets = []
}) => {
  const displayAsset = assets[0] || '/product/lila/View All Claims/Expand.png';
  const [showZoom, setShowZoom] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowZoom(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Main product screenshot */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <Image
          src={displayAsset}
          alt="Product screenshot"
          fill
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Animated zoom circle */}
      {showZoom && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '280px',
            height: '280px'
          }}
        >
          {/* Glowing ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(139, 92, 246, 0.7)',
                '0 0 0 20px rgba(139, 92, 246, 0)',
                '0 0 0 0 rgba(139, 92, 246, 0)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />

          {/* Zoomed area */}
          <motion.div
            animate={{ rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl"
          >
            <div className="absolute inset-0 scale-150">
              <Image
                src={displayAsset}
                alt="Zoomed product detail"
                fill
                className="object-cover"
                style={{ objectPosition: '50% 40%' }}
              />
            </div>

            {/* Bright overlay to highlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent" />
          </motion.div>

          {/* Pointing arrow */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -right-12 top-1/2 -translate-y-1/2"
          >
            <motion.svg
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className="text-purple-500"
            >
              <path
                d="M10 20 L30 20 M30 20 L24 14 M30 20 L24 26"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      )}

      {/* Hook text at top */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative z-20 pt-16 px-8 text-center"
      >
        <div className="inline-block px-6 py-3 bg-black/60 backdrop-blur-md rounded-2xl border border-white/20">
          <h1 className="text-white text-3xl font-black leading-tight">
            {hook}
          </h1>
        </div>
      </motion.div>

      {/* Feature callout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 text-center"
      >
        <div className="px-8 py-4 bg-purple-600 rounded-2xl shadow-2xl">
          <div className="text-white text-lg font-bold mb-1">See the details</div>
          <div className="text-purple-100 text-sm">Every pixel matters</div>
        </div>
      </motion.div>

      {/* Voice attribution */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="text-white/60 text-xs font-medium uppercase tracking-wider">
          {voiceName}
        </div>
      </motion.div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
    </div>
  );
};
