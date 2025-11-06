import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface GradientOverlayProductTemplateProps {
  hook: string;
  voiceName: string;
  voicePersonality?: string;
  assets?: string[];
}

export const GradientOverlayProductTemplate: React.FC<GradientOverlayProductTemplateProps> = ({
  hook,
  voiceName,
  voicePersonality,
  assets = []
}) => {
  const displayAsset = assets[0] || '/product/lila/View All Claims/Expand.png';

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 80% 70%, #ec4899 0%, transparent 50%), radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 50%)',
            'radial-gradient(circle at 80% 40%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 30% 80%, #ec4899 0%, transparent 50%), radial-gradient(circle at 60% 30%, #3b82f6 0%, transparent 50%)',
            'radial-gradient(circle at 40% 70%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 70% 20%, #ec4899 0%, transparent 50%), radial-gradient(circle at 20% 60%, #3b82f6 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 80% 70%, #ec4899 0%, transparent 50%), radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-between p-8 py-20">
        {/* Hook at top */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-white text-5xl font-black leading-tight tracking-tight">
            {hook}
          </h1>
        </motion.div>

        {/* Product screenshot with gradient overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-full max-w-[350px]"
        >
          {/* Glowing gradient border effect */}
          <motion.div
            className="absolute -inset-1 rounded-3xl opacity-75 blur-xl"
            animate={{
              background: [
                'linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6)',
                'linear-gradient(90deg, #ec4899, #3b82f6, #8b5cf6)',
                'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
                'linear-gradient(180deg, #8b5cf6, #ec4899, #3b82f6)',
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Screenshot container */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-white/10">
            <div className="aspect-[9/16] relative">
              <Image
                src={displayAsset}
                alt="Product screenshot"
                fill
                className="object-cover"
              />

              {/* Gradient overlay on image */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, transparent 60%)',
                    'linear-gradient(225deg, rgba(236, 72, 153, 0.3) 0%, transparent 60%)',
                    'linear-gradient(315deg, rgba(59, 130, 246, 0.3) 0%, transparent 60%)',
                    'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, transparent 60%)',
                  ]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Voice attribution with accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="inline-block px-6 py-2 rounded-full"
            animate={{
              background: [
                'linear-gradient(90deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))',
                'linear-gradient(90deg, rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.3))',
                'linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))',
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span className="text-white font-bold text-sm">{voiceName}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
    </div>
  );
};
