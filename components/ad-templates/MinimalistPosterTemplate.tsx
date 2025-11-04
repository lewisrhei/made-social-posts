import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MinimalistPosterTemplateProps {
  hook: string;
  voiceName: string;
  voicePersonality?: string;
}

const AGENT_VIDEOS = [
  {
    name: 'Amie',
    video: '/agents/Amie Hero_balanced_736x544.webm',
    bgColor: 'bg-orange-50',
    accentColor: 'bg-orange-500',
    textColor: 'text-orange-900'
  },
  {
    name: 'Enzo',
    video: '/agents/Enzo Hero_balanced_736x544.webm',
    bgColor: 'bg-emerald-50',
    accentColor: 'bg-emerald-500',
    textColor: 'text-emerald-900'
  },
  {
    name: 'Lila',
    video: '/agents/Lila Hero_balanced_736x544.webm',
    bgColor: 'bg-rose-50',
    accentColor: 'bg-rose-500',
    textColor: 'text-rose-900'
  },
  {
    name: 'Milo',
    video: '/agents/Milo Hero_balanced_736x544.webm',
    bgColor: 'bg-blue-50',
    accentColor: 'bg-blue-500',
    textColor: 'text-blue-900'
  },
  {
    name: 'Remi',
    video: '/agents/Remi Hero_balanced_736x544.webm',
    bgColor: 'bg-purple-50',
    accentColor: 'bg-purple-500',
    textColor: 'text-purple-900'
  },
  {
    name: 'Zara',
    video: '/agents/Zara Hero_balanced_736x544.webm',
    bgColor: 'bg-amber-50',
    accentColor: 'bg-amber-500',
    textColor: 'text-amber-900'
  },
];

export const MinimalistPosterTemplate: React.FC<MinimalistPosterTemplateProps> = ({
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
    <div className={`relative w-full h-full ${heroAgent.bgColor} overflow-hidden`}>
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, #000 0.5px, transparent 0.5px)',
        backgroundSize: '20px 20px'
      }} />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col p-8">
        {/* Logo - minimalist */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/made-logo-horizontal.svg"
            alt="Made"
            width={70}
            height={20}
            className="opacity-50"
          />
        </motion.div>

        {/* Hook - ultra clean typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex-1 flex items-center justify-center px-4"
        >
          <h1 className={`${hook.length > 50 ? 'text-4xl' : hook.length > 35 ? 'text-5xl' : 'text-6xl'} font-black ${heroAgent.textColor} leading-[1.1] tracking-tight text-center max-w-sm`}>
            {hook}
          </h1>
        </motion.div>

        {/* Agent video - centered, clean crop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="relative w-[280px] h-[280px] rounded-3xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              src={heroAgent.video}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Bottom info - minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-4"
        >
          {/* Divider line */}
          <div className={`h-0.5 w-full ${heroAgent.accentColor} opacity-20`} />

          <div className="flex items-center justify-between">
            <div className={`${heroAgent.textColor} text-sm font-bold`}>getmade.ai</div>
            <div className={`${heroAgent.textColor} opacity-60 text-xs`}>Starting from $29.99</div>
          </div>

          <div className={`${heroAgent.textColor} opacity-40 text-xs text-center tracking-wider uppercase`}>
            Your Creative Dream Team
          </div>
        </motion.div>
      </div>
    </div>
  );
};
