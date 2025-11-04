'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Download, Grid3x3 } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import post components
const NeilPatelPost = dynamic(() => import('@/components/posts/NeilPatelPost').then(mod => mod.NeilPatelPost))
const RyanDeissPost = dynamic(() => import('@/components/posts/RyanDeissPost').then(mod => mod.RyanDeissPost))
const RandFishkinPost = dynamic(() => import('@/components/posts/RandFishkinPost').then(mod => mod.RandFishkinPost))
const SethGodinPost = dynamic(() => import('@/components/posts/SethGodinPost').then(mod => mod.SethGodinPost))
const DonaldMillerPost = dynamic(() => import('@/components/posts/DonaldMillerPost').then(mod => mod.DonaldMillerPost))
const AnnHandleyPost = dynamic(() => import('@/components/posts/AnnHandleyPost').then(mod => mod.AnnHandleyPost))
const GaryVaynerchukPost = dynamic(() => import('@/components/posts/GaryVaynerchukPost').then(mod => mod.GaryVaynerchukPost))
const GrantCardonePost = dynamic(() => import('@/components/posts/GrantCardonePost').then(mod => mod.GrantCardonePost))
const AlexHormoziPost = dynamic(() => import('@/components/posts/AlexHormoziPost').then(mod => mod.AlexHormoziPost))
const AprilDunfordPost = dynamic(() => import('@/components/posts/AprilDunfordPost').then(mod => mod.AprilDunfordPost))
const AlRiesPost = dynamic(() => import('@/components/posts/AlRiesPost').then(mod => mod.AlRiesPost))
const ByronSharpPost = dynamic(() => import('@/components/posts/ByronSharpPost').then(mod => mod.ByronSharpPost))
const JayBaerPost = dynamic(() => import('@/components/posts/JayBaerPost').then(mod => mod.JayBaerPost))
const JonahBergerPost = dynamic(() => import('@/components/posts/JonahBergerPost').then(mod => mod.JonahBergerPost))
const MariSmithPost = dynamic(() => import('@/components/posts/MariSmithPost').then(mod => mod.MariSmithPost))
const BernadetteJiwaPost = dynamic(() => import('@/components/posts/BernadetteJiwaPost').then(mod => mod.BernadetteJiwaPost))
const MarkRitsonPost = dynamic(() => import('@/components/posts/MarkRitsonPost').then(mod => mod.MarkRitsonPost))
const BobHoffmanPost = dynamic(() => import('@/components/posts/BobHoffmanPost').then(mod => mod.BobHoffmanPost))
const DanKennedyPost = dynamic(() => import('@/components/posts/DanKennedyPost').then(mod => mod.DanKennedyPost))
const RussellBrunsonPost = dynamic(() => import('@/components/posts/RussellBrunsonPost').then(mod => mod.RussellBrunsonPost))
const FrankKernPost = dynamic(() => import('@/components/posts/FrankKernPost').then(mod => mod.FrankKernPost))

