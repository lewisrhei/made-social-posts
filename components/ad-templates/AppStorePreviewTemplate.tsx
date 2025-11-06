import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface AppStorePreviewTemplateProps {
  hook: string;
  voiceName: string;
  voicePersonality?: string;
  assets?: string[];
}

export const AppStorePreviewTemplate: React.FC<AppStorePreviewTemplateProps> = ({
  hook,
  voiceName,
  voicePersonality,
  assets = []
}) => {
  // Use up to 3 assets for the preview
  const displayAssets = assets.length > 0
    ? assets.slice(0, 3)
    : [
        '/product/lila/View All Claims/Expand.png',
        '/product/lila/Find Popular Reposts/See more.png',
        '/product/lila/Rank My Reuploders/See more.png'
      ];

  return (
    <div className="relative w-full h-full bg-white overflow-hidden">
      {/* Header section */}
      <div className="relative z-10 px-6 pt-16 pb-6 bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
            {voiceName}
          </div>
          <h1 className="text-gray-900 text-3xl font-black leading-tight mb-3">
            {hook}
          </h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <span className="text-gray-500 text-sm font-medium">4.9</span>
            <span className="text-gray-400 text-sm">• 12K Ratings</span>
          </div>
        </motion.div>
      </div>

      {/* Screenshots carousel */}
      <div className="px-6 pb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        >
          {displayAssets.map((asset, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="flex-shrink-0 snap-center"
            >
              <div className="w-[200px] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <div className="aspect-[9/16] relative bg-gray-100">
                  <Image
                    src={asset}
                    alt={`Screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Features list */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="px-6 pb-6"
      >
        <div className="text-gray-900 text-lg font-bold mb-4">What's New</div>
        <div className="space-y-3">
          {[
            'AI-powered automation',
            'Real-time collaboration',
            'Advanced analytics'
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 text-sm font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Download button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="px-6 pb-8"
      >
        <div className="w-full bg-blue-600 text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg">
          GET
        </div>
      </motion.div>

      {/* Gradient fade at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
};
