import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface DynamicSplitTemplateProps {
  hook: string;
  voiceName: string;
  voicePersonality?: string;
}

const AGENT_VIDEOS = [
  {
    name: 'Amie',
    video: '/agents/Amie Hero_balanced_736x544.webm',
    gradient: 'from-orange-500 to-amber-600',
    darkGradient: 'from-orange-900 to-amber-900',
    accentColor: 'text-orange-400'
  },
  {
    name: 'Enzo',
    video: '/agents/Enzo Hero_balanced_736x544.webm',
    gradient: 'from-emerald-500 to-teal-600',
    darkGradient: 'from-emerald-900 to-teal-900',
    accentColor: 'text-emerald-400'
  },
  {
    name: 'Lila',
    video: '/agents/Lila Hero_balanced_736x544.webm',
    gradient: 'from-red-500 to-pink-600',
    darkGradient: 'from-red-900 to-pink-900',
    accentColor: 'text-red-400'
  },
  {
    name: 'Milo',
    video: '/agents/Milo Hero_balanced_736x544.webm',
    gradient: 'from-blue-500 to-indigo-600',
    darkGradient: 'from-blue-900 to-indigo-900',
    accentColor: 'text-blue-400'
  },
  {
    name: 'Remi',
    video: '/agents/Remi Hero_balanced_736x544.webm',
    gradient: 'from-purple-500 to-indigo-600',
    darkGradient: 'from-purple-900 to-indigo-900',
    accentColor: 'text-purple-400'
  },
  {
    name: 'Zara',
    video: '/agents/Zara Hero_balanced_736x544.webm',
    gradient: 'from-yellow-500 to-orange-600',
    darkGradient: 'from-yellow-900 to-orange-900',
    accentColor: 'text-yellow-400'
  },
];

export const DynamicSplitTemplate: React.FC<DynamicSplitTemplateProps> = ({
  hook,
  voiceName,
  voicePersonality
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const heroAgent = React.useMemo(() => {
    return AGENT_VIDEOS[Math.floor(Math.random() * AGENT_VIDEOS.length)];
  }, []);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log('Video autoplay:', err));
    }
  }, []);

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Diagonal split layout */}
      <div className="absolute inset-0">
        {/* Top left - colored section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={`absolute top-0 left-0 w-full h-[55%] bg-gradient-to-br ${heroAgent.gradient}`}
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
          }}
        />

        {/* Bottom right - dark section */}
        <div className={`absolute bottom-0 right-0 w-full h-[50%] bg-gradient-to-br ${heroAgent.darkGradient}`} />
      </div>

      {/* Agent video - positioned in transition zone */}
      <div className="absolute right-0 bottom-0 w-[320px] h-[55%] overflow-hidden z-10">
        <motion.div
          className="relative w-full h-full"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.3 }}
        >
          <video
            ref={videoRef}
            src={heroAgent.video}
            loop
            muted
            playsInline
            className="absolute right-[-40px] bottom-0 w-[400px] h-full object-cover object-left drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-between p-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/made-logo-horizontal.svg"
            alt="Made"
            width={85}
            height={25}
            className="opacity-90"
          />
        </motion.div>

        {/* Hook text - upper left area */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-24 left-8 max-w-[260px]"
        >
          <motion.h1
            className={`${hook.length > 50 ? 'text-4xl' : hook.length > 35 ? 'text-5xl' : 'text-6xl'} font-black text-white leading-[1.05] drop-shadow-2xl`}
            animate={{ opacity: [0.95, 1, 0.95] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {hook}
          </motion.h1>

          {/* Decorative element */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="h-1 w-20 bg-white rounded-full mt-6"
          />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="space-y-3"
        >
          <div className="text-white/70 text-xs uppercase tracking-widest text-center font-semibold">
            Your Creative Dream Team
          </div>
          <div className="flex items-center justify-center gap-3 px-6 py-4 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20">
            <span className="text-white font-bold text-lg">getmade.ai</span>
            <div className="w-px h-5 bg-white/30" />
            <span className="text-white/90 text-sm">Starting from $29.99</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
