import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface BoldCenterTemplateProps {
  hook: string;
  voiceName: string;
  voicePersonality?: string;
}

const AGENT_VIDEOS = [
  {
    name: 'Amie',
    video: '/agents/Amie Hero_balanced_736x544.webm',
    gradient: 'from-orange-500 via-orange-600 to-amber-700',
    accentColor: 'bg-orange-400'
  },
  {
    name: 'Enzo',
    video: '/agents/Enzo Hero_balanced_736x544.webm',
    gradient: 'from-emerald-500 via-green-600 to-teal-700',
    accentColor: 'bg-emerald-400'
  },
  {
    name: 'Lila',
    video: '/agents/Lila Hero_balanced_736x544.webm',
    gradient: 'from-red-500 via-rose-600 to-pink-700',
    accentColor: 'bg-red-400'
  },
  {
    name: 'Milo',
    video: '/agents/Milo Hero_balanced_736x544.webm',
    gradient: 'from-blue-500 via-blue-600 to-indigo-700',
    accentColor: 'bg-blue-400'
  },
  {
    name: 'Remi',
    video: '/agents/Remi Hero_balanced_736x544.webm',
    gradient: 'from-purple-500 via-purple-600 to-indigo-700',
    accentColor: 'bg-purple-400'
  },
  {
    name: 'Zara',
    video: '/agents/Zara Hero_balanced_736x544.webm',
    gradient: 'from-yellow-500 via-amber-600 to-orange-700',
    accentColor: 'bg-yellow-400'
  },
];

export const BoldCenterTemplate: React.FC<BoldCenterTemplateProps> = ({
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

  // Split hook to highlight middle word(s)
  const words = hook.split(' ');
  const midPoint = Math.floor(words.length / 2);

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .1) 25%, rgba(255, 255, 255, .1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .1) 75%, rgba(255, 255, 255, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .1) 25%, rgba(255, 255, 255, .1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .1) 75%, rgba(255, 255, 255, .1) 76%, transparent 77%, transparent)',
        backgroundSize: '40px 40px'
      }} />

      {/* Agent video - centered background, heavily dimmed */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <motion.div
          className="relative w-[500px] h-[500px]"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <video
            ref={videoRef}
            src={heroAgent.video}
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20 blur-sm grayscale"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <Image
            src="/made-logo-horizontal.svg"
            alt="Made"
            width={75}
            height={22}
            className="opacity-70"
          />
        </motion.div>

        {/* Bold centered typography */}
        <div className="flex-1 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-center max-w-md"
          >
            <div className="space-y-2">
              {words.map((word, i) => {
                const isHighlight = i === midPoint || i === midPoint - 1;
                // Responsive text size based on hook length
                const textSize = hook.length > 50 ? 'text-5xl' : hook.length > 35 ? 'text-6xl' : 'text-7xl';

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + (i * 0.08) }}
                    className="inline-block"
                  >
                    <span className={`
                      ${textSize} font-black leading-[0.9] tracking-tight mr-3
                      ${isHighlight ? `text-transparent bg-clip-text bg-gradient-to-r ${heroAgent.gradient}` : 'text-white'}
                      drop-shadow-2xl
                    `}>
                      {word}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Animated accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className={`h-1.5 w-32 ${heroAgent.accentColor} rounded-full mx-auto mt-8`}
            />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-3"
        >
          <div className="text-white/50 text-xs uppercase tracking-widest text-center font-bold">
            Your Creative Dream Team
          </div>
          <div className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            <span className="text-white font-bold text-lg">getmade.ai</span>
            <div className="w-px h-5 bg-white/20" />
            <span className="text-white/80 text-sm">Starting from $29.99</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