const posts = [
  { id: 1, name: 'Neil Patel', category: 'Data-Driven', component: NeilPatelPost, color: 'from-blue-600 to-indigo-700' },
  { id: 2, name: 'Ryan Deiss', category: 'Systems', component: RyanDeissPost, color: 'from-cyan-600 to-blue-700' },
  { id: 3, name: 'Rand Fishkin', category: 'Transparent', component: RandFishkinPost, color: 'from-teal-600 to-cyan-700' },
  { id: 4, name: 'Seth Godin', category: 'Story', component: SethGodinPost, color: 'from-purple-600 to-indigo-700' },
  { id: 5, name: 'Donald Miller', category: 'StoryBrand', component: DonaldMillerPost, color: 'from-indigo-600 to-purple-700' },
  { id: 6, name: 'Ann Handley', category: 'Authentic', component: AnnHandleyPost, color: 'from-pink-600 to-rose-700' },
  { id: 7, name: 'Gary Vaynerchuk', category: 'Hustle', component: GaryVaynerchukPost, color: 'from-orange-600 to-red-700' },
  { id: 8, name: 'Grant Cardone', category: '10X', component: GrantCardonePost, color: 'from-green-600 to-emerald-700' },
  { id: 9, name: 'Alex Hormozi', category: 'Value', component: AlexHormoziPost, color: 'from-red-600 to-orange-700' },
  { id: 10, name: 'April Dunford', category: 'Positioning', component: AprilDunfordPost, color: 'from-violet-600 to-purple-700' },
  { id: 11, name: 'Al Ries', category: '22 Laws', component: AlRiesPost, color: 'from-slate-600 to-gray-700' },
  { id: 12, name: 'Byron Sharp', category: 'Evidence', component: ByronSharpPost, color: 'from-blue-600 to-cyan-700' },
  { id: 13, name: 'Jay Baer', category: 'Youtility', component: JayBaerPost, color: 'from-sky-600 to-blue-700' },
  { id: 14, name: 'Jonah Berger', category: 'Contagious', component: JonahBergerPost, color: 'from-emerald-600 to-green-700' },
  { id: 15, name: 'Mari Smith', category: 'Social', component: MariSmithPost, color: 'from-blue-600 to-indigo-700' },
  { id: 16, name: 'Bernadette Jiwa', category: 'Empathy', component: BernadetteJiwaPost, color: 'from-rose-600 to-pink-700' },
  { id: 17, name: 'Mark Ritson', category: 'No-BS', component: MarkRitsonPost, color: 'from-red-600 to-rose-700' },
  { id: 18, name: 'Bob Hoffman', category: 'Contrarian', component: BobHoffmanPost, color: 'from-amber-600 to-orange-700' },
  { id: 19, name: 'Dan Kennedy', category: 'Direct Response', component: DanKennedyPost, color: 'from-yellow-600 to-amber-700' },
  { id: 20, name: 'Russell Brunson', category: 'Funnels', component: RussellBrunsonPost, color: 'from-purple-600 to-fuchsia-700' },
  { id: 21, name: 'Frank Kern', category: 'Behavioral', component: FrankKernPost, color: 'from-orange-600 to-pink-700' },
]

export default function Home() {
  const [currentPost, setCurrentPost] = useState(0)
  const [showGrid, setShowGrid] = useState(false)

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPost()
      if (e.key === 'ArrowLeft') prevPost()
      if (e.key === 'g') setShowGrid(!showGrid)
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [showGrid])

  const nextPost = () => {
    setCurrentPost((prev) => (prev + 1) % posts.length)
  }

  const prevPost = () => {
    setCurrentPost((prev) => (prev - 1 + posts.length) % posts.length)
  }

  const CurrentComponent = posts[currentPost].component

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(120, 119, 198, 0.3), transparent 50%)',
        }} />
      </div>

      {/* Grid View Overlay */}
      <AnimatePresence>
        {showGrid && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 overflow-y-auto p-8"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-white text-2xl font-bold">All Posts ({posts.length})</h2>
                <button
                  onClick={() => setShowGrid(false)}
                  className="text-white/60 hover:text-white text-sm"
                >
                  Close (ESC)
                </button>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {posts.map((post, idx) => (
                  <motion.button
                    key={post.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03 }}
                    onClick={() => {
                      setCurrentPost(idx)
                      setShowGrid(false)
                    }}
                    className={`aspect-[9/16] rounded-lg bg-gradient-to-br ${post.color} p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform`}
                  >
                    <div className="text-white text-sm font-bold text-center">{post.name}</div>
                    <div className="text-white/60 text-xs mt-1">{post.category}</div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-6">
          <div className="text-white backdrop-blur-sm bg-black/30 px-4 py-2 rounded-full">
            <div className="text-sm font-semibold">{posts[currentPost].name}</div>
            <div className="text-xs text-white/60">{posts[currentPost].category}</div>
          </div>
          <div className="text-white/60 text-sm backdrop-blur-sm bg-black/30 px-4 py-2 rounded-full">
            {currentPost + 1} / {posts.length}
          </div>
        </div>

        {/* Post Container - 9:16 aspect ratio */}
        <div className="relative w-[375px] h-[667px] sm:w-[390px] sm:h-[844px] overflow-hidden rounded-3xl shadow-2xl border border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPost}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <CurrentComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-3 z-50">
          <button
            onClick={prevPost}
            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => setShowGrid(true)}
            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
          >
            <Grid3x3 className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextPost}
            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          <button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110">
            <Download className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Keyboard Hints */}
      <div className="fixed bottom-6 right-6 text-white/30 text-xs space-y-1 text-right">
        <div>← → Navigate</div>
        <div>G Grid view</div>
      </div>
    </div>
  )
}
