import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as Posts from './posts';

const postComponents = {
  NeilPatelPost: Posts.NeilPatelPost,
  RyanDeissPost: Posts.RyanDeissPost,
  RandFishkinPost: Posts.RandFishkinPost,
  SethGodinPost: Posts.SethGodinPost,
  DonaldMillerPost: Posts.DonaldMillerPost,
  AnnHandleyPost: Posts.AnnHandleyPost,
  GaryVaynerchukPost: Posts.GaryVaynerchukPost,
  GrantCardonePost: Posts.GrantCardonePost,
  AlexHormoziPost: Posts.AlexHormoziPost,
  AprilDunfordPost: Posts.AprilDunfordPost,
  AlRiesPost: Posts.AlRiesPost,
  ByronSharpPost: Posts.ByronSharpPost,
  JayBaerPost: Posts.JayBaerPost,
  JonahBergerPost: Posts.JonahBergerPost,
  MariSmithPost: Posts.MariSmithPost,
  BernadetteJiwaPost: Posts.BernadetteJiwaPost,
  MarkRitsonPost: Posts.MarkRitsonPost,
  BobHoffmanPost: Posts.BobHoffmanPost,
  DanKennedyPost: Posts.DanKennedyPost,
  RussellBrunsonPost: Posts.RussellBrunsonPost,
  FrankKernPost: Posts.FrankKernPost,
};

const postInfo = [
  { name: 'Neil Patel', component: 'NeilPatelPost', category: 'Data-Driven', description: 'Stats-heavy, metrics focus' },
  { name: 'Ryan Deiss', component: 'RyanDeissPost', category: 'Data-Driven', description: 'Funnel optimization' },
  { name: 'Rand Fishkin', component: 'RandFishkinPost', category: 'Data-Driven', description: 'Transparent data' },
  { name: 'Seth Godin', component: 'SethGodinPost', category: 'Storytelling', description: 'Minimal & profound' },
  { name: 'Donald Miller', component: 'DonaldMillerPost', category: 'Storytelling', description: 'Hero\'s journey' },
  { name: 'Ann Handley', component: 'AnnHandleyPost', category: 'Storytelling', description: 'Authentic voice' },
  { name: 'Gary Vaynerchuk', component: 'GaryVaynerchukPost', category: 'Aggressive', description: 'ALL CAPS hustle' },
  { name: 'Grant Cardone', component: 'GrantCardonePost', category: 'Aggressive', description: '10X everything' },
  { name: 'Alex Hormozi', component: 'AlexHormoziPost', category: 'Aggressive', description: 'Value stacking' },
  { name: 'April Dunford', component: 'AprilDunfordPost', category: 'Positioning', description: 'Obviously better' },
  { name: 'Al Ries', component: 'AlRiesPost', category: 'Positioning', description: '22 laws' },
  { name: 'Byron Sharp', component: 'ByronSharpPost', category: 'Positioning', description: 'Evidence-based' },
  { name: 'Jay Baer', component: 'JayBaerPost', category: 'Community', description: 'Youtility focus' },
  { name: 'Jonah Berger', component: 'JonahBergerPost', category: 'Community', description: 'Viral mechanics' },
  { name: 'Mari Smith', component: 'MariSmithPost', category: 'Community', description: 'Social-first' },
  { name: 'Bernadette Jiwa', component: 'BernadetteJiwaPost', category: 'Unconventional', description: 'Empathy-driven' },
  { name: 'Mark Ritson', component: 'MarkRitsonPost', category: 'Unconventional', description: 'No-BS contrarian' },
  { name: 'Bob Hoffman', component: 'BobHoffmanPost', category: 'Unconventional', description: 'Anti-hype skeptic' },
  { name: 'Dan Kennedy', component: 'DanKennedyPost', category: 'Direct Response', description: 'Scarcity & urgency' },
  { name: 'Russell Brunson', component: 'RussellBrunsonPost', category: 'Direct Response', description: 'Funnel hacking' },
  { name: 'Frank Kern', component: 'FrankKernPost', category: 'Direct Response', description: 'Story-driven sales' },
];

export const PostGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentPost = postInfo[currentIndex];
  const PostComponent = postComponents[currentPost.component as keyof typeof postComponents];

  const navigatePost = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return postInfo.length - 1;
      if (next >= postInfo.length) return 0;
      return next;
    });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Made Social Posts Gallery
          </h1>
          <p className="text-gray-400 text-lg">
            21 Famous Marketer Styles - Swipe to explore
          </p>
        </div>

        {/* Main Gallery */}
        <div className="flex gap-8 items-center">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigatePost(-1)}
            className="p-4 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-lg transition-colors"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </motion.button>

          {/* Post Display */}
          <div className="flex-1 flex flex-col items-center">
            {/* Post Info */}
            <div className="mb-4 text-center">
              <div className="inline-block px-4 py-2 bg-blue-500/30 rounded-full border border-blue-400 mb-2">
                <span className="text-blue-300 text-sm font-semibold">{currentPost.category}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-1">
                {currentPost.name}
              </h2>
              <p className="text-gray-400">{currentPost.description}</p>
              <div className="text-gray-500 text-sm mt-2">
                {currentIndex + 1} / {postInfo.length}
              </div>
            </div>

            {/* Post Container - 9:16 aspect ratio */}
            <div className="relative w-full max-w-md" style={{ aspectRatio: '9/16' }}>
              <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="w-full h-full"
                  >
                    <PostComponent />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-2 mt-6 flex-wrap justify-center max-w-md">
              {postInfo.map((post, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-blue-500'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  title={post.name}
                />
              ))}
            </div>
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigatePost(1)}
            className="p-4 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-lg transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </motion.button>
        </div>

        {/* Category Filter */}
        <div className="mt-8 flex gap-2 justify-center flex-wrap">
          {['All', 'Data-Driven', 'Storytelling', 'Aggressive', 'Positioning', 'Community', 'Unconventional', 'Direct Response'].map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (cat === 'All') {
                  setCurrentIndex(0);
                } else {
                  const firstInCategory = postInfo.findIndex(p => p.category === cat);
                  if (firstInCategory !== -1) {
                    setDirection(firstInCategory > currentIndex ? 1 : -1);
                    setCurrentIndex(firstInCategory);
                  }
                }
              }}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm font-semibold backdrop-blur-lg transition-colors"
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostGallery;
