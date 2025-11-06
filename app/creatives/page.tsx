'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, Trash2, Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

// Dynamically import templates
const AestheticTemplate = dynamic(() => import('@/components/ad-templates/AestheticTemplate').then(mod => ({ default: mod.AestheticTemplate })))
const WordHeavyTemplate = dynamic(() => import('@/components/ad-templates/WordHeavyTemplate').then(mod => ({ default: mod.WordHeavyTemplate })))
const SimpleTemplate = dynamic(() => import('@/components/ad-templates/SimpleTemplate').then(mod => ({ default: mod.SimpleTemplate })))
const DataVizTemplate = dynamic(() => import('@/components/ad-templates/DataVizTemplate').then(mod => ({ default: mod.DataVizTemplate })))
const StorytellingTemplate = dynamic(() => import('@/components/ad-templates/StorytellingTemplate').then(mod => ({ default: mod.StorytellingTemplate })))
const MemeTemplate = dynamic(() => import('@/components/ad-templates/MemeTemplate').then(mod => ({ default: mod.MemeTemplate })))
const BeforeAfterTemplate = dynamic(() => import('@/components/ad-templates/BeforeAfterTemplate').then(mod => ({ default: mod.BeforeAfterTemplate })))
const TestimonialTemplate = dynamic(() => import('@/components/ad-templates/TestimonialTemplate').then(mod => ({ default: mod.TestimonialTemplate })))
const BoldCenterTemplate = dynamic(() => import('@/components/ad-templates/BoldCenterTemplate').then(mod => ({ default: mod.BoldCenterTemplate })))
const DynamicSplitTemplate = dynamic(() => import('@/components/ad-templates/DynamicSplitTemplate').then(mod => ({ default: mod.DynamicSplitTemplate })))
const MinimalistPosterTemplate = dynamic(() => import('@/components/ad-templates/MinimalistPosterTemplate').then(mod => ({ default: mod.MinimalistPosterTemplate })))
const GlitchModernTemplate = dynamic(() => import('@/components/ad-templates/GlitchModernTemplate').then(mod => ({ default: mod.GlitchModernTemplate })))
const SpotlightHeroTemplate = dynamic(() => import('@/components/ad-templates/SpotlightHeroTemplate').then(mod => ({ default: mod.SpotlightHeroTemplate })))
const ProductShowcaseTemplate = dynamic(() => import('@/components/ad-templates/ProductShowcaseTemplate').then(mod => ({ default: mod.ProductShowcaseTemplate })))
const FeatureSpotlightTemplate = dynamic(() => import('@/components/ad-templates/FeatureSpotlightTemplate').then(mod => ({ default: mod.FeatureSpotlightTemplate })))
const SplitScreenProductTemplate = dynamic(() => import('@/components/ad-templates/SplitScreenProductTemplate').then(mod => ({ default: mod.SplitScreenProductTemplate })))

const TEMPLATE_COMPONENTS: Record<string, any> = {
  'aesthetic': AestheticTemplate,
  'word-heavy': WordHeavyTemplate,
  'simple': SimpleTemplate,
  'data-viz': DataVizTemplate,
  'storytelling': StorytellingTemplate,
  'meme': MemeTemplate,
  'before-after': BeforeAfterTemplate,
  'testimonial': TestimonialTemplate,
  'bold-center': BoldCenterTemplate,
  'dynamic-split': DynamicSplitTemplate,
  'minimalist-poster': MinimalistPosterTemplate,
  'glitch-modern': GlitchModernTemplate,
  'spotlight-hero': SpotlightHeroTemplate,
  'product-showcase': ProductShowcaseTemplate,
  'feature-spotlight': FeatureSpotlightTemplate,
  'split-screen-product': SplitScreenProductTemplate
}

type Creative = {
  id: string
  timestamp: string
  hook: string
  template: string
  templateName: string
  narrative: string
  painPoint: string
  voiceName: string
  voiceType: 'agents' | 'marketers'
  voicePersonality?: string
  voiceStyle?: string
}

