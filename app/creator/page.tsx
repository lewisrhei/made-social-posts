'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Download, RefreshCw, Copy, Check, ChevronDown, ChevronUp, Plus, X, Edit2, Save, BookmarkPlus } from 'lucide-react'
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

// Data
const HOOKS_DATA = [
  {
    narrative: 'The Ambition Funnel',
    issue: 'Growth',
    painPoint: 'The creator has hit a plateau. Their vision is bigger than what one person can execute.'
  },
  {
    narrative: 'The Pain Point Solution',
    issue: 'Overwhelmed',
    painPoint: 'Drowning in non-creative tasks. Joy of creation replaced by drudgery of administration.'
  },
  {
    narrative: 'The Aspiration Engine',
    issue: 'Creative Stagnation',
    painPoint: 'Creatively stagnant, trapped in a niche. Fear of becoming a one-trick pony.'
  },
  {
    narrative: 'The Simplicity Sell',
    issue: 'Tool Fatigue',
    painPoint: 'Workflow is a fragile mess of disconnected apps. Tool fatigue.'
  },
  {
    narrative: 'The Anxiety of Creative Risk',
    issue: 'Creative Uncertainty',
    painPoint: 'Every piece is high-stakes gamble. Constant anxiety about wasting creative effort.'
  },
  {
    narrative: 'The Isolation Vortex',
    issue: 'Working alone',
    painPoint: 'Creation is lonely. Lacking collaborators leads to creative insecurity.'
  },
  {
    narrative: 'The Scaling Paradox',
    issue: 'Scale',
    painPoint: 'As audience grows, impossible to maintain personal authentic connection.'
  },
  {
    narrative: 'The Blank Map',
    issue: 'Lack of experience',
    painPoint: 'New creator paralyzed by choice and lack of direction.'
  }
]

const VOICES = {
  agents: [
    { id: 'milo', name: 'Milo', role: 'Creative Director', personality: 'Bold, visionary, aesthetic-focused', editable: true },
    { id: 'remi', name: 'Remi', role: 'Content Producer', personality: 'Fast-paced, trend-savvy, engaging', editable: true },
    { id: 'zara', name: 'Zara', role: 'Community Manager', personality: 'Warm, authentic, relatable', editable: true },
    { id: 'lila', name: 'Lila', role: 'Distribution Manager', personality: 'Strategic, platform-savvy, results-driven', editable: true },
    { id: 'enzo', name: 'Enzo', role: 'Strategist', personality: 'Analytical, forward-thinking, data-informed', editable: true },
    { id: 'amie', name: 'Amie', role: 'Relationship Manager', personality: 'Empathetic, collaborative, people-focused', editable: true }
  ],
  marketers: [
    { id: 'gary-vee', name: 'Gary Vaynerchuk', style: 'ALL CAPS, aggressive, hustle culture, rapid-fire energy' },
    { id: 'seth-godin', name: 'Seth Godin', style: 'Minimal, thought-provoking, storytelling, philosophical' },
    { id: 'neil-patel', name: 'Neil Patel', style: 'Data-driven, stats-heavy, analytical, SEO-focused' },
    { id: 'alex-hormozi', name: 'Alex Hormozi', style: 'Value stacking, direct, ROI-focused, no-BS approach' },
    { id: 'frank-kern', name: 'Frank Kern', style: 'Conversational, story-driven, relatable, laid-back' },
    { id: 'simon-sinek', name: 'Simon Sinek', style: 'Purpose-driven, inspirational, why-focused, visionary' },
    { id: 'dan-kennedy', name: 'Dan Kennedy', style: 'Direct response, no-nonsense, contrarian, results-obsessed' },
    { id: 'russell-brunson', name: 'Russell Brunson', style: 'Story-based, funnel-focused, enthusiastic, systematic' },
    { id: 'ann-handley', name: 'Ann Handley', style: 'Empathetic, story-first, human-centered, accessible' },
    { id: 'mark-ritson', name: 'Mark Ritson', style: 'Academic yet blunt, evidence-based, contrarian, witty' },
    { id: 'byron-sharp', name: 'Byron Sharp', style: 'Research-driven, myth-busting, scientific, provocative' },
    { id: 'al-ries', name: 'Al Ries', style: 'Positioning-obsessed, strategic, bold predictions, contrarian' },
    { id: 'april-dunford', name: 'April Dunford', style: 'Positioning expert, clear frameworks, practical, direct' },
    { id: 'bob-hoffman', name: 'Bob Hoffman', style: 'Cynical, industry critic, sharp wit, anti-bullshit' },
    { id: 'bernadette-jiwa', name: 'Bernadette Jiwa', style: 'Story-focused, human insight, empathy-driven, thoughtful' },
    { id: 'jonah-berger', name: 'Jonah Berger', style: 'Science-backed, viral mechanics, research-based, accessible' },
    { id: 'rand-fishkin', name: 'Rand Fishkin', style: 'Transparent, data-informed, community-first, honest' },
    { id: 'donald-miller', name: 'Donald Miller', style: 'Story framework, clarity-focused, customer-hero mindset' },
    { id: 'jay-baer', name: 'Jay Baer', style: 'Customer experience, talk triggers, practical, energetic' },
    { id: 'mari-smith', name: 'Mari Smith', style: 'Relationship marketing, warm, authentic, social-first' },
    { id: 'grant-cardone', name: 'Grant Cardone', style: '10X everything, aggressive, sales-focused, motivational' },
    { id: 'ryan-deiss', name: 'Ryan Deiss', style: 'Funnel strategy, customer journey, systematic, growth-focused' },
    { id: 'ryan-holiday', name: 'Ryan Holiday', style: 'Stoic wisdom, media manipulation, cultural insight, contrarian' },
    { id: 'david-ogilvy', name: 'David Ogilvy', style: 'Classic principles, research-based, elegant, authoritative' },
    { id: 'eugene-schwartz', name: 'Eugene Schwartz', style: 'Awareness stages, deep psychology, sophisticated, timeless' }
  ]
}

