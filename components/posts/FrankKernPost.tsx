import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Heart, Coffee, Sparkles } from 'lucide-react';

export const FrankKernPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 overflow-hidden">
      {/* Casual, friendly background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Header - Conversational */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Coffee className="w-8 h-8 text-blue-900" />
          </motion.div>
          <h1 className="text-4xl font-bold text-white mb-3 leading-tight">
            Hey, can we talk<br />
            for a second?
          </h1>
          <p className="text-blue-200 text-lg">
            Because I've got something kinda cool to show you...
          </p>
        </motion.div>

        {/* The Relatable Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30"
        >
          <div className="flex items-center mb-4">
            <MessageCircle className="w-6 h-6 text-yellow-400 mr-3" />
            <span className="text-white font-bold text-lg">Here's the deal...</span>
          </div>

          <div className="space-y-4 text-white leading-relaxed">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              So last week, I'm talking to this entrepreneur friend of mine. Super smart guy.
              But he's spending like 40 hours a week on content, design, social media... all that stuff.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              And I'm like, "Dude, why are you doing this to yourself?"
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-yellow-300 font-semibold"
            >
              He goes, "Frank, I can't afford to hire people. A full team would cost me like $20K a month."
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              That's when I showed him Made...
            </motion.p>
          </div>
        </motion.div>

        {/* The Solution - Story Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 shadow-2xl"
        >
          <div className="text-center mb-4">
            <Sparkles className="w-12 h-12 text-white mx-auto mb-3" />
            <h3 className="text-white font-bold text-2xl mb-2">
              Check this out...
            </h3>
            <p className="text-green-900 font-semibold">
              This thing gives you 6 full specialists:
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { icon: '✍️', name: 'Content Writer' },
              { icon: '🎨', name: 'Designer' },
              { icon: '📱', name: 'Social Media' },
              { icon: '🎥', name: 'Video Editor' },
              { icon: '📊', name: 'SEO Expert' },
              { icon: '📈', name: 'Analyst' },
            ].map((specialist, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.5 + idx * 0.05 }}
                className="bg-white/30 backdrop-blur-sm rounded-xl p-3 text-center"
              >
                <div className="text-3xl mb-1">{specialist.icon}</div>
                <div className="text-white text-xs font-bold">{specialist.name}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-white rounded-2xl p-6 text-center"
          >
            <p className="text-green-700 text-sm font-bold mb-2">
              And here's the crazy part...
            </p>
            <div className="text-green-900 font-black text-5xl mb-2">
              $29.99
            </div>
            <div className="text-green-700 font-bold text-lg">per month</div>
            <p className="text-green-800 text-sm mt-3">
              (Yeah, I know. I had to double-check too.)
            </p>
          </motion.div>
        </motion.div>

        {/* The Result */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="bg-white/20 backdrop-blur-lg rounded-xl p-5 border-2 border-yellow-400"
        >
          <div className="flex items-center mb-3">
            <Heart className="w-6 h-6 text-yellow-400 mr-2" fill="currentColor" />
            <span className="text-white font-bold">So here's what happened...</span>
          </div>
          <p className="text-white leading-relaxed mb-3">
            My buddy signed up. Two weeks later, he texts me:
          </p>
          <div className="bg-blue-900/50 rounded-lg p-4 border-l-4 border-yellow-400">
            <p className="text-yellow-300 italic font-semibold leading-relaxed">
              "Frank, this is insane. I just got back 30 hours of my life. I'm actually working ON my
              business instead of IN it. This is the best $30 I've ever spent."
            </p>
          </div>
        </motion.div>

        {/* The Casual Close */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.1 }}
          className="text-center"
        >
          <p className="text-white text-lg mb-4 leading-relaxed">
            Look, I don't usually push stuff on people.<br />
            But this one's a no-brainer.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-yellow-400 text-blue-900 font-bold text-lg rounded-full shadow-2xl mb-3"
          >
            Yeah, Show Me This Thing
          </motion.button>

          <p className="text-blue-200 text-sm">
            made.com • Seriously, just check it out
          </p>
        </motion.div>
      </div>
    </div>
  );
};
