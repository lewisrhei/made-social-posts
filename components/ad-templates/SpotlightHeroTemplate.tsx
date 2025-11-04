import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SpotlightHeroTemplateProps {
  hook: string;
  voiceName: string;
  voicePersonality?: string;
}

const AGENT_VIDEOS = [
  {
    name: 'Amie',
    video: '/agents/Amie Hero_balanced_736x544.webm',
    accentColor: 'from-orange-500 to-amber-500',
    glowColor: 'rgba(251, 146, 60, 0.4)'
  },
  {
    name: 'Enzo',
    video: '/agents/Enzo Hero_balanced_736x544.webm',
    accentColor: 'from-emerald-500 to-teal-500',
    glowColor: 'rgba(16, 185, 129, 0.4)'
  },
  {
    name: 'Lila',
    video: '/agents/Lila Hero_balanced_736x544.webm',
    accentColor: 'from-rose-500 to-pink-500',
    glowColor: 'rgba(244, 63, 94, 0.4)'
  },
  {
    name: 'Milo',
    video: '/agents/Milo Hero_balanced_736x544.webm',
    accentColor: 'from-blue-500 to-indigo-500',
    glowColor: 'rgba(59, 130, 246, 0.4)'
  },
  {
    name: 'Remi',
    video: '/agents/Remi Hero_balanced_736x544.webm',
    accentColor: 'from-purple-500 to-indigo-500',
    glowColor: 'rgba(168, 85, 247, 0.4)'
  },
  {
    name: 'Zara',
    video: '/agents/Zara Hero_balanced_736x544.webm',
    accentColor: 'from-yellow-500 to-amber-500',
    glowColor: 'rgba(234, 179, 8, 0.4)'
  },
];

export const SpotlightHeroTemplate: React.FC<SpotlightHeroTemplateProps> = ({
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
      {/* Dramatic spotlight effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          background: `radial-gradient(circle at 50% 60%, ${heroAgent.glowColor} 0%, transparent 60%)`
        }}
      />

      {/* Agent video - centered, dramatic lighting */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <motion.div
          className="relative w-[420px] h-[500px]"
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <video
            ref={videoRef}
            src={heroAgent.video}
            loop
            muted
            playsInline
            className="w-full h-full object-cover drop-shadow-2xl"
            style={{
              filter: 'contrast(1.1) brightness(1.1) drop-shadow(0 30px 60px rgba(0, 0, 0, 0.8))'
            }}
          />

          {/* Rim light effect */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, transparent 0%, ${heroAgent.glowColor} 100%)`,
              mixBlendMode: 'screen',
              opacity: 0.3
            }}
          />
        </motion.div>
      </div>

      {/* Dark vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.9) 100%)'
      }} />

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center"
        >
          <Image
            src="/made-logo-horizontal.svg"
            alt="Made"
            width={85}
            height={25}
            className="opacity-90"
          />
        </motion.div>

        {/* Hook text - top, dramatic typography */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-center px-6"
        >
          <motion.h1
            className={`${hook.length > 50 ? 'text-5xl' : hook.length > 35 ? 'text-6xl' : 'text-7xl'} font-black text-transparent bg-clip-text bg-gradient-to-r ${heroAgent.accentColor} leading-[1] tracking-tighter drop-shadow-2xl`}
            animate={{
              opacity: [0.9, 1, 0.9]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {hook}
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-4 text-white/70 text-sm tracking-wider uppercase"
          >
            Meet {heroAgent.name}
          </motion.div>
        </motion.div>

        <div className="flex-1" />

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-4"
        >
          {/* Feature badges */}
          <div className="flex justify-center gap-3">
            {['AI-Powered', '24/7 Support', 'Creator First'].map((badge, i) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + (i * 0.1) }}
                className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                <span className="text-white/80 text-xs font-semibold">{badge}</span>
              </motion.div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
            <span className="text-white font-bold text-lg">getmade.ai</span>
            <div className="w-px h-5 bg-white/30" />
            <span className="text-white/90 text-sm">Starting from $29.99</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
