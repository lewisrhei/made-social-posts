import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X, Check, ArrowRight } from 'lucide-react';

interface BeforeAfterTemplateProps {
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

export const BeforeAfterTemplate: React.FC<BeforeAfterTemplateProps> = ({
  hook,
  voiceName,
  painPoint
}) => {
  // Select agents for the "after" side
  const selectedAgents = React.useMemo(() => {
    return [...AGENT_IMAGES].sort(() => Math.random() - 0.5).slice(0, 3);
  }, []);

  const beforeItems = [
    'Editing until 3am',
    'Drowning in admin tasks',
    'Missing upload schedules',
    'Creative burnout',
    'Working alone',
  ];

  const afterItems = [
    '6 AI specialists working 24/7',
    'Automated workflows',
    'Consistent posting',
    'Pure creative freedom',
    'Full production team',
  ];

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Made logo at top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-4 left-1/2 -translate-x-1/2 z-30"
      >
        <Image
          src="/made-logo-horizontal.svg"
          alt="Made"
          width={70}
          height={20}
          className="opacity-80"
        />
      </motion.div>

      {/* Vertical split */}
      <div className="h-full flex">
        {/* BEFORE - Left side */}
        <div className="flex-1 relative bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col justify-between p-6 border-r-2 border-yellow-500">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-red-500/20 rounded-full border border-red-500 mb-4">
              <span className="text-red-400 text-xs font-bold uppercase">Before</span>
            </div>

            <h3 className="text-white text-xl font-bold mb-4 leading-tight">
              Solo Creator Life
            </h3>

            <div className="space-y-3">
              {beforeItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-red-400/50 text-xs"
          >
            Exhausted. Overwhelmed. Stuck.
          </motion.div>
        </div>

        {/* AFTER - Right side */}
        <div className="flex-1 relative bg-gradient-to-br from-emerald-900 to-cyan-900 flex flex-col justify-between p-6 overflow-hidden">
          {/* Agent avatars in background */}
          <div className="absolute bottom-0 right-0 flex gap-2 opacity-20">
            {selectedAgents.map((agent, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.2, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2 }}
                className="w-16 h-16"
              >
                <Image
                  src={agent}
                  alt="Agent"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="inline-block px-3 py-1 bg-emerald-500/20 rounded-full border border-emerald-500 mb-4">
              <span className="text-emerald-400 text-xs font-bold uppercase">After</span>
            </div>

            <h3 className="text-white text-xl font-bold mb-4 leading-tight">
              Made-Powered Creator
            </h3>

            <div className="space-y-3">
              {afterItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-100 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-emerald-400/50 text-xs relative z-10"
          >
            Energized. Focused. Thriving.
          </motion.div>
        </div>
      </div>

      {/* Center divider with arrow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center shadow-2xl"
        >
          <ArrowRight className="w-6 h-6 text-black" />
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-0 right-0 px-6"
      >
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-4 text-center">
          <div className="text-black font-bold text-lg mb-1">{hook}</div>
          <div className="text-black/70 text-xs">made.com • $29.99/mo</div>
        </div>
      </motion.div>
    </div>
  );
};
