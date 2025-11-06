import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FloatingDeviceTemplateProps {
  hook: string;
  voiceName: string;
  voicePersonality?: string;
  assets?: string[];
}

export const FloatingDeviceTemplate: React.FC<FloatingDeviceTemplateProps> = ({
  hook,
  voiceName,
  voicePersonality,
  assets = []
}) => {
  const displayAsset = assets[0] || '/product/lila/View All Claims/Expand.png';

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden flex items-center justify-center">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-8 h-full">
        {/* Hook text at top */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight">
            {hook}
          </h1>
        </motion.div>

        {/* Floating product screenshot with 3D effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateX: 0,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.4 },
            scale: { duration: 0.6, delay: 0.4 },
            rotateX: { duration: 0.6, delay: 0.4 },
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }
          }}
          className="relative w-full max-w-[320px] perspective-1000"
        >
          {/* Shadow */}
          <motion.div
            className="absolute inset-0 bg-black/40 rounded-2xl blur-2xl"
            animate={{
              scale: [1, 0.95, 1],
              opacity: [0.4, 0.3, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transform: 'translateY(20px)' }}
          />

          {/* Device frame */}
          <div className="relative rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl bg-black">
            <div className="aspect-[9/16] relative">
              <Image
                src={displayAsset}
                alt="Product screenshot"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Voice attribution at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-white/80 text-sm font-medium mt-8"
        >
          {voiceName}
        </motion.div>
      </div>

      {/* Subtle gradient overlay at edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 pointer-events-none" />
    </div>
  );
};
