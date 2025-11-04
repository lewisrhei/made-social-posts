import React from 'react';

export const CreatorStrugglesPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-indigo-950 via-slate-900 to-black overflow-hidden">
      {/* Meme Top Text */}
      <div className="absolute top-0 left-0 right-0 bg-black/80 py-6 px-8 text-center">
        <h2 className="text-white font-bold text-3xl md:text-4xl uppercase tracking-wider">
          Me trying to edit thumbnails at 2am
        </h2>
      </div>

      {/* Main Image Area - Struggling Creator */}
      <div className="absolute inset-0 flex items-center justify-center pt-24 pb-32">
        <div className="relative">
          {/* Tired/Stressed Creator Representation */}
          <div className="text-center space-y-6">
            {/* Exhausted Face */}
            <div className="text-9xl mb-8 animate-[wiggle_1s_ease-in-out_infinite]">
              😫
            </div>

            {/* Messy Desktop Representation */}
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-4 h-32 rotate-[-3deg]">
                <div className="text-red-400 text-sm font-mono">thumbnail_final_FINAL_v3.psd</div>
                <div className="text-white/50 text-xs mt-2">Modified: 1:47 AM</div>
              </div>
              <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-4 h-32 rotate-[2deg]">
                <div className="text-red-400 text-sm font-mono">thumbnail_THIS_ONE.png</div>
                <div className="text-white/50 text-xs mt-2">Modified: 2:13 AM</div>
              </div>
              <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-4 h-32 rotate-[1deg]">
                <div className="text-red-400 text-sm font-mono">actually_final_thumb.jpg</div>
                <div className="text-white/50 text-xs mt-2">Modified: 2:38 AM</div>
              </div>
              <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-4 h-32 rotate-[-2deg]">
                <div className="text-red-400 text-sm font-mono">i_hate_this_lol.psd</div>
                <div className="text-white/50 text-xs mt-2">Modified: 2:52 AM</div>
              </div>
            </div>

            {/* Clock showing 2:47 AM */}
            <div className="text-white/40 text-2xl font-mono mt-8">
              🕐 2:47 AM
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text with Agent Help */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 py-8 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Agent Sliding In */}
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="relative animate-[slideIn_0.5s_ease-out]">
              <img
                src="/agents/Ivy-static.png"
                alt="Ivy"
                className="w-20 h-20 rounded-full border-4 border-purple-400 shadow-lg shadow-purple-400/50"
              />
              <div className="absolute -top-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-black"></div>
            </div>
            <div className="text-left">
              <div className="text-purple-400 font-bold text-xl mb-1">Ivy has entered the chat</div>
              <div className="text-white/80 text-lg">"I got you. Go to sleep."</div>
            </div>
          </div>

          {/* Bottom Meme Text */}
          <div className="text-center">
            <h3 className="text-white font-bold text-2xl md:text-3xl uppercase tracking-wider">
              My design agent showing up clutch
            </h3>
          </div>
        </div>
      </div>

      {/* Coffee cups scattered around (desperation vibes) */}
      <div className="absolute top-32 left-12 text-4xl opacity-50 rotate-12">☕</div>
      <div className="absolute top-40 right-16 text-4xl opacity-50 rotate-[-15deg]">☕</div>
      <div className="absolute top-56 left-24 text-3xl opacity-40 rotate-[-8deg]">☕</div>

      {/* Subtle Made Logo */}
      <div className="absolute top-28 right-8 opacity-30">
        <img
          src="/made-logo-horizontal.svg"
          alt="Made"
          className="h-6"
        />
      </div>

      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes slideIn {
          0% { transform: translateX(-100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
