import React from 'react';

export const TimelapsePost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Ambient Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

      {/* Timelapse Animation Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-5xl px-8">

          {/* Central Canvas Area - Showing Creation Process */}
          <div className="relative bg-slate-900/50 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">

            {/* Progress Indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-400/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">Creating...</span>
            </div>

            {/* Main Creation Canvas */}
            <div className="bg-white rounded-2xl p-8 mb-6 min-h-[400px] relative overflow-hidden">

              {/* Thumbnail Being Created - Animation States */}
              <div className="space-y-6">

                {/* Frame 1: Empty Canvas */}
                <div className="absolute inset-8 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl opacity-10 animate-[fadeOut_2s_ease-in-out]"></div>

                {/* Frame 2: Background Layer */}
                <div className="absolute inset-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl opacity-100 animate-[fadeIn_2s_ease-in-out]"></div>

                {/* Frame 3: Text Elements Appearing */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-[slideUp_3s_ease-out]">
                  <div className="text-center">
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl">
                      EPIC REVEAL
                    </h2>
                    <div className="text-2xl text-yellow-300 font-bold drop-shadow-lg">
                      You Won't Believe This!
                    </div>
                  </div>
                </div>

                {/* Frame 4: Design Elements */}
                <div className="absolute top-8 right-8 animate-[spin_4s_linear_infinite]">
                  <div className="w-24 h-24 bg-yellow-400 rounded-full opacity-50"></div>
                </div>
                <div className="absolute bottom-8 left-8 animate-[spin_3s_linear_infinite_reverse]">
                  <div className="w-32 h-32 bg-pink-400 rounded-full opacity-30"></div>
                </div>

                {/* Frame 5: Final Touches - Sparkles */}
                <div className="absolute top-1/4 left-1/4 text-4xl animate-[twinkle_1s_ease-in-out_infinite]">✨</div>
                <div className="absolute top-1/3 right-1/4 text-3xl animate-[twinkle_1s_ease-in-out_infinite_0.3s]">⚡</div>
                <div className="absolute bottom-1/4 right-1/3 text-4xl animate-[twinkle_1s_ease-in-out_infinite_0.6s]">💫</div>
              </div>

              {/* Agent Avatar Working */}
              <div className="absolute bottom-6 right-6">
                <div className="relative">
                  <img
                    src="/agents/Ivy-static.png"
                    alt="Ivy"
                    className="w-20 h-20 rounded-full border-4 border-purple-400 shadow-xl"
                  />
                  <div className="absolute -top-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Process Timeline */}
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="animate-[fadeIn_1s_ease-in]">
                <div className="text-purple-400 text-3xl mb-2">📐</div>
                <div className="text-white/80 text-sm font-medium">Layout</div>
                <div className="text-white/40 text-xs">0:00</div>
              </div>
              <div className="animate-[fadeIn_1s_ease-in_0.5s] opacity-0 [animation-fill-mode:forwards]">
                <div className="text-blue-400 text-3xl mb-2">🎨</div>
                <div className="text-white/80 text-sm font-medium">Design</div>
                <div className="text-white/40 text-xs">0:03</div>
              </div>
              <div className="animate-[fadeIn_1s_ease-in_1s] opacity-0 [animation-fill-mode:forwards]">
                <div className="text-pink-400 text-3xl mb-2">✍️</div>
                <div className="text-white/80 text-sm font-medium">Typography</div>
                <div className="text-white/40 text-xs">0:06</div>
              </div>
              <div className="animate-[fadeIn_1s_ease-in_1.5s] opacity-0 [animation-fill-mode:forwards]">
                <div className="text-green-400 text-3xl mb-2">✓</div>
                <div className="text-white/80 text-sm font-medium">Complete</div>
                <div className="text-white/40 text-xs">0:08</div>
              </div>
            </div>
          </div>

          {/* Caption Below */}
          <div className="text-center mt-6">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
              Professional thumbnail in seconds
            </h3>
            <p className="text-purple-300 text-lg">
              Watch the magic happen
            </p>
          </div>
        </div>
      </div>

      {/* Speed Indicator */}
      <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
        <div className="text-white font-bold text-xl">
          <span className="text-purple-400">8.2</span> seconds
        </div>
      </div>

      {/* Subtle Made Logo */}
      <div className="absolute bottom-8 right-8 opacity-40">
        <img
          src="/made-logo-horizontal.svg"
          alt="Made"
          className="h-10"
        />
      </div>

      {/* Floating particles effect */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-[float_3s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-[float_4s_ease-in-out_infinite_0.5s]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-[float_3.5s_ease-in-out_infinite_1s]"></div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeOut {
          from { opacity: 0.1; }
          to { opacity: 0; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translate(-50%, -40%); }
          to { opacity: 1; transform: translate(-50%, -50%); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -30px); }
        }
      `}</style>
    </div>
  );
};
