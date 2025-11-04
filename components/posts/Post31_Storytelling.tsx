import React from 'react';

export const StorytellingPost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-slate-800 via-slate-900 to-black overflow-hidden">
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.7)]"></div>

      {/* Story Container */}
      <div className="absolute inset-0 flex items-center justify-center p-8 overflow-y-auto">
        <div className="max-w-3xl space-y-12">

          {/* Chapter 1 - The Struggle */}
          <div className="animate-[fadeIn_1s_ease-in]">
            <div className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-3">
              Chapter 1: The Breaking Point
            </div>
            <div className="text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
              I used to spend 6 hours<br />
              on a single video
            </div>
            <div className="text-white/70 text-lg leading-relaxed space-y-4">
              <p>
                Every. Single. Day. I'd wake up at 6 AM, start editing by 7, and by noon I'd still be tweaking the same 30-second intro.
              </p>
              <p>
                My friends asked me to hang out. "Can't, I'm editing."
              </p>
              <p>
                My family wanted to grab dinner. "Sorry, I'm editing."
              </p>
              <p>
                I looked in the mirror and barely recognized the exhausted person staring back.
              </p>
            </div>
            <div className="mt-6 text-6xl opacity-30">😔</div>
          </div>

          {/* Visual Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-grow"></div>
            <div className="text-purple-400">✦</div>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-grow"></div>
          </div>

          {/* Chapter 2 - The Realization */}
          <div className="animate-[fadeIn_1s_ease-in_0.5s] opacity-0 [animation-fill-mode:forwards]">
            <div className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-3">
              Chapter 2: The Question
            </div>
            <div className="text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
              "What if I'm doing this<br />
              all wrong?"
            </div>
            <div className="text-white/70 text-lg leading-relaxed space-y-4">
              <p>
                It hit me at 2 AM on a Tuesday. I was color-grading footage for the third time when I realized...
              </p>
              <p className="text-white/90 italic font-medium">
                I didn't start creating content to become a video editor.
              </p>
              <p>
                I started because I had ideas. Stories. Things to share with the world.
              </p>
              <p>
                But somewhere along the way, I became a slave to the timeline instead of the storyteller I wanted to be.
              </p>
            </div>
            <div className="mt-6 text-6xl opacity-30">🤔</div>
          </div>

          {/* Visual Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-grow"></div>
            <div className="text-green-400">✦</div>
            <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-grow"></div>
          </div>

          {/* Chapter 3 - The Transformation */}
          <div className="animate-[fadeIn_1s_ease-in_1s] opacity-0 [animation-fill-mode:forwards]">
            <div className="text-green-400 text-sm font-bold uppercase tracking-wider mb-3">
              Chapter 3: The Shift
            </div>
            <div className="text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
              I built a team that<br />
              believed in my vision
            </div>
            <div className="text-white/70 text-lg leading-relaxed space-y-4">
              <p>
                Within 24 hours of letting go and trusting the process, everything changed.
              </p>
              <p>
                My team handled the editing. The thumbnails. The captions. The scheduling.
              </p>
              <p>
                And I? I finally got to do what I was meant to do.
              </p>
              <p className="text-white/90 font-medium text-xl">
                Create.
              </p>
            </div>

            {/* Team Showcase */}
            <div className="mt-8 grid grid-cols-4 gap-3">
              <div className="text-center">
                <img
                  src="/agents/Milo-static.png"
                  alt="Milo"
                  className="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-blue-400"
                />
                <div className="text-blue-400 text-xs font-semibold">Milo</div>
              </div>
              <div className="text-center">
                <img
                  src="/agents/Ivy-static.png"
                  alt="Ivy"
                  className="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-pink-400"
                />
                <div className="text-pink-400 text-xs font-semibold">Ivy</div>
              </div>
              <div className="text-center">
                <img
                  src="/agents/Remi-static.png"
                  alt="Remi"
                  className="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-purple-400"
                />
                <div className="text-purple-400 text-xs font-semibold">Remi</div>
              </div>
              <div className="text-center">
                <img
                  src="/agents/Quinn-static.png"
                  alt="Quinn"
                  className="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-green-400"
                />
                <div className="text-green-400 text-xs font-semibold">Quinn</div>
              </div>
            </div>

            <div className="mt-6 text-6xl opacity-30">✨</div>
          </div>

          {/* Visual Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent flex-grow"></div>
            <div className="text-yellow-400">✦</div>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent flex-grow"></div>
          </div>

          {/* Chapter 4 - The Now */}
          <div className="animate-[fadeIn_1s_ease-in_1.5s] opacity-0 [animation-fill-mode:forwards]">
            <div className="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-3">
              Chapter 4: Today
            </div>
            <div className="text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
              I create more than ever
            </div>
            <div className="text-white/70 text-lg leading-relaxed space-y-4">
              <p>
                Last week, I published 8 videos. All of them better than anything I made in my "grind" days.
              </p>
              <p>
                I had dinner with my family three times. Went to the gym. Read a book.
              </p>
              <p>
                I'm not just productive anymore.
              </p>
              <p className="text-white text-2xl font-bold">
                I'm alive again.
              </p>
            </div>
            <div className="mt-6 text-6xl opacity-50">🚀</div>
          </div>

          {/* Final Message */}
          <div className="mt-16 bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="text-white/60 text-sm mb-3 italic">
              The moral of the story?
            </div>
            <div className="text-white text-2xl md:text-3xl font-bold leading-tight">
              You're not supposed to do<br />
              everything yourself
            </div>
            <div className="text-white/70 text-lg mt-4">
              You're supposed to do what only you can do:<br />
              <span className="text-purple-400 font-semibold">Create magic</span>
            </div>
          </div>

          {/* Spacer for scroll */}
          <div className="h-16"></div>
        </div>
      </div>

      {/* Subtle Made Logo */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-20">
        <img
          src="/made-logo-horizontal.svg"
          alt="Made"
          className="h-6"
        />
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
