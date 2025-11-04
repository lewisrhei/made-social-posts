import React from 'react';

export const TeamIntroPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 overflow-hidden">
      {/* Office Comedy Style Header */}
      <div className="absolute top-8 left-8 right-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-3">
          Meet My Team
        </h1>
        <div className="text-slate-600 text-xl md:text-2xl">
          They work 24/7 and never complain about coffee
        </div>
      </div>

      {/* Team Grid - Office Style */}
      <div className="absolute inset-0 pt-40 pb-8 px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">

          {/* Milo - Video Editor */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all hover:scale-105 transform rotate-[-1deg]">
            <img
              src="/agents/Milo-static.png"
              alt="Milo"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-400"
            />
            <div className="text-center">
              <h3 className="font-bold text-xl text-slate-900 mb-1">Milo</h3>
              <div className="text-blue-600 font-semibold mb-3">Video Editor</div>
              <div className="text-slate-600 text-sm mb-3">
                "I edit while you sleep. You're welcome."
              </div>
              <div className="text-xs text-slate-500">
                Edits: 10,847 videos<br />
                Late nights: 0
              </div>
            </div>
          </div>

          {/* Ivy - Designer */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all hover:scale-105 transform rotate-[1deg]">
            <img
              src="/agents/Ivy-static.png"
              alt="Ivy"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-pink-400"
            />
            <div className="text-center">
              <h3 className="font-bold text-xl text-slate-900 mb-1">Ivy</h3>
              <div className="text-pink-600 font-semibold mb-3">Design Lead</div>
              <div className="text-slate-600 text-sm mb-3">
                "Your thumbnails but actually good."
              </div>
              <div className="text-xs text-slate-500">
                Designs: 8,392 thumbs<br />
                Design blocks: 0
              </div>
            </div>
          </div>

          {/* Remi - Writer */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all hover:scale-105 transform rotate-[-0.5deg]">
            <img
              src="/agents/Remi-static.png"
              alt="Remi"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-400"
            />
            <div className="text-center">
              <h3 className="font-bold text-xl text-slate-900 mb-1">Remi</h3>
              <div className="text-purple-600 font-semibold mb-3">Head Writer</div>
              <div className="text-slate-600 text-sm mb-3">
                "I write captions that actually convert."
              </div>
              <div className="text-xs text-slate-500">
                Captions: 12,456<br />
                Writer's block: Never heard of it
              </div>
            </div>
          </div>

          {/* Quinn - SEO Expert */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all hover:scale-105 transform rotate-[0.5deg]">
            <img
              src="/agents/Quinn-static.png"
              alt="Quinn"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-400"
            />
            <div className="text-center">
              <h3 className="font-bold text-xl text-slate-900 mb-1">Quinn</h3>
              <div className="text-green-600 font-semibold mb-3">SEO Wizard</div>
              <div className="text-slate-600 text-sm mb-3">
                "I make the algorithm love you."
              </div>
              <div className="text-xs text-slate-500">
                Optimizations: 9,234<br />
                Algorithm updates: Always on it
              </div>
            </div>
          </div>

          {/* Lila - Strategist */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all hover:scale-105 transform rotate-[1deg]">
            <img
              src="/agents/Lila-static.png"
              alt="Lila"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-yellow-400"
            />
            <div className="text-center">
              <h3 className="font-bold text-xl text-slate-900 mb-1">Lila</h3>
              <div className="text-yellow-600 font-semibold mb-3">Strategist</div>
              <div className="text-slate-600 text-sm mb-3">
                "Data-driven or don't bother."
              </div>
              <div className="text-xs text-slate-500">
                Strategies: 5,671<br />
                Bad advice: 0%
              </div>
            </div>
          </div>

          {/* Enzo - Producer */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all hover:scale-105 transform rotate-[-1deg]">
            <img
              src="/agents/Enzo-static.png"
              alt="Enzo"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-orange-400"
            />
            <div className="text-center">
              <h3 className="font-bold text-xl text-slate-900 mb-1">Enzo</h3>
              <div className="text-orange-600 font-semibold mb-3">Producer</div>
              <div className="text-slate-600 text-sm mb-3">
                "I keep this ship running smooth."
              </div>
              <div className="text-xs text-slate-500">
                Projects: 4,892 managed<br />
                Missed deadlines: None
              </div>
            </div>
          </div>

          {/* Amie - Scheduler */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all hover:scale-105 transform rotate-[0.5deg]">
            <img
              src="/agents/Amie-static.png"
              alt="Amie"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-teal-400"
            />
            <div className="text-center">
              <h3 className="font-bold text-xl text-slate-900 mb-1">Amie</h3>
              <div className="text-teal-600 font-semibold mb-3">Coordinator</div>
              <div className="text-slate-600 text-sm mb-3">
                "Perfect timing, every time."
              </div>
              <div className="text-xs text-slate-500">
                Posts scheduled: 15,329<br />
                Wrong time zones: 0
              </div>
            </div>
          </div>

          {/* Zara - Analyst */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all hover:scale-105 transform rotate-[-0.5deg]">
            <img
              src="/agents/Zara-static.png"
              alt="Zara"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-red-400"
            />
            <div className="text-center">
              <h3 className="font-bold text-xl text-slate-900 mb-1">Zara</h3>
              <div className="text-red-600 font-semibold mb-3">Data Analyst</div>
              <div className="text-slate-600 text-sm mb-3">
                "Numbers don't lie, and neither do I."
              </div>
              <div className="text-xs text-slate-500">
                Reports: 7,234<br />
                Spreadsheets loved: All of them
              </div>
            </div>
          </div>
        </div>

        {/* Fun Footer */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg">
            <div className="text-2xl font-bold text-slate-800 mb-2">
              Best part? No HR complaints
            </div>
            <div className="text-slate-600 text-lg">
              They don't fight over the thermostat or steal lunch from the fridge
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

      {/* Fun decorative elements */}
      <div className="absolute bottom-4 left-4 text-2xl opacity-30">☕</div>
      <div className="absolute bottom-4 right-4 text-2xl opacity-30">💼</div>
    </div>
  );
};
