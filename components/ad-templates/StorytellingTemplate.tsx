import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface StorytellingTemplateProps {
  hook: string;
  voiceName: string;
  painPoint?: string;
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

export const StorytellingTemplate: React.FC<StorytellingTemplateProps> = ({
  hook,
  voiceName,
  painPoint,
  narrative
}) => {
  // Select one agent for the hero's journey
  const selectedAgent = React.useMemo(() => {
    return AGENT_IMAGES[Math.floor(Math.random() * AGENT_IMAGES.length)];
  }, []);

  const chapters = [
    { number: '01', title: 'The Problem', content: painPoint || 'Every creator hits this wall...' },
    { number: '02', title: 'The Struggle', content: 'Drowning in tasks. Losing creative joy. Burning out.' },
    { number: '03', title: 'The Turning Point', content: hook },
    { number: '04', title: 'The Transformation', content: 'What if you could focus only on what you love?' },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Film grain texture */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")',
        }}
      />

      {/* Agent as hero in the corner */}
      <motion.div
        className="absolute bottom-0 right-0 w-56 h-56 opacity-15"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src={selectedAgent}
          alt="Hero"
          width={224}
          height={224}
          className="object-contain"
        />
      </motion.div>

      {/* Made logo at top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-6 left-6 z-20"
      >
        <Image
          src="/made-logo-horizontal.svg"
          alt="Made"
          width={80}
          height={24}
          className="opacity-70"
        />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center p-8 space-y-8">
        {/* Story title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="text-purple-400 text-sm uppercase tracking-[0.3em] mb-2">A Creator's Journey</div>
          <div className="text-white text-xs opacity-50">{narrative || 'From Burnout to Breakthrough'}</div>
        </motion.div>

        {/* Story chapters */}
        <div className="space-y-6">
          {chapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className="relative"
            >
              {/* Chapter number */}
              <div className="absolute -left-1 top-0 text-6xl font-black text-white/5">
                {chapter.number}
              </div>

              <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-white/10">
                <div className="text-purple-300 text-xs uppercase tracking-widest mb-2">
                  {chapter.title}
                </div>
                <div className="text-white text-base leading-relaxed">
                  {chapter.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Epilogue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-center space-y-4 pt-4"
        >
          <div className="text-white/70 text-sm italic">
            Your story starts here.
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full shadow-xl"
          >
            Begin Your Journey
          </motion.button>

          <div className="text-purple-400/50 text-xs pt-2">
            made.com • {voiceName} • $29.99/mo
          </div>
        </motion.div>
      </div>
    </div>
  );
};
