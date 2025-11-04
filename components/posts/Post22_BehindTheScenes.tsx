import React from 'react';

export const BehindTheScenesPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* POV Text Overlay */}
      <div className="absolute top-8 left-8 z-20">
        <div className="text-white font-bold text-4xl md:text-5xl leading-tight">
          <span className="text-purple-300">POV:</span> You wake up to<br />
          all your content tasks...<br />
          <span className="text-green-400">done ✓</span>
        </div>
      </div>

      {/* Timelapse Grid Effect */}
      <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8 pt-48">
        {/* Task Card 1 - Thumbnail Design */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-[fadeIn_0.5s_ease-in]">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/agents/Ivy-static.png"
              alt="Ivy"
              className="w-12 h-12 rounded-full border-2 border-green-400"
            />
            <div>
              <div className="text-white font-semibold">Thumbnail Design</div>
              <div className="text-green-400 text-sm">Completed 6:42 AM</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-purple-500 h-32 rounded-lg"></div>
        </div>

        {/* Task Card 2 - Video Editing */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-[fadeIn_0.8s_ease-in]">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/agents/Milo-static.png"
              alt="Milo"
              className="w-12 h-12 rounded-full border-2 border-green-400"
            />
            <div>
              <div className="text-white font-semibold">Video Editing</div>
              <div className="text-green-400 text-sm">Completed 7:15 AM</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 h-32 rounded-lg flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
            </svg>
          </div>
        </div>

        {/* Task Card 3 - Captions */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-[fadeIn_1.1s_ease-in]">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/agents/Remi-static.png"
              alt="Remi"
              className="w-12 h-12 rounded-full border-2 border-green-400"
            />
            <div>
              <div className="text-white font-semibold">Captions Written</div>
              <div className="text-green-400 text-sm">Completed 7:33 AM</div>
            </div>
          </div>
          <div className="text-white/80 text-sm space-y-2">
            <div className="h-2 bg-white/30 rounded w-full"></div>
            <div className="h-2 bg-white/30 rounded w-5/6"></div>
            <div className="h-2 bg-white/30 rounded w-4/6"></div>
          </div>
        </div>

        {/* Task Card 4 - SEO Optimization */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-[fadeIn_1.4s_ease-in]">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/agents/Quinn-static.png"
              alt="Quinn"
              className="w-12 h-12 rounded-full border-2 border-green-400"
            />
            <div>
              <div className="text-white font-semibold">SEO Optimized</div>
              <div className="text-green-400 text-sm">Completed 8:01 AM</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white/70">Keywords</span>
              <span className="text-green-400">100%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/70">Tags</span>
              <span className="text-green-400">100%</span>
            </div>
          </div>
        </div>

        {/* Task Card 5 - Scheduling */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-[fadeIn_1.7s_ease-in]">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/agents/Amie-static.png"
              alt="Amie"
              className="w-12 h-12 rounded-full border-2 border-green-400"
            />
            <div>
              <div className="text-white font-semibold">Content Scheduled</div>
              <div className="text-green-400 text-sm">Completed 8:22 AM</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📅</div>
            <div className="text-white/80 text-sm">Next 7 days queued</div>
          </div>
        </div>

        {/* Task Card 6 - Analytics */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-[fadeIn_2s_ease-in]">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/agents/Zara-static.png"
              alt="Zara"
              className="w-12 h-12 rounded-full border-2 border-green-400"
            />
            <div>
              <div className="text-white font-semibold">Reports Ready</div>
              <div className="text-green-400 text-sm">Completed 8:45 AM</div>
            </div>
          </div>
          <div className="flex items-end gap-1 h-20">
            <div className="bg-green-400 w-1/5 h-3/5 rounded-t"></div>
            <div className="bg-green-400 w-1/5 h-4/5 rounded-t"></div>
            <div className="bg-green-400 w-1/5 h-full rounded-t"></div>
            <div className="bg-green-400 w-1/5 h-2/5 rounded-t"></div>
            <div className="bg-green-400 w-1/5 h-3/5 rounded-t"></div>
          </div>
        </div>
      </div>

      {/* Time Display */}
      <div className="absolute bottom-8 left-8 text-white/60 text-xl">
        8:47 AM
      </div>

      {/* Subtle Made Logo */}
      <div className="absolute bottom-8 right-8 opacity-40">
        <img
          src="/made-logo-horizontal.svg"
          alt="Made"
          className="h-8"
        />
      </div>

      {/* Sparkle Effects */}
      <div className="absolute top-1/4 right-1/4 text-4xl animate-pulse">✨</div>
      <div className="absolute bottom-1/3 left-1/4 text-3xl animate-pulse delay-300">✨</div>
    </div>
  );
};
