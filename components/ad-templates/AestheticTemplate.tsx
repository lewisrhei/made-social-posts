import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface AestheticTemplateProps {
  hook: string;
  voiceName: string;
  voicePersonality?: string;
  assets?: string[];
}

const AGENT_VIDEOS = [
  {
    name: 'Amie',
    video: '/agents/Amie Hero_balanced_736x544.webm',
    image: '/agents/Amie_Transparent.png',
    gradient: 'from-orange-500 via-orange-600 to-amber-700',
    accentColor: 'bg-orange-400/20'
  },
  {
    name: 'Enzo',
    video: '/agents/Enzo Hero_balanced_736x544.webm',
    image: '/agents/Enzo_Transparent.png',
    gradient: 'from-emerald-500 via-green-600 to-teal-700',
    accentColor: 'bg-emerald-400/20'
  },
  {
    name: 'Lila',
    video: '/agents/Lila Hero_balanced_736x544.webm',
    image: '/agents/Lila_Transparent.png',
    gradient: 'from-red-500 via-rose-600 to-pink-700',
    accentColor: 'bg-red-400/20'
  },
  {
    name: 'Milo',
    video: '/agents/Milo Hero_balanced_736x544.webm',
    image: '/agents/Milo_Transparent.png',
    gradient: 'from-blue-500 via-blue-600 to-indigo-700',
    accentColor: 'bg-blue-400/20'
  },
  {
    name: 'Remi',
    video: '/agents/Remi Hero_balanced_736x544.webm',
    image: '/agents/Remi_Transparent.png',
    gradient: 'from-purple-500 via-purple-600 to-indigo-700',
    accentColor: 'bg-purple-400/20'
  },
  {
    name: 'Zara',
    video: '/agents/Zara Hero_balanced_736x544.webm',
    image: '/agents/Zara_Transparent.png',
    gradient: 'from-yellow-500 via-amber-600 to-orange-700',
    accentColor: 'bg-yellow-400/20'
  },
];

export const AestheticTemplate: React.FC<AestheticTemplateProps> = ({
  hook,
  voiceName,
  voicePersonality,
  assets = []
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Select ONE agent as the STAR
  const heroAgent = React.useMemo(() => {
    return AGENT_VIDEOS[Math.floor(Math.random() * AGENT_VIDEOS.length)];
  }, []);

  // Auto-play video
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log('Video autoplay prevented:', err));
    }
  }, []);

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Premium gradient background - dynamically colored per agent */}
      <div className={`absolute inset-0 bg-gradient-to-br ${heroAgent.gradient}`} />

      {/* Subtle animated orbs for depth - matches agent color */}
      <motion.div
        className={`absolute top-1/4 right-0 w-80 h-80 ${heroAgent.accentColor} rounded-full blur-3xl`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Agent video - pushed to right side, showing left half, extends to bottom */}
      <div className="absolute right-[-100px] bottom-0 w-[420px] h-[70%] overflow-visible z-0">
        <motion.div
          className="relative w-full h-full"
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <video
            ref={videoRef}
            src={heroAgent.video}
            loop
            muted
            playsInline
            className="absolute right-0 bottom-0 w-[420px] h-full object-cover object-left drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.6))'
            }}
          />
        </motion.div>
      </div>

      {/* CONTENT LAYER - On top of agent */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Top bar - Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 pb-4 flex justify-between items-center"
        >
          <Image
            src="/made-logo-horizontal.svg"
            alt="Made"
            width={85}
            height={25}
            className="opacity-90"
          />
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" />
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>
        </motion.div>

        {/* Hook text - positioned in middle-upper area */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="px-8 py-6 max-w-[280px] flex-1 flex items-center"
        >
          <motion.h1
            className={`${hook.length > 50 ? 'text-4xl' : hook.length > 35 ? 'text-5xl' : 'text-6xl'} font-black text-white leading-[1.05] drop-shadow-2xl`}
            animate={{ opacity: [0.95, 1, 0.95] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {hook}
          </motion.h1>
        </motion.div>

        {/* Footer CTA - always visible at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="p-8 pt-4 space-y-3"
        >
          <div className="text-white/70 text-xs uppercase tracking-widest text-center">
            Your Creative Dream Team
          </div>
          <div className="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
            <span className="text-white font-bold text-lg">getmade.ai</span>
            <div className="w-px h-5 bg-white/30" />
            <span className="text-white/90 text-sm">Starting from $29.99</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle overall vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.25) 100%)'
      }} />
    </div>
  );
};
