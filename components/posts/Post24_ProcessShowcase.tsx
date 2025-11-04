import React from 'react';

export const ProcessShowcasePost: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden">
      {/* Title */}
      <div className="absolute top-8 left-0 right-0 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
          How I Actually Create Content Now
        </h2>
        <div className="text-slate-500 text-xl">Before vs. After</div>
      </div>

      {/* Split Screen */}
      <div className="absolute inset-0 flex pt-32">
        {/* BEFORE Side - Left (Chaotic) */}
        <div className="w-1/2 bg-gradient-to-br from-red-50 to-orange-50 border-r-4 border-slate-300 p-8 overflow-hidden">
          <div className="text-center mb-8">
            <div className="inline-block bg-red-500 text-white px-6 py-3 rounded-full font-bold text-2xl mb-4">
              BEFORE
            </div>
            <div className="text-red-600 font-semibold text-lg">The Old Way</div>
          </div>

          {/* Chaotic Workflow */}
          <div className="space-y-6 max-w-md mx-auto">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <div className="font-semibold text-slate-800 mb-1">Brainstorm ideas</div>
                <div className="text-red-600 text-sm">⏱️ 2 hours (brain fried)</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <div className="font-semibold text-slate-800 mb-1">Edit raw footage</div>
                <div className="text-red-600 text-sm">⏱️ 4 hours (still looks meh)</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <div className="font-semibold text-slate-800 mb-1">Design thumbnail in Photoshop</div>
                <div className="text-red-600 text-sm">⏱️ 1.5 hours (gave up on perfection)</div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-4">
              <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <div className="font-semibold text-slate-800 mb-1">Write title & description</div>
                <div className="text-red-600 text-sm">⏱️ 45 mins (overthinking)</div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start gap-4">
              <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                5
              </div>
              <div>
                <div className="font-semibold text-slate-800 mb-1">Schedule & pray</div>
                <div className="text-red-600 text-sm">⏱️ 15 mins (fingers crossed)</div>
              </div>
            </div>

            {/* Total */}
            <div className="border-t-4 border-red-300 pt-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">8+ HOURS</div>
                <div className="text-slate-600 text-sm">per video 😭</div>
              </div>
            </div>
          </div>

          {/* Stressed emoji */}
          <div className="absolute bottom-8 left-1/4 transform -translate-x-1/2 text-6xl opacity-50">
            😰
          </div>
        </div>

        {/* AFTER Side - Right (Clean) */}
        <div className="w-1/2 bg-gradient-to-br from-emerald-50 to-teal-50 p-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-bold text-2xl mb-4">
              AFTER
            </div>
            <div className="text-green-600 font-semibold text-lg">With My Team</div>
          </div>

          {/* Clean Workflow with Agents */}
          <div className="space-y-6 max-w-md mx-auto">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <img
                src="/agents/Remi-static.png"
                alt="Remi"
                className="w-12 h-12 rounded-full border-2 border-green-500 flex-shrink-0"
              />
              <div>
                <div className="font-semibold text-slate-800 mb-1">Ideas generated</div>
                <div className="text-green-600 text-sm">⏱️ 5 mins (10+ concepts)</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <img
                src="/agents/Milo-static.png"
                alt="Milo"
                className="w-12 h-12 rounded-full border-2 border-green-500 flex-shrink-0"
              />
              <div>
                <div className="font-semibold text-slate-800 mb-1">Editing done</div>
                <div className="text-green-600 text-sm">⏱️ Auto (while I sleep)</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <img
                src="/agents/Ivy-static.png"
                alt="Ivy"
                className="w-12 h-12 rounded-full border-2 border-green-500 flex-shrink-0"
              />
              <div>
                <div className="font-semibold text-slate-800 mb-1">Thumbnail ready</div>
                <div className="text-green-600 text-sm">⏱️ 10 mins (pro quality)</div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-4">
              <img
                src="/agents/Quinn-static.png"
                alt="Quinn"
                className="w-12 h-12 rounded-full border-2 border-green-500 flex-shrink-0"
              />
              <div>
                <div className="font-semibold text-slate-800 mb-1">SEO optimized</div>
                <div className="text-green-600 text-sm">⏱️ Instant (data-driven)</div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start gap-4">
              <img
                src="/agents/Amie-static.png"
                alt="Amie"
                className="w-12 h-12 rounded-full border-2 border-green-500 flex-shrink-0"
              />
              <div>
                <div className="font-semibold text-slate-800 mb-1">Scheduled perfectly</div>
                <div className="text-green-600 text-sm">⏱️ Auto (best posting times)</div>
              </div>
            </div>

            {/* Total */}
            <div className="border-t-4 border-green-300 pt-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">~30 MINUTES</div>
                <div className="text-slate-600 text-sm">just reviewing & approving</div>
              </div>
            </div>
          </div>

          {/* Happy emoji */}
          <div className="absolute bottom-8 right-1/4 transform translate-x-1/2 text-6xl opacity-50">
            😎
          </div>
        </div>
      </div>

      {/* Subtle Made Logo */}
      <div className="absolute top-8 right-8 opacity-40">
        <img
          src="/made-logo-horizontal.svg"
          alt="Made"
          className="h-8"
        />
      </div>
    </div>
  );
};
