import React from 'react';

export const WhoopsPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
      {/* Main Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">

        {/* Top Realization Text */}
        <div className="text-center mb-12 max-w-3xl">
          <div className="text-slate-600 text-2xl md:text-3xl mb-6 font-medium">
            That feeling when you realize
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-8">
            You've Been Doing It<br />
            <span className="text-orange-600">The Hard Way</span>
          </h1>
        </div>

        {/* Visual Representation - The Realization Moment */}
        <div className="relative mb-12">
          {/* Mind Blown Animation */}
          <div className="text-9xl mb-8 animate-[pop_0.6s_ease-out]">
            🤯
          </div>

          {/* Explosion Effects */}
          <div className="absolute -top-8 -left-8 text-4xl animate-[float_2s_ease-in-out_infinite]">💥</div>
          <div className="absolute -top-4 -right-4 text-3xl animate-[float_2s_ease-in-out_infinite_0.3s]">✨</div>
          <div className="absolute -bottom-4 -left-4 text-3xl animate-[float_2s_ease-in-out_infinite_0.6s]">💫</div>
          <div className="absolute -bottom-8 -right-8 text-4xl animate-[float_2s_ease-in-out_infinite_0.9s]">⚡</div>
        </div>

        {/* The Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mb-8">
          {/* What I Was Doing */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-red-200 transform rotate-[-2deg]">
            <div className="text-red-600 font-bold text-xl mb-6 flex items-center gap-3">
              <span className="text-4xl">😓</span>
              <span>What I Was Doing</span>
            </div>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                <span>Spending 6 hours on ONE video</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                <span>Editing thumbnails until 3am</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                <span>Guessing which titles would work</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                <span>Burnout every other week</span>
              </li>
            </ul>
          </div>

          {/* What I Could've Been Doing */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 border-4 border-green-300 transform rotate-[2deg]">
            <div className="text-green-600 font-bold text-xl mb-6 flex items-center gap-3">
              <span className="text-4xl">🎉</span>
              <span>What I Could've Been Doing</span>
            </div>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span>Focusing on creating, not editing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span>Sleeping like a normal person</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span>Data-driven content decisions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                <span>Actually enjoying the process</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Revelation */}
        <div className="text-center max-w-3xl">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 border-2 border-purple-200 shadow-lg">
            <div className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              I lost MONTHS doing it manually
            </div>
            <div className="text-slate-600 text-lg">
              when I could've had a whole team handling it
            </div>

            {/* Agent Team Avatars */}
            <div className="flex justify-center items-center gap-3 mt-6">
              <img
                src="/agents/Milo-static.png"
                alt="Milo"
                className="w-14 h-14 rounded-full border-3 border-white shadow-lg transform hover:scale-110 transition-transform"
              />
              <img
                src="/agents/Ivy-static.png"
                alt="Ivy"
                className="w-14 h-14 rounded-full border-3 border-white shadow-lg transform hover:scale-110 transition-transform"
              />
              <img
                src="/agents/Remi-static.png"
                alt="Remi"
                className="w-14 h-14 rounded-full border-3 border-white shadow-lg transform hover:scale-110 transition-transform"
              />
              <img
                src="/agents/Quinn-static.png"
                alt="Quinn"
                className="w-14 h-14 rounded-full border-3 border-white shadow-lg transform hover:scale-110 transition-transform"
              />
              <img
                src="/agents/Lila-static.png"
                alt="Lila"
                className="w-14 h-14 rounded-full border-3 border-white shadow-lg transform hover:scale-110 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Made Logo */}
      <div className="absolute top-8 right-8 opacity-30">
        <img
          src="/made-logo-horizontal.svg"
          alt="Made"
          className="h-8"
        />
      </div>

      <style jsx>{`
        @keyframes pop {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); opacity: 0.7; }
          50% { transform: translate(-10px, -20px); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
