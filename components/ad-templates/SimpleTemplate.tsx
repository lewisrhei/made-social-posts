import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SimpleTemplateProps {
  hook: string;
  voiceName: string;
}

const AGENT_IMAGES = [
  '/agents/Amie_Transparent.png',
  '/agents/Enzo_Transparent.png',
  '/agents/Lila_Transparent.png',
  '/agents/Milo_Transparent.png',
  '/agents/Remi_Transparent.png',
  '/agents/Zara_Transparent.png',
];

export const SimpleTemplate: React.FC<SimpleTemplateProps> = ({
  hook,
  voiceName
}) => {
  // ONE agent as elegant watermark
  const watermarkAgent = React.useMemo(() => {
    return AGENT_IMAGES[Math.floor(Math.random() * AGENT_IMAGES.length)];
  }, []);

  return (
    <div className="relative w-full h-full bg-white overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Elegant gradient accent */}
      <div className="absolute top-0 right-0 w-full h-1/3 bg-gradient-to-b from-gray-50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-50 to-transparent" />

      {/* Large agent watermark - subtle, professional */}
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="relative w-full h-full">
          <Image
            src={watermarkAgent}
            alt="Made Agent"
            fill
            className="object-contain opacity-[0.08]"
            priority
          />
        </div>
      </motion.div>

      {/* Made logo - top left, minimal */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-8 z-20"
      >
        <Image
          src="/made-logo-horizontal.svg"
          alt="Made"
          width={85}
          height={25}
          className="opacity-40"
        />
      </motion.div>

      {/* Content - centered, minimalist */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center p-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-10 max-w-md"
        >
          {/* Hook - Large, Bold, Simple */}
          <h1 className="text-6xl font-black text-gray-900 leading-[1.05] tracking-tight">
            {hook}
          </h1>

          {/* Elegant divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-20 h-1 bg-gray-900 mx-auto"
          />

          {/* Voice attribution */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-500 text-lg font-medium tracking-wide"
          >
            {voiceName}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-4"
          >
            <button className="group relative px-10 py-5 bg-gray-900 text-white font-bold text-base rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Start Creating</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>

          {/* Made branding - minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="pt-6 space-y-2"
          >
            <div className="text-gray-900 text-base font-bold">made.com</div>
            <div className="text-gray-400 text-xs tracking-wider">Your creative dream team • $29.99/mo</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
