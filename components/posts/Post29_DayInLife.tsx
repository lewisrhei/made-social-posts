import React from 'react';

export const DayInLifePost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-sky-100 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Title */}
      <div className="absolute top-8 left-0 right-0 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">
          My Day as a Creator
        </h1>
        <div className="text-slate-600 text-xl italic">Plot twist included</div>
      </div>

      {/* Timeline Container */}
      <div className="absolute inset-0 pt-32 pb-8 px-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* 8:00 AM */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-32 text-right">
              <div className="text-3xl font-bold text-slate-700">8:00 AM</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg flex-grow border-l-4 border-blue-400">
              <div className="text-xl font-semibold text-slate-800 mb-2">Wake up, check ideas</div>
              <div className="text-slate-600">Coffee in hand, ready to brainstorm content</div>
              <div className="mt-3 text-4xl">☕ 📝</div>
            </div>
          </div>

          {/* 9:00 AM */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-32 text-right">
              <div className="text-3xl font-bold text-slate-700">9:00 AM</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg flex-grow border-l-4 border-purple-400">
              <div className="text-xl font-semibold text-slate-800 mb-2">Review what my team made</div>
              <div className="text-slate-600">Thumbnails, captions, edits... already done?!</div>
              <div className="flex gap-3 mt-3">
                <img src="/agents/Ivy-static.png" alt="Ivy" className="w-10 h-10 rounded-full" />
                <img src="/agents/Milo-static.png" alt="Milo" className="w-10 h-10 rounded-full" />
                <img src="/agents/Remi-static.png" alt="Remi" className="w-10 h-10 rounded-full" />
              </div>
            </div>
          </div>

          {/* 10:00 AM */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-32 text-right">
              <div className="text-3xl font-bold text-slate-700">10:00 AM</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg flex-grow border-l-4 border-green-400">
              <div className="text-xl font-semibold text-slate-800 mb-2">Actually create content</div>
              <div className="text-slate-600">You know, the fun part I actually enjoy</div>
              <div className="mt-3 text-4xl">🎥 😊</div>
            </div>
          </div>

          {/* 12:00 PM */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-32 text-right">
              <div className="text-3xl font-bold text-slate-700">12:00 PM</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg flex-grow border-l-4 border-orange-400">
              <div className="text-xl font-semibold text-slate-800 mb-2">
                <s>Editing</s> Lunch break
              </div>
              <div className="text-slate-600">Because editing is already handled</div>
              <div className="mt-3 text-4xl">🍕 ✅</div>
            </div>
          </div>

          {/* 2:00 PM */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-32 text-right">
              <div className="text-3xl font-bold text-slate-700">2:00 PM</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg flex-grow border-l-4 border-pink-400">
              <div className="text-xl font-semibold text-slate-800 mb-2">
                <s>Still editing</s> More creating
              </div>
              <div className="text-slate-600">What is this feeling? Is it... freedom?</div>
              <div className="mt-3 text-4xl">🎬 💡</div>
            </div>
          </div>

          {/* 4:00 PM */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-32 text-right">
              <div className="text-3xl font-bold text-slate-700">4:00 PM</div>
            </div>
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 shadow-lg flex-grow border-l-4 border-yellow-500 border-4">
              <div className="text-xl font-semibold text-slate-800 mb-2 flex items-center gap-2">
                <span>Oh wait, my team did it all</span>
                <span className="text-3xl">🤯</span>
              </div>
              <div className="text-slate-600 font-medium">
                I just realized I have zero editing left to do
              </div>
              <div className="mt-4 bg-white/60 rounded-lg p-4">
                <div className="text-sm text-slate-700 space-y-1">
                  <div className="flex justify-between">
                    <span>✓ Video edited</span>
                    <span className="text-green-600">Milo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>✓ Thumbnail designed</span>
                    <span className="text-pink-600">Ivy</span>
                  </div>
                  <div className="flex justify-between">
                    <span>✓ Captions written</span>
                    <span className="text-purple-600">Remi</span>
                  </div>
                  <div className="flex justify-between">
                    <span>✓ SEO optimized</span>
                    <span className="text-green-600">Quinn</span>
                  </div>
                  <div className="flex justify-between">
                    <span>✓ Scheduled</span>
                    <span className="text-teal-600">Amie</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6:00 PM */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-32 text-right">
              <div className="text-3xl font-bold text-slate-700">6:00 PM</div>
            </div>
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 shadow-lg flex-grow border-l-4 border-green-500">
              <div className="text-xl font-semibold text-slate-800 mb-2">Actually relaxing</div>
              <div className="text-slate-600">This feels illegal but I'm here for it</div>
              <div className="mt-3 text-4xl">🎮 📺 🛋️</div>
            </div>
          </div>

          {/* 10:00 PM */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-32 text-right">
              <div className="text-3xl font-bold text-slate-700">10:00 PM</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-6 shadow-lg flex-grow border-l-4 border-indigo-500">
              <div className="text-xl font-semibold text-slate-800 mb-2">Sleep at a normal time</div>
              <div className="text-slate-600">No all-nighters. No burnout. Just... living?</div>
              <div className="mt-3 text-4xl">😴 ✨</div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-center text-white shadow-2xl">
            <div className="text-3xl font-bold mb-3">
              This used to take until 2 AM
            </div>
            <div className="text-xl opacity-90">
              Now I'm done by noon and actually enjoy creating again
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
    </div>
  );
};
