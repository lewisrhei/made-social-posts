import React from 'react';

export const RelatableQuotePost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-rose-100 via-orange-50 to-amber-100 overflow-hidden">
      {/* Soft Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-transparent rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-200 to-transparent rounded-full blur-3xl opacity-40"></div>

      {/* Main Quote Container */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="max-w-4xl w-full relative">

          {/* Opening Quote Mark */}
          <div className="absolute -top-12 -left-8 text-9xl text-slate-300 font-serif leading-none">
            "
          </div>

          {/* Main Quote */}
          <div className="text-center mb-12 relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight mb-8">
              Creativity shouldn't be<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600">
                buried in busy work
              </span>
            </h1>
          </div>

          {/* Closing Quote Mark */}
          <div className="absolute -bottom-12 -right-8 text-9xl text-slate-300 font-serif leading-none">
            "
          </div>

          {/* Subtle Agent in Background - Supportive Role */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-2xl opacity-50"></div>
              <img
                src="/agents/Remi-static.png"
                alt="Remi"
                className="w-32 h-32 rounded-full opacity-60 relative z-10"
              />
            </div>
          </div>

          {/* Supporting Text */}
          <div className="text-center">
            <p className="text-slate-600 text-xl md:text-2xl font-light italic">
              Your ideas deserve the spotlight, not the editing timeline
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Minimal & Beautiful */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-rose-400 rounded-full opacity-60"></div>
      <div className="absolute top-32 right-32 w-2 h-2 bg-orange-400 rounded-full opacity-50"></div>
      <div className="absolute bottom-24 left-24 w-3 h-3 bg-pink-400 rounded-full opacity-60"></div>
      <div className="absolute bottom-40 left-16 w-2 h-2 bg-rose-400 rounded-full opacity-50"></div>

      {/* Floating Subtle Shapes */}
      <div className="absolute top-1/3 left-12 animate-[gentle-float_6s_ease-in-out_infinite]">
        <div className="w-16 h-16 border-2 border-orange-300 rounded-full opacity-30"></div>
      </div>
      <div className="absolute bottom-1/3 right-16 animate-[gentle-float_7s_ease-in-out_infinite_1s]">
        <div className="w-20 h-20 border-2 border-rose-300 rounded-full opacity-30"></div>
      </div>

      {/* Very Subtle Made Logo - Blended */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-20">
        <img
          src="/made-logo-horizontal.svg"
          alt="Made"
          className="h-6"
        />
      </div>

      <style jsx>{`
        @keyframes gentle-float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(10px, -10px) rotate(5deg);
          }
          66% {
            transform: translate(-10px, 10px) rotate(-5deg);
          }
        }
      `}</style>
    </div>
  );
};
