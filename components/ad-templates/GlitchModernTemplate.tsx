import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface GlitchModernTemplateProps {
  hook: string;
  voiceName: string;
  voicePersonality?: string;
}

const AGENT_VIDEOS = [
  {
    name: 'Amie',
    video: '/agents/Amie Hero_balanced_736x544.webm',
    accentColor: 'bg-orange-400',
    glowColor: 'shadow-orange-500/50'
  },
  {
    name: 'Enzo',
    video: '/agents/Enzo Hero_balanced_736x544.webm',
    accentColor: 'bg-emerald-400',
    glowColor: 'shadow-emerald-500/50'
  },
  {
    name: 'Lila',
    video: '/agents/Lila Hero_balanced_736x544.webm',
    accentColor: 'bg-rose-400',
    glowColor: 'shadow-rose-500/50'
  },
  {
    name: 'Milo',
    video: '/agents/Milo Hero_balanced_736x544.webm',
    accentColor: 'bg-blue-400',
    glowColor: 'shadow-blue-500/50'
  },
  {
    name: 'Remi',
    video: '/agents/Remi Hero_balanced_736x544.webm',
    accentColor: 'bg-purple-400',
    glowColor: 'shadow-purple-500/50'
  },
  {
    name: 'Zara',
    video: '/agents/Zara Hero_balanced_736x544.webm',
    accentColor: 'bg-yellow-400',
    glowColor: 'shadow-yellow-500/50'
  },
];

export const GlitchModernTemplate: React.FC<GlitchModernTemplateProps> = ({
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
      {/* Animated scanlines */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-50 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '0% 100%']
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)',
          backgroundSize: '100% 4px'
        }}
      />

      {/* Agent video - full screen with glitch effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="relative w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <video
            ref={videoRef}
            src={heroAgent.video}
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30 mix-blend-lighten"
          />

          {/* Glitch overlay effect */}
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: [0, 0.05, 0, 0.03, 0]
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 3
            }}
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,0,0,0.1) 25%, transparent 50%, rgba(0,255,0,0.1) 75%, transparent 100%)'
            }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Top corner elements */}
        <div className="flex justify-between items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/made-logo-horizontal.svg"
              alt="Made"
              width={80}
              height={24}
              className="opacity-90"
            />
          </motion.div>

          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-2"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-2 h-2 ${heroAgent.accentColor} rounded-full`}
            />
            <span className="text-white/60 text-xs font-mono uppercase">Live</span>
          </motion.div>
        </div>

        {/* Center - Bold hook with tech styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 flex items-center px-4"
        >
          <div className="space-y-6">
            <motion.h1
              className={`${hook.length > 50 ? 'text-5xl' : hook.length > 35 ? 'text-6xl' : 'text-7xl'} font-black text-white leading-[1] tracking-tighter`}
              style={{
                textShadow: '0 0 40px rgba(255, 255, 255, 0.3)'
              }}
              animate={{
                textShadow: [
                  '0 0 40px rgba(255, 255, 255, 0.3)',
                  '0 0 60px rgba(255, 255, 255, 0.5)',
                  '0 0 40px rgba(255, 255, 255, 0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {hook}
            </motion.h1>

            {/* Glitch bars */}
            <div className="flex gap-2">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                  className={`h-1 ${heroAgent.accentColor} ${heroAgent.glowColor} shadow-lg`}
                  style={{ width: `${(i + 1) * 25}px` }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom - Tech CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-4"
        >
          {/* Info grid */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-1">
              <div className="text-white/40 text-xs font-mono uppercase">Agents</div>
              <div className="text-white font-bold text-lg">6</div>
            </div>
            <div className="space-y-1">
              <div className="text-white/40 text-xs font-mono uppercase">Uptime</div>
              <div className="text-white font-bold text-lg">24/7</div>
            </div>
            <div className="space-y-1">
              <div className="text-white/40 text-xs font-mono uppercase">Price</div>
              <div className="text-white font-bold text-lg">$29.99</div>
            </div>
          </div>

          {/* CTA button */}
          <div className="flex items-center justify-center gap-2 px-6 py-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
            <span className="text-white font-bold text-base font-mono">getmade.ai</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white/60"
            >
              →
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
