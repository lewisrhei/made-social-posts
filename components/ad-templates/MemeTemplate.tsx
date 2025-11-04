import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MemeTemplateProps {
  hook: string;
  voiceName: string;
  painPoint?: string;
}

const AGENT_IMAGES = [
  '/agents/Amie_Transparent.png',
  '/agents/Enzo_Transparent.png',
  '/agents/Lila_Transparent.png',
  '/agents/Milo_Transparent.png',
  '/agents/Remi_Transparent.png',
  '/agents/Zara_Transparent.png',
];

export const MemeTemplate: React.FC<MemeTemplateProps> = ({
  hook,
  voiceName,
  painPoint
}) => {
  // TWO agents with clear emotional narrative
  const [stressedAgent, happyAgent] = React.useMemo(() => {
    const shuffled = [...AGENT_IMAGES].sort(() => Math.random() - 0.5);
    return [shuffled[0], shuffled[1]];
  }, []);

  return (
    <div className="relative w-full h-full bg-white overflow-hidden">
      {/* Made logo watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute top-4 left-4 z-30"
      >
        <Image
          src="/made-logo-horizontal.svg"
          alt="Made"
          width={65}
          height={19}
          className="opacity-30"
        />
      </motion.div>

      {/* Meme split - classic format */}
      <div className="h-full flex flex-col">
        {/* TOP: BEFORE (Stressed) */}
        <div className="flex-1 relative bg-gradient-to-br from-red-100 via-orange-50 to-red-50 flex items-center justify-center border-b-[6px] border-black overflow-hidden">
          {/* Stressed agent - grayscale, dramatic */}
          <div className="absolute inset-0 flex items-center justify-center opacity-15">
            <div className="relative w-[400px] h-[400px]">
              <Image
                src={stressedAgent}
                alt="Stressed"
                fill
                className="object-contain grayscale"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-center px-8 space-y-4"
          >
            <div className="text-red-600 text-xs font-black uppercase tracking-widest">
              Me trying to...
            </div>
            <div className="text-gray-900 text-3xl font-black leading-tight">
              {painPoint || 'Edit videos at 2am while managing comments and brainstorming ideas'}
            </div>
            <motion.div
              animate={{ rotate: [0, -8, 8, -8, 0] }}
              transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 2 }}
              className="text-7xl"
            >
              😵‍💫
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM: AFTER (Happy) */}
        <div className="flex-1 relative bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-50 flex items-center justify-center overflow-hidden">
          {/* Happy agent - colorful, victorious */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="relative w-[450px] h-[450px]">
              <Image
                src={happyAgent}
                alt="Happy"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative z-10 text-center px-8 space-y-4"
          >
            <div className="text-emerald-600 text-xs font-black uppercase tracking-widest">
              Me after discovering...
            </div>
            <div className="text-gray-900 text-3xl font-black leading-tight">
              {hook}
            </div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-7xl"
            >
              😎
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="pt-3"
            >
              <button className="px-7 py-3 bg-gray-900 text-white font-bold text-sm rounded-full shadow-xl hover:scale-105 transition-transform">
                Same 👉 made.com
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-3 right-4 text-gray-600 text-[10px] font-bold"
      >
        @made • $29.99/mo
      </motion.div>
    </div>
  );
};
