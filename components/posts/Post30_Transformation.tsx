import React from 'react';

export const TransformationPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-slate-900 overflow-hidden">
      {/* Dramatic Lighting Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-green-900/20"></div>

      {/* Title */}
      <div className="absolute top-8 left-0 right-0 text-center z-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Before & After
        </h1>
        <div className="text-white/70 text-xl">Same creator, different reality</div>
      </div>

      {/* Split Screen with Divider */}
      <div className="absolute inset-0 flex pt-32">

        {/* BEFORE - Left Side (Stressed) */}
        <div className="w-1/2 relative bg-gradient-to-br from-red-950 to-orange-950 p-8">
          <div className="h-full flex flex-col items-center justify-center space-y-8">

            {/* Label */}
            <div className="bg-red-500 text-white px-8 py-3 rounded-full font-bold text-2xl">
              BEFORE
            </div>

            {/* Workspace Representation - Chaos */}
            <div className="relative w-full max-w-md">

              {/* Messy Desk */}
              <div className="bg-red-900/30 backdrop-blur rounded-3xl p-8 border-2 border-red-500/30">

                {/* Stressed Creator */}
                <div className="text-center mb-6">
                  <div className="text-8xl mb-4">😫</div>
                  <div className="text-white font-bold text-xl mb-2">11:47 PM</div>
                  <div className="text-red-300">Still editing...</div>
                </div>

                {/* Chaotic Stats */}
                <div className="space-y-3">
                  <div className="bg-red-800/50 rounded-lg p-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Sleep</span>
                      <span className="text-red-300 font-bold">4 hrs</span>
                    </div>
                  </div>
                  <div className="bg-red-800/50 rounded-lg p-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Work hours</span>
                      <span className="text-red-300 font-bold">14 hrs/day</span>
                    </div>
                  </div>
                  <div className="bg-red-800/50 rounded-lg p-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Videos/week</span>
                      <span className="text-red-300 font-bold">2 (barely)</span>
                    </div>
                  </div>
                  <div className="bg-red-800/50 rounded-lg p-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Burnout level</span>
                      <span className="text-red-300 font-bold">CRITICAL</span>
                    </div>
                  </div>
                  <div className="bg-red-800/50 rounded-lg p-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Creative energy</span>
                      <span className="text-red-300 font-bold">Depleted</span>
                    </div>
                  </div>
                </div>

                {/* Scattered Elements */}
                <div className="mt-6 flex gap-2 justify-center text-2xl opacity-60">
                  <span>☕</span>
                  <span>☕</span>
                  <span>☕</span>
                  <span>☕</span>
                  <span>☕</span>
                </div>
              </div>

              {/* Floating Stress Indicators */}
              <div className="absolute -top-4 -left-4 text-3xl animate-bounce">📉</div>
              <div className="absolute -bottom-4 -right-4 text-3xl animate-bounce delay-300">⚠️</div>
            </div>

            {/* Before Caption */}
            <div className="text-center max-w-sm">
              <div className="text-white/70 text-lg italic">
                "I don't remember the last time I wasn't exhausted"
              </div>
            </div>
          </div>
        </div>

        {/* Center Divider with Arrow */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/20 z-10"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-white rounded-full p-6 shadow-2xl">
            <svg className="w-12 h-12 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>

        {/* AFTER - Right Side (Thriving) */}
        <div className="w-1/2 relative bg-gradient-to-br from-emerald-950 to-teal-950 p-8">
          <div className="h-full flex flex-col items-center justify-center space-y-8">

            {/* Label */}
            <div className="bg-green-500 text-white px-8 py-3 rounded-full font-bold text-2xl">
              AFTER
            </div>

            {/* Workspace Representation - Organized */}
            <div className="relative w-full max-w-md">

              {/* Clean Desk */}
              <div className="bg-green-900/30 backdrop-blur rounded-3xl p-8 border-2 border-green-500/30">

                {/* Happy Creator */}
                <div className="text-center mb-6">
                  <div className="text-8xl mb-4">😎</div>
                  <div className="text-white font-bold text-xl mb-2">6:30 PM</div>
                  <div className="text-green-300">All done for the day!</div>
                </div>

                {/* Healthy Stats */}
                <div className="space-y-3">
                  <div className="bg-green-800/50 rounded-lg p-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Sleep</span>
                      <span className="text-green-300 font-bold">8 hrs</span>
                    </div>
                  </div>
                  <div className="bg-green-800/50 rounded-lg p-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Work hours</span>
                      <span className="text-green-300 font-bold">5 hrs/day</span>
                    </div>
                  </div>
                  <div className="bg-green-800/50 rounded-lg p-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Videos/week</span>
                      <span className="text-green-300 font-bold">10+ (easy)</span>
                    </div>
                  </div>
                  <div className="bg-green-800/50 rounded-lg p-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Burnout level</span>
                      <span className="text-green-300 font-bold">What burnout?</span>
                    </div>
                  </div>
                  <div className="bg-green-800/50 rounded-lg p-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Creative energy</span>
                      <span className="text-green-300 font-bold">Overflowing</span>
                    </div>
                  </div>
                </div>

                {/* Team Avatars */}
                <div className="mt-6 flex gap-2 justify-center">
                  <img src="/agents/Milo-static.png" alt="Milo" className="w-10 h-10 rounded-full border-2 border-green-400" />
                  <img src="/agents/Ivy-static.png" alt="Ivy" className="w-10 h-10 rounded-full border-2 border-green-400" />
                  <img src="/agents/Remi-static.png" alt="Remi" className="w-10 h-10 rounded-full border-2 border-green-400" />
                  <img src="/agents/Quinn-static.png" alt="Quinn" className="w-10 h-10 rounded-full border-2 border-green-400" />
                  <img src="/agents/Amie-static.png" alt="Amie" className="w-10 h-10 rounded-full border-2 border-green-400" />
                </div>
              </div>

              {/* Floating Success Indicators */}
              <div className="absolute -top-4 -left-4 text-3xl animate-bounce">📈</div>
              <div className="absolute -bottom-4 -right-4 text-3xl animate-bounce delay-300">✨</div>
            </div>

            {/* After Caption */}
            <div className="text-center max-w-sm">
              <div className="text-white/70 text-lg italic">
                "I forgot creating content could actually be fun"
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stat */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-8 py-4 text-center">
          <div className="text-white/70 text-sm mb-1">Time to transformation</div>
          <div className="text-white font-bold text-2xl">24 hours</div>
        </div>
      </div>

      {/* Subtle Made Logo */}
      <div className="absolute top-8 right-8 opacity-40 z-20">
        <img
          src="/made-logo-horizontal.svg"
          alt="Made"
          className="h-8"
        />
      </div>
    </div>
  );
};
