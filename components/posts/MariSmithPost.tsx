import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Users, Sparkles, ThumbsUp, Share2 } from 'lucide-react';

export const MariSmithPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
      {/* Social network pattern */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Header - Social First */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl"
          >
            <Heart className="w-10 h-10 text-pink-500" fill="currentColor" />
          </motion.div>
          <div className="inline-block px-6 py-3 bg-white rounded-full mb-4 shadow-xl">
            <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent font-bold text-lg">
              RELATIONSHIP MARKETING
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-3 leading-tight">
            Build Community,<br />
            Not Just Content
          </h1>
        </motion.div>

        {/* Engagement Bubbles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-3"
        >
          {[
            { icon: MessageCircle, count: '24/7', label: 'Engagement' },
            { icon: Users, count: '6', label: 'Specialists' },
            { icon: ThumbsUp, count: '100%', label: 'Authentic' },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-4 text-center shadow-xl"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, delay: index * 0.3, repeat: Infinity }}
                >
                  <Icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                </motion.div>
                <div className="text-3xl font-black text-purple-600 mb-1">{item.count}</div>
                <div className="text-xs text-gray-600 font-semibold">{item.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Social Feed Style Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Post Header */}
          <div className="flex items-center p-4 border-b border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
              M
            </div>
            <div>
              <div className="font-bold text-gray-800">Made</div>
              <div className="text-xs text-gray-500">Your AI Creative Team</div>
            </div>
          </div>

          {/* Post Content */}
          <div className="p-5">
            <p className="text-gray-800 leading-relaxed mb-4">
              Your community deserves better content. Consistent, engaging, authentic posts
              that build real relationships. That's what our 6 AI specialists deliver -
              every single day. 💜
            </p>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-purple-900">What You Get:</span>
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['Content Writing', 'Design', 'Social Strategy', 'Video', 'SEO', 'Analytics'].map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1 + idx * 0.05 }}
                    className="bg-white rounded-lg px-3 py-2 text-xs font-semibold text-purple-700 text-center"
                  >
                    ✓ {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-5 text-center text-white">
              <div className="text-sm font-semibold mb-1 opacity-90">All for just</div>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl font-black mb-1"
              >
                $29.99/mo
              </motion.div>
              <div className="text-sm opacity-90">Less than a nice dinner out!</div>
            </div>
          </div>

          {/* Post Engagement Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="border-t border-gray-200 p-4"
          >
            <div className="flex justify-between text-gray-600 text-sm mb-3">
              <span className="font-semibold">10K likes</span>
              <span className="font-semibold">2.5K shares</span>
            </div>

            <div className="flex space-x-2">
              {[
                { icon: ThumbsUp, label: 'Like', color: 'from-blue-500 to-blue-600' },
                { icon: MessageCircle, label: 'Comment', color: 'from-green-500 to-green-600' },
                { icon: Share2, label: 'Share', color: 'from-purple-500 to-purple-600' },
              ].map((action, idx) => {
                const Icon = action.icon;
                return (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 py-2 bg-gradient-to-r ${action.color} text-white rounded-full text-xs font-bold flex items-center justify-center space-x-1`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{action.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-full shadow-2xl"
          >
            Join The Community
          </motion.button>
          <p className="text-white text-sm mt-4 font-semibold">
            made.com • Relationships first, content second 💜
          </p>
        </motion.div>
      </div>
    </div>
  );
};
