import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TrendingUp, Users, Clock, DollarSign, Zap, BarChart3 } from 'lucide-react';

interface DataVizTemplateProps {
  hook: string;
  voiceName: string;
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

export const DataVizTemplate: React.FC<DataVizTemplateProps> = ({
  hook,
  voiceName,
  narrative
}) => {
  // Select random agents for visual variety
  const selectedAgents = React.useMemo(() => {
    return [...AGENT_IMAGES].sort(() => Math.random() - 0.5).slice(0, 4);
  }, []);

  const stats = [
    { value: '500%', label: 'Output Increase', icon: TrendingUp, color: '#10B981', agent: selectedAgents[0] },
    { value: '6', label: 'AI Specialists', icon: Users, color: '#3B82F6', agent: selectedAgents[1] },
    { value: '20hrs', label: 'Time Saved/Week', icon: Clock, color: '#8B5CF6', agent: selectedAgents[2] },
    { value: '$29.99', label: 'Per Month', icon: DollarSign, color: '#F59E0B', agent: selectedAgents[3] },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      {/* Animated data grid */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-cyan-400"
            style={{ top: `${i * 7}%` }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Header with Made logo and hook */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <Image
              src="/made-logo-horizontal.svg"
              alt="Made"
              width={70}
              height={20}
              className="opacity-80"
            />
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full border border-cyan-400/30">
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-xs font-semibold uppercase tracking-wider">Data-Driven</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white leading-tight">
            {hook}
          </h2>
        </motion.div>

        {/* Stats grid with agent images */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10 overflow-hidden"
              >
                {/* Agent avatar in background */}
                <div className="absolute bottom-0 right-0 w-20 h-20 opacity-20">
                  <Image
                    src={stat.agent}
                    alt="Agent"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <Icon className="w-7 h-7 mb-3 relative z-10" style={{ color: stat.color }} />
                <div className="text-4xl font-bold text-white mb-1 relative z-10">{stat.value}</div>
                <div className="text-sm text-gray-400 relative z-10">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <div className="text-white font-semibold mb-4 text-sm">Creator Output Comparison</div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">Without Made</span>
                <span className="text-gray-400">2 videos/week</span>
              </div>
              <motion.div
                className="h-2 bg-gray-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '30%' }}
                transition={{ duration: 1, delay: 1 }}
              />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">With Made</span>
                <span className="text-emerald-400 font-bold">12 videos/week</span>
              </div>
              <motion.div
                className="h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Footer with CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="space-y-3"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl"
          >
            View Full Analytics
          </motion.button>
          <div className="text-center text-gray-500 text-xs">
            made.com • {voiceName}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
