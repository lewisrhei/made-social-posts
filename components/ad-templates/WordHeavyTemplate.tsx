import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface WordHeavyTemplateProps {
  hook: string;
  voiceName: string;
  voiceStyle?: string;
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

export const WordHeavyTemplate: React.FC<WordHeavyTemplateProps> = ({
  hook,
  voiceName,
  voiceStyle,
  narrative
}) => {
  // Split hook into words for animation
  const words = hook.split(' ');

  // Select random agent for visual interest
  const selectedAgent = React.useMemo(() => {
    return AGENT_IMAGES[Math.floor(Math.random() * AGENT_IMAGES.length)];
  }, []);

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Large agent image watermark */}
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 opacity-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src={selectedAgent}
          alt="Agent"
          width={320}
          height={320}
          className="object-contain"
        />
      </motion.div>

      {/* Made logo at top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-8 z-20"
      >
        <Image
          src="/made-logo-horizontal.svg"
          alt="Made"
          width={90}
          height={26}
          className="opacity-70"
        />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center p-10">
        {/* Main hook - large typography */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="text-7xl font-black text-white leading-tight uppercase">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="inline-block mr-4"
                style={{
                  color: index % 3 === 0 ? '#FFEE58' : index % 3 === 1 ? '#FFFFFF' : '#FF6B35'
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
          />

          {/* Narrative context */}
          {narrative && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-white/70 text-lg font-medium mt-6 leading-relaxed"
            >
              {narrative}
            </motion.p>
          )}
        </motion.div>

        {/* Attribution and CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 space-y-4"
        >
          <div className="text-yellow-400 text-xl font-bold uppercase tracking-widest">
            — {voiceName}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-yellow-400 text-black font-black text-lg uppercase rounded-none shadow-xl"
          >
            Start Creating
          </motion.button>

          <div className="text-white/40 text-sm">made.com • $29.99/mo</div>
        </motion.div>
      </div>
    </div>
  );
};