const TEMPLATES = [
  { id: 'aesthetic', name: 'Aesthetic', description: 'Beautiful visuals, minimal text, cinematic' },
  { id: 'bold-center', name: 'Bold Center', description: 'Dramatic centered typography, gradient accents' },
  { id: 'dynamic-split', name: 'Dynamic Split', description: 'Diagonal split design, modern asymmetry' },
  { id: 'minimalist-poster', name: 'Minimalist Poster', description: 'Clean poster style, light backgrounds' },
  { id: 'glitch-modern', name: 'Glitch Modern', description: 'Tech-inspired, scanlines, futuristic' },
  { id: 'spotlight-hero', name: 'Spotlight Hero', description: 'Dramatic lighting, hero showcase' },
  { id: 'word-heavy', name: 'Word Heavy', description: 'Text-focused, bold typography, impactful quotes' },
  { id: 'simple', name: 'Simple', description: 'Clean, minimal, easy to digest' },
  { id: 'data-viz', name: 'Data Visualization', description: 'Charts, stats, numbers-focused' },
  { id: 'storytelling', name: 'Storytelling', description: 'Narrative arc, emotional journey' },
  { id: 'meme', name: 'Meme Style', description: 'Relatable, funny, shareable' },
  { id: 'before-after', name: 'Before/After', description: 'Transformation, split-screen' },
  { id: 'testimonial', name: 'Testimonial', description: 'Social proof, user stories' }
]

// Hook type
type Hook = {
  id: string
  text: string
  isCustom: boolean
}