export default function CreativesGallery() {
  const router = useRouter()
  const [creatives, setCreatives] = useState<Creative[]>([])
  const [selectedCreative, setSelectedCreative] = useState<Creative | null>(null)

  useEffect(() => {
    // Load creatives from localStorage
    const savedCreatives = localStorage.getItem('made-creatives')
    if (savedCreatives) {
      setCreatives(JSON.parse(savedCreatives))
    }
  }, [])

  const deleteCreative = (id: string) => {
    const updatedCreatives = creatives.filter(c => c.id !== id)
    setCreatives(updatedCreatives)
    localStorage.setItem('made-creatives', JSON.stringify(updatedCreatives))
    if (selectedCreative?.id === id) {
      setSelectedCreative(null)
    }
  }

  const renderTemplate = (creative: Creative) => {
    const TemplateComponent = TEMPLATE_COMPONENTS[creative.template]
    if (!TemplateComponent) return null

    return (
      <TemplateComponent
        hook={creative.hook}
        voiceName={creative.voiceName}
        voicePersonality={creative.voicePersonality}
        voiceStyle={creative.voiceStyle}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-white text-2xl font-bold">Saved Creatives</h1>
            <p className="text-white/60 text-sm mt-1">{creatives.length} creatives saved</p>
          </div>
          <button
            onClick={() => router.push('/creator')}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform"
          >
            <Plus className="w-5 h-5" />
            Create New
          </button>
        </div>
      </div>

      {creatives.length === 0 ? (
        // Empty state
        <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
          <div className="text-center">
            <div className="text-white/40 text-lg mb-4">No saved creatives yet</div>
            <button
              onClick={() => router.push('/creator')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-bold hover:scale-105 transition-transform"
            >
              Create Your First Creative
            </button>
          </div>
        </div>
      ) : (
        // Grid of creatives
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {creatives.map((creative, idx) => (
              <motion.div
                key={creative.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="group relative"
              >
                <button
                  onClick={() => setSelectedCreative(creative)}
                  className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-gray-900 border border-white/10 hover:border-white/30 transition-all hover:scale-105 shadow-lg"
                >
                  {/* Thumbnail */}
                  <div className="w-full h-full scale-[0.4]" style={{ transformOrigin: 'top left', width: '250%', height: '250%' }}>
                    {renderTemplate(creative)}
                  </div>

                  {/* Info overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-white text-xs">
                      <div className="font-semibold truncate">{creative.templateName}</div>
                      <div className="text-white/60 truncate">{creative.voiceName}</div>
                    </div>
                  </div>
                </button>

                {/* Delete button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    if (confirm('Delete this creative?')) {
                      deleteCreative(creative.id)
                    }
                  }}
                  className="absolute top-2 right-2 p-2 bg-red-600/80 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 z-10"
                >
                  <Trash2 className="w-3 h-3 text-white" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Full view modal */}
      <AnimatePresence>
        {selectedCreative && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-8"
            onClick={() => setSelectedCreative(null)}
          >
            <div className="max-w-4xl w-full">
              <div className="flex items-start gap-8">
                {/* Preview */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="w-[360px] h-[640px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 flex-shrink-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  {renderTemplate(selectedCreative)}
                </motion.div>

                {/* Details */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="flex-1 space-y-6"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div>
                    <h2 className="text-white text-2xl font-bold mb-2">Creative Details</h2>
                    <p className="text-white/60 text-sm">
                      Created {new Date(selectedCreative.timestamp).toLocaleDateString()} at {new Date(selectedCreative.timestamp).toLocaleTimeString()}
                    </p>
                  </div>

                  <div className="space-y-4 bg-white/5 rounded-xl p-6 border border-white/10">
                    <div>
                      <div className="text-white/60 text-xs uppercase tracking-wider mb-1">Hook</div>
                      <div className="text-white text-lg">"{selectedCreative.hook}"</div>
                    </div>

                    <div>
                      <div className="text-white/60 text-xs uppercase tracking-wider mb-1">Template</div>
                      <div className="text-white">{selectedCreative.templateName}</div>
                    </div>

                    <div>
                      <div className="text-white/60 text-xs uppercase tracking-wider mb-1">Voice</div>
                      <div className="text-white">{selectedCreative.voiceName}</div>
                      <div className="text-white/40 text-sm mt-1 italic">
                        {selectedCreative.voicePersonality || selectedCreative.voiceStyle}
                      </div>
                    </div>

                    <div>
                      <div className="text-white/60 text-xs uppercase tracking-wider mb-1">Narrative</div>
                      <div className="text-white">{selectedCreative.narrative}</div>
                    </div>

                    <div>
                      <div className="text-white/60 text-xs uppercase tracking-wider mb-1">Pain Point</div>
                      <div className="text-white/80 text-sm">{selectedCreative.painPoint}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCreative(null)}
                    className="flex items-center gap-2 text-white/60 hover:text-white transition"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Close
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