export default function AdCreatorPage() {
  // State - no more steps!
  const [selectedNarrative, setSelectedNarrative] = useState<number | null>(null)
  const [voiceType, setVoiceType] = useState<'agents' | 'marketers'>('agents')
  const [selectedVoice, setSelectedVoice] = useState<string | null>(null)
  const [hooks, setHooks] = useState<Hook[]>([])
  const [selectedHookId, setSelectedHookId] = useState<string | null>(null)
  const [isGeneratingHooks, setIsGeneratingHooks] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [copiedHookId, setCopiedHookId] = useState<string | null>(null)
  const [editingHookId, setEditingHookId] = useState<string | null>(null)
  const [editingHookText, setEditingHookText] = useState('')

  // Agent voice editing
  const [editingAgentId, setEditingAgentId] = useState<string | null>(null)
  const [editingAgentPersonality, setEditingAgentPersonality] = useState('')
  const [customAgentPersonalities, setCustomAgentPersonalities] = useState<Record<string, string>>({})

  // Save creative state
  const [isSaving, setIsSaving] = useState(false)
  const [savedNotification, setSavedNotification] = useState(false)

  // Collapsible section states - default to collapsed for compact view
  const [narrativeExpanded, setNarrativeExpanded] = useState(false)
  const [voiceExpanded, setVoiceExpanded] = useState(false)
  const [hooksExpanded, setHooksExpanded] = useState(false)
  const [templateExpanded, setTemplateExpanded] = useState(false)

  const currentNarrative = selectedNarrative !== null ? HOOKS_DATA[selectedNarrative] : null
  const selectedHook = hooks.find(h => h.id === selectedHookId)

  // Get selected voice data with custom personality if available
  const getVoiceData = () => {
    if (!selectedVoice) return null
    const voice = VOICES[voiceType].find(v => v.id === selectedVoice)
    if (!voice) return null

    // If it's an agent and has a custom personality, use that
    if (voiceType === 'agents' && customAgentPersonalities[selectedVoice]) {
      return {
        ...voice,
        personality: customAgentPersonalities[selectedVoice]
      }
    }

    return voice
  }
  const voiceData = getVoiceData()

  // Generate hooks with AI
  const generateHooks = async () => {
    if (!currentNarrative || !voiceData) return

    setIsGeneratingHooks(true)
    try {
      const response = await fetch('/api/generate-hooks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          narrative: currentNarrative.narrative,
          painPoint: currentNarrative.painPoint,
          voiceName: voiceData.name,
          voicePersonality: voiceType === 'agents' ? (voiceData as any).personality : undefined,
          voiceStyle: voiceType === 'marketers' ? (voiceData as any).style : undefined,
        }),
      })

      const data = await response.json()
      const generatedHooks: Hook[] = (data.hooks || []).map((text: string, idx: number) => ({
        id: `gen-${Date.now()}-${idx}`,
        text,
        isCustom: false
      }))

      setHooks(generatedHooks)
      // Auto-select first hook if none selected
      if (!selectedHookId && generatedHooks.length > 0) {
        setSelectedHookId(generatedHooks[0].id)
      }
    } catch (error) {
      console.error('Failed to generate hooks:', error)
      // Fallback hooks
      const fallbackHooks: Hook[] = [
        'Stop being a creator. Start being a media company.',
        'You have infinite ideas. We give you an infinite team.',
        '3 employees for $29.99 a month.',
        'The cure for creator burnout isn\'t a vacation.',
        'Get back to the part of your job you actually love.',
        'Your creator stack is a mess. Let\'s fix it.',
        'One platform. One login. Infinite creativity.',
      ].map((text, idx) => ({
        id: `fallback-${idx}`,
        text,
        isCustom: false
      }))
      setHooks(fallbackHooks)
    } finally {
      setIsGeneratingHooks(false)
    }
  }

  // Hook management functions
  const addCustomHook = () => {
    const newHook: Hook = {
      id: `custom-${Date.now()}`,
      text: '',
      isCustom: true
    }
    setHooks([...hooks, newHook])
    setEditingHookId(newHook.id)
    setEditingHookText('')
    setSelectedHookId(newHook.id)
  }

  const startEditingHook = (hook: Hook) => {
    setEditingHookId(hook.id)
    setEditingHookText(hook.text)
  }

  const saveHookEdit = () => {
    if (!editingHookId) return
    setHooks(hooks.map(h =>
      h.id === editingHookId ? { ...h, text: editingHookText } : h
    ))
    setEditingHookId(null)
    setEditingHookText('')
  }

  const deleteHook = (id: string) => {
    setHooks(hooks.filter(h => h.id !== id))
    if (selectedHookId === id) {
      setSelectedHookId(null)
    }
  }

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedHookId(id)
      setTimeout(() => setCopiedHookId(null), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  // Agent voice editing functions
  const startEditingAgent = (agentId: string, currentPersonality: string) => {
    setEditingAgentId(agentId)
    setEditingAgentPersonality(customAgentPersonalities[agentId] || currentPersonality)
  }

  const saveAgentEdit = () => {
    if (!editingAgentId) return
    setCustomAgentPersonalities({
      ...customAgentPersonalities,
      [editingAgentId]: editingAgentPersonality
    })
    setEditingAgentId(null)
    setEditingAgentPersonality('')
  }

  const cancelAgentEdit = () => {
    setEditingAgentId(null)
    setEditingAgentPersonality('')
  }

  // Save creative to LocalStorage
  const saveCreative = () => {
    if (!selectedHook || !selectedTemplate || !voiceData || !currentNarrative) {
      return
    }

    setIsSaving(true)

    const creative = {
      id: `creative-${Date.now()}`,
      timestamp: new Date().toISOString(),
      hook: selectedHook.text,
      template: selectedTemplate,
      templateName: TEMPLATES.find(t => t.id === selectedTemplate)?.name || '',
      narrative: currentNarrative.narrative,
      painPoint: currentNarrative.painPoint,
      voiceName: voiceData.name,
      voiceType: voiceType,
      voicePersonality: voiceType === 'agents' ? (voiceData as any).personality : undefined,
      voiceStyle: voiceType === 'marketers' ? (voiceData as any).style : undefined,
    }

    // Get existing creatives from localStorage
    const existingCreatives = localStorage.getItem('made-creatives')
    const creatives = existingCreatives ? JSON.parse(existingCreatives) : []

    // Add new creative
    creatives.unshift(creative) // Add to beginning

    // Save to localStorage
    localStorage.setItem('made-creatives', JSON.stringify(creatives))

    // Show notification
    setSavedNotification(true)
    setTimeout(() => {
      setSavedNotification(false)
      setIsSaving(false)
    }, 2000)
  }

  // Render template
  const renderTemplate = () => {
    if (!selectedHook || !selectedTemplate || !voiceData) {
      return (
        <div className="h-full flex items-center justify-center text-white/40 text-center p-8">
          <div>
            <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-sm">Select narrative, voice, hook, and template to see preview</p>
          </div>
        </div>
      )
    }

    const templateProps = {
      hook: selectedHook.text,
      voiceName: voiceData.name,
      voicePersonality: voiceType === 'agents' ? (voiceData as any).personality : undefined,
      voiceStyle: voiceType === 'marketers' ? (voiceData as any).style : undefined,
      painPoint: currentNarrative?.painPoint,
      narrative: currentNarrative?.narrative
    }

    switch (selectedTemplate) {
      case 'aesthetic': return <AestheticTemplate {...templateProps} />
      case 'bold-center': return <BoldCenterTemplate {...templateProps} />
      case 'dynamic-split': return <DynamicSplitTemplate {...templateProps} />
      case 'minimalist-poster': return <MinimalistPosterTemplate {...templateProps} />
      case 'glitch-modern': return <GlitchModernTemplate {...templateProps} />
      case 'spotlight-hero': return <SpotlightHeroTemplate {...templateProps} />
      case 'word-heavy': return <WordHeavyTemplate {...templateProps} />
      case 'simple': return <SimpleTemplate {...templateProps} />
      case 'data-viz': return <DataVizTemplate {...templateProps} />
      case 'storytelling': return <StorytellingTemplate {...templateProps} />
      case 'meme': return <MemeTemplate {...templateProps} />
      case 'before-after': return <BeforeAfterTemplate {...templateProps} />
      case 'testimonial': return <TestimonialTemplate {...templateProps} />
      default: return null
    }
  }

  // Check if generate hooks button should be enabled
  const canGenerateHooks = currentNarrative && voiceData
  const canUpdatePreview = selectedHook && selectedTemplate && voiceData

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex">
      {/* LEFT SIDEBAR - Fixed width, scrollable */}
      <div className="w-[380px] flex-shrink-0 border-r border-white/10 bg-black/20 backdrop-blur-sm overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <h1 className="text-xl font-bold text-white">Ad Creator</h1>
            </div>
            <p className="text-white/50 text-sm">Configure your ad parameters</p>
          </div>

          {/* SECTION 1: Narrative Selection */}
          <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
            <button
              onClick={() => setNarrativeExpanded(!narrativeExpanded)}
              className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition"
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${selectedNarrative !== null ? 'bg-green-400' : 'bg-white/20'}`} />
                <span className="text-white font-semibold text-sm">1. Strategic Narrative</span>
              </div>
              {narrativeExpanded ? <ChevronUp className="w-4 h-4 text-white/60" /> : <ChevronDown className="w-4 h-4 text-white/60" />}
            </button>

            {narrativeExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-4 pb-4 space-y-2"
              >
                {HOOKS_DATA.map((narrative, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedNarrative(idx)
                      setNarrativeExpanded(false)
                    }}
                    className={`w-full p-3 rounded-lg text-left transition-all ${
                      selectedNarrative === idx
                        ? 'bg-blue-600 border border-blue-400'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-xs text-blue-300 font-semibold mb-1">{narrative.issue}</div>
                    <div className="text-white text-sm font-medium mb-1">{narrative.narrative}</div>
                    <div className="text-white/50 text-xs line-clamp-2">{narrative.painPoint}</div>
                  </button>
                ))}
              </motion.div>
            )}

            {!narrativeExpanded && selectedNarrative !== null && (
              <div className="px-4 pb-3 text-white/60 text-xs">
                {HOOKS_DATA[selectedNarrative].narrative}
              </div>
            )}
          </div>

          {/* SECTION 2: Voice Selection */}
          <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
            <button
              onClick={() => setVoiceExpanded(!voiceExpanded)}
              className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition"
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${selectedVoice ? 'bg-green-400' : 'bg-white/20'}`} />
                <span className="text-white font-semibold text-sm">2. Voice</span>
              </div>
              {voiceExpanded ? <ChevronUp className="w-4 h-4 text-white/60" /> : <ChevronDown className="w-4 h-4 text-white/60" />}
            </button>

            {voiceExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-4 pb-4 space-y-3"
              >
                {/* Voice type toggle */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setVoiceType('agents')}
                    className={`flex-1 px-3 py-2 rounded-lg text-xs font-bold transition ${
                      voiceType === 'agents'
                        ? 'bg-cyan-600 text-white'
                        : 'bg-white/10 text-white/60 hover:bg-white/20'
                    }`}
                  >
                    Agents
                  </button>
                  <button
                    onClick={() => setVoiceType('marketers')}
                    className={`flex-1 px-3 py-2 rounded-lg text-xs font-bold transition ${
                      voiceType === 'marketers'
                        ? 'bg-orange-600 text-white'
                        : 'bg-white/10 text-white/60 hover:bg-white/20'
                    }`}
                  >
                    Marketers
                  </button>
                </div>

                {/* Voice options - scrollable with max height */}
                <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                  {VOICES[voiceType].map((voice) => {
                    const isAgent = voiceType === 'agents'
                    const isEditing = isAgent && editingAgentId === voice.id
                    const displayPersonality = isAgent && customAgentPersonalities[voice.id]
                      ? customAgentPersonalities[voice.id]
                      : (voice as any).personality || (voice as any).style

                    return (
                      <div
                        key={voice.id}
                        className={`relative rounded-lg transition-all group ${
                          selectedVoice === voice.id
                            ? 'bg-cyan-600 border border-cyan-400'
                            : 'bg-white/5 border border-white/10'
                        }`}
                      >
                        {isEditing ? (
                          <div className="p-3 space-y-2">
                            <div className="text-white text-sm font-medium">{voice.name}</div>
                            <textarea
                              value={editingAgentPersonality}
                              onChange={(e) => setEditingAgentPersonality(e.target.value)}
                              className="w-full bg-black/30 text-white text-xs p-2 rounded border border-white/20 focus:border-cyan-400 outline-none"
                              rows={2}
                              placeholder="Describe the agent's voice style..."
                            />
                            <div className="flex gap-2">
                              <button
                                onClick={saveAgentEdit}
                                className="flex-1 bg-cyan-500 text-white text-xs px-2 py-1 rounded hover:bg-cyan-600"
                              >
                                Save
                              </button>
                              <button
                                onClick={cancelAgentEdit}
                                className="flex-1 bg-white/10 text-white text-xs px-2 py-1 rounded hover:bg-white/20"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          <>
                            <button
                              onClick={() => {
                                setSelectedVoice(voice.id)
                                setVoiceExpanded(false)
                              }}
                              className="w-full p-3 text-left pr-20"
                            >
                              <div className="text-white text-sm font-medium">{voice.name}</div>
                              <div className="text-white/50 text-xs mt-1">
                                {isAgent ? (voice as any).role : ''}
                              </div>
                              <div className="text-white/40 text-xs mt-1 italic">
                                {displayPersonality}
                              </div>
                            </button>

                            {/* Edit button for agents only */}
                            {isAgent && (voice as any).editable && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  startEditingAgent(voice.id, (voice as any).personality)
                                }}
                                className="absolute top-2 right-2 p-1.5 bg-white/10 rounded hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Edit2 className="w-3 h-3 text-white/70" />
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {!voiceExpanded && voiceData && (
              <div className="px-4 pb-3 text-white/60 text-xs">
                {voiceData.name}
              </div>
            )}
          </div>

          {/* SECTION 3: Hook Generation */}
          <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
            <button
              onClick={() => setHooksExpanded(!hooksExpanded)}
              className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition"
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${hooks.length > 0 ? 'bg-green-400' : 'bg-white/20'}`} />
                <span className="text-white font-semibold text-sm">3. Hooks</span>
              </div>
              {hooksExpanded ? <ChevronUp className="w-4 h-4 text-white/60" /> : <ChevronDown className="w-4 h-4 text-white/60" />}
            </button>

            {hooksExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-4 pb-4 space-y-3"
              >
                {/* Generate button */}
                <button
                  onClick={generateHooks}
                  disabled={!canGenerateHooks || isGeneratingHooks}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 text-sm"
                >
                  {isGeneratingHooks ? 'Generating...' : hooks.length > 0 ? '🔄 Regenerate Hooks' : '✨ Generate Hooks'}
                </button>

                {/* Loading state */}
                {isGeneratingHooks && (
                  <div className="flex flex-col items-center py-6">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full mb-2"
                    />
                    <p className="text-white/50 text-xs">Generating hooks...</p>
                  </div>
                )}

                {/* Hooks list */}
                {!isGeneratingHooks && hooks.length > 0 && (
                  <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
                    {hooks.map((hook) => (
                      <div
                        key={hook.id}
                        className={`relative p-3 rounded-lg border transition-all group ${
                          selectedHookId === hook.id
                            ? 'bg-purple-600 border-purple-400'
                            : 'bg-white/5 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        {editingHookId === hook.id ? (
                          // Editing mode
                          <div className="space-y-2">
                            <textarea
                              value={editingHookText}
                              onChange={(e) => setEditingHookText(e.target.value)}
                              className="w-full bg-black/20 text-white text-sm p-2 rounded border border-white/20 focus:border-purple-400 outline-none resize-none"
                              rows={2}
                              autoFocus
                            />
                            <div className="flex gap-2">
                              <button
                                onClick={saveHookEdit}
                                className="flex-1 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium hover:bg-green-700"
                              >
                                Save
                              </button>
                              <button
                                onClick={() => {
                                  setEditingHookId(null)
                                  setEditingHookText('')
                                }}
                                className="flex-1 bg-white/10 text-white px-2 py-1 rounded text-xs font-medium hover:bg-white/20"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          // Display mode
                          <>
                            <button
                              onClick={() => setSelectedHookId(hook.id)}
                              className="w-full text-left pr-16"
                            >
                              <div className="text-white text-sm leading-snug">"{hook.text}"</div>
                              {hook.isCustom && (
                                <div className="text-xs text-purple-300 mt-1">Custom</div>
                              )}
                            </button>

                            {/* Action buttons */}
                            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  startEditingHook(hook)
                                }}
                                className="p-1.5 rounded bg-white/10 hover:bg-white/20 transition"
                                title="Edit hook"
                              >
                                <Edit2 className="w-3 h-3 text-white/70" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  copyToClipboard(hook.text, hook.id)
                                }}
                                className="p-1.5 rounded bg-white/10 hover:bg-white/20 transition"
                                title="Copy to clipboard"
                              >
                                {copiedHookId === hook.id ? (
                                  <Check className="w-3 h-3 text-green-400" />
                                ) : (
                                  <Copy className="w-3 h-3 text-white/70" />
                                )}
                              </button>
                              {hook.isCustom && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    deleteHook(hook.id)
                                  }}
                                  className="p-1.5 rounded bg-white/10 hover:bg-red-600 transition"
                                  title="Delete hook"
                                >
                                  <X className="w-3 h-3 text-white/70" />
                                </button>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Add custom hook button */}
                {!isGeneratingHooks && hooks.length > 0 && (
                  <button
                    onClick={addCustomHook}
                    className="w-full bg-white/5 border border-white/20 border-dashed text-white/60 px-4 py-2 rounded-lg font-medium hover:bg-white/10 hover:text-white transition text-sm flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add Custom Hook
                  </button>
                )}
              </motion.div>
            )}

            {!hooksExpanded && hooks.length > 0 && (
              <div className="px-4 pb-3 text-white/60 text-xs">
                {hooks.length} {hooks.length === 1 ? 'hook' : 'hooks'} generated
              </div>
            )}
          </div>

          {/* SECTION 4: Template Selection */}
          <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
            <button
              onClick={() => setTemplateExpanded(!templateExpanded)}
              className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition"
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${selectedTemplate ? 'bg-green-400' : 'bg-white/20'}`} />
                <span className="text-white font-semibold text-sm">4. Template</span>
              </div>
              {templateExpanded ? <ChevronUp className="w-4 h-4 text-white/60" /> : <ChevronDown className="w-4 h-4 text-white/60" />}
            </button>

            {templateExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-4 pb-4"
              >
                <div className="grid grid-cols-2 gap-2 max-h-[400px] overflow-y-auto pr-1">
                  {TEMPLATES.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => {
                        setSelectedTemplate(template.id)
                        setTemplateExpanded(false)
                      }}
                      className={`p-3 rounded-lg text-left transition-all ${
                        selectedTemplate === template.id
                          ? 'bg-pink-600 border border-pink-400'
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-white text-xs font-medium mb-1">{template.name}</div>
                      <div className="text-white/50 text-[10px] line-clamp-2">{template.description}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {!templateExpanded && selectedTemplate && (
              <div className="px-4 pb-3 text-white/60 text-xs">
                {TEMPLATES.find(t => t.id === selectedTemplate)?.name}
              </div>
            )}
          </div>

          {/* Update Preview Button */}
          <button
            disabled={!canUpdatePreview}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 rounded-xl font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 shadow-lg"
          >
            {canUpdatePreview ? '🎨 Update Preview' : '⏳ Complete Steps Above'}
          </button>
        </div>
      </div>

      {/* RIGHT PANEL - Preview Canvas */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-auto">
        <div className="w-full max-w-[500px]">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
            {/* Preview header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div className="text-white font-semibold text-sm">Live Preview</div>
              <div className="flex gap-2">
                <button
                  onClick={saveCreative}
                  disabled={!canUpdatePreview || isSaving}
                  className="p-2 hover:bg-white/10 rounded-lg transition disabled:opacity-50 relative"
                  title="Save Creative"
                >
                  {savedNotification ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <BookmarkPlus className="w-4 h-4 text-white/60" />
                  )}
                </button>
                <button
                  onClick={() => alert('Export coming soon!')}
                  disabled={!canUpdatePreview}
                  className="p-2 hover:bg-white/10 rounded-lg transition disabled:opacity-50"
                  title="Export"
                >
                  <Download className="w-4 h-4 text-white/60" />
                </button>
              </div>
            </div>

            {/* Save notification */}
            <AnimatePresence>
              {savedNotification && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-20 right-8 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50"
                >
                  ✓ Creative Saved!
                </motion.div>
              )}
            </AnimatePresence>

            {/* 9:16 Preview Container */}
            <div className="flex items-center justify-center p-8 bg-gray-950 min-h-[600px]">
              <motion.div
                key={`${selectedTemplate}-${selectedHookId}-${selectedVoice}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-[360px] h-[640px] rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              >
                {renderTemplate()}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
