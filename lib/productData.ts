// Product hierarchy and asset mapping for Made platform

export type ProductFocusType = 'platform' | 'agent' | 'skill' | 'feature' | 'attribute';

export interface ProductAsset {
  id: string;
  path: string;
  name: string;
  description?: string;
}

export interface ProductSkill {
  id: string;
  name: string;
  description: string;
  agentId: string;
  assets: ProductAsset[];
}

export interface ProductAgent {
  id: string;
  name: string;
  role: string;
  description: string;
  color: string; // For UI theming
  skills: ProductSkill[];
}

export interface ProductFeature {
  id: string;
  name: string;
  description: string;
  category: 'core' | 'collaboration' | 'distribution' | 'analytics';
  assets: ProductAsset[];
}

export interface ProductAttribute {
  id: string;
  name: string;
  description: string;
  assets: ProductAsset[];
}

// Agent definitions
export const AGENTS: ProductAgent[] = [
  {
    id: 'milo',
    name: 'Milo',
    role: 'Creative Director',
    description: 'Bold, visionary, aesthetic-focused creative leadership',
    color: 'blue',
    skills: [
      {
        id: 'milo-thumbnails',
        name: 'Thumbnail Generation',
        description: 'AI-powered thumbnail creation with viral appeal',
        agentId: 'milo',
        assets: []
      },
      {
        id: 'milo-color-grading',
        name: 'Color Grading',
        description: 'Cinematic color correction and grading',
        agentId: 'milo',
        assets: []
      },
      {
        id: 'milo-visual-concepts',
        name: 'Visual Concepts',
        description: 'Generate creative visual concepts and mood boards',
        agentId: 'milo',
        assets: []
      }
    ]
  },
  {
    id: 'remi',
    name: 'Remi',
    role: 'Content Producer',
    description: 'Fast-paced, trend-savvy content production',
    color: 'purple',
    skills: [
      {
        id: 'remi-video-editing',
        name: 'Video Editing',
        description: 'Rapid video editing with trending templates',
        agentId: 'remi',
        assets: []
      },
      {
        id: 'remi-captions',
        name: 'Caption Generation',
        description: 'Auto-generate engaging captions and subtitles',
        agentId: 'remi',
        assets: []
      },
      {
        id: 'remi-repurposing',
        name: 'Content Repurposing',
        description: 'Transform long-form into short-form content',
        agentId: 'remi',
        assets: []
      }
    ]
  },
  {
    id: 'zara',
    name: 'Zara',
    role: 'Community Manager',
    description: 'Warm, authentic community engagement',
    color: 'yellow',
    skills: [
      {
        id: 'zara-responses',
        name: 'Comment Responses',
        description: 'AI-assisted comment replies and engagement',
        agentId: 'zara',
        assets: []
      },
      {
        id: 'zara-community-insights',
        name: 'Community Insights',
        description: 'Analyze audience sentiment and engagement',
        agentId: 'zara',
        assets: []
      },
      {
        id: 'zara-social-listening',
        name: 'Social Listening',
        description: 'Track brand mentions and conversations',
        agentId: 'zara',
        assets: []
      }
    ]
  },
  {
    id: 'lila',
    name: 'Lila',
    role: 'Distribution Manager',
    description: 'Strategic, platform-savvy distribution',
    color: 'red',
    skills: [
      {
        id: 'lila-content-claiming',
        name: 'Content Claiming',
        description: 'Track and claim your content across platforms',
        agentId: 'lila',
        assets: [
          {
            id: 'lila-claims-overview',
            path: '/product/lila/View All Claims/Expand.png',
            name: 'Claims Overview',
            description: 'Comprehensive view of all active content claims'
          }
        ]
      },
      {
        id: 'lila-repost-tracking',
        name: 'Repost Tracking',
        description: 'Find and track content reposts',
        agentId: 'lila',
        assets: [
          {
            id: 'lila-popular-reposts',
            path: '/product/lila/Find Popular Reposts/See more.png',
            name: 'Popular Reposts',
            description: 'Discover which claimed videos performed best'
          },
          {
            id: 'lila-reuploaders',
            path: '/product/lila/Rank My Reuploders/See more.png',
            name: 'Top Reuploaders',
            description: 'Identify channels that reupload content most'
          }
        ]
      },
      {
        id: 'lila-distribution-analytics',
        name: 'Distribution Analytics',
        description: 'Track content performance across platforms',
        agentId: 'lila',
        assets: []
      }
    ]
  },
  {
    id: 'enzo',
    name: 'Enzo',
    role: 'Strategist',
    description: 'Analytical, forward-thinking strategy',
    color: 'green',
    skills: [
      {
        id: 'enzo-trend-analysis',
        name: 'Trend Analysis',
        description: 'Identify trending topics and opportunities',
        agentId: 'enzo',
        assets: []
      },
      {
        id: 'enzo-content-strategy',
        name: 'Content Strategy',
        description: 'Data-driven content planning and recommendations',
        agentId: 'enzo',
        assets: []
      },
      {
        id: 'enzo-competitor-analysis',
        name: 'Competitor Analysis',
        description: 'Benchmark against competitors and find gaps',
        agentId: 'enzo',
        assets: []
      }
    ]
  },
  {
    id: 'amie',
    name: 'Amie',
    role: 'Relationship Manager',
    description: 'Empathetic, collaborative partnerships',
    color: 'orange',
    skills: [
      {
        id: 'amie-collaboration',
        name: 'Collaboration Tools',
        description: 'Coordinate with team members and collaborators',
        agentId: 'amie',
        assets: []
      },
      {
        id: 'amie-brand-deals',
        name: 'Brand Deal Matching',
        description: 'Find and manage brand partnerships',
        agentId: 'amie',
        assets: []
      },
      {
        id: 'amie-outreach',
        name: 'Outreach Automation',
        description: 'Automated outreach and relationship building',
        agentId: 'amie',
        assets: []
      }
    ]
  }
];

// Core platform features
export const FEATURES: ProductFeature[] = [
  {
    id: 'projects',
    name: 'Projects',
    description: 'Organize and manage your creative projects',
    category: 'core',
    assets: []
  },
  {
    id: 'workflows',
    name: 'Workflows',
    description: 'Automated content production workflows',
    category: 'core',
    assets: []
  },
  {
    id: 'asset-library',
    name: 'Asset Library',
    description: 'Centralized media and asset management',
    category: 'core',
    assets: []
  },
  {
    id: 'team-collaboration',
    name: 'Team Collaboration',
    description: 'Real-time collaboration and feedback',
    category: 'collaboration',
    assets: []
  },
  {
    id: 'analytics-dashboard',
    name: 'Analytics Dashboard',
    description: 'Comprehensive performance tracking',
    category: 'analytics',
    assets: []
  }
];

// Product attributes/benefits
export const ATTRIBUTES: ProductAttribute[] = [
  {
    id: 'speed',
    name: 'Speed',
    description: '10x faster content production',
    assets: []
  },
  {
    id: 'affordability',
    name: 'Affordability',
    description: 'Full production team for $29.99/mo',
    assets: []
  },
  {
    id: 'ai-powered',
    name: 'AI-Powered',
    description: 'Cutting-edge AI technology',
    assets: []
  },
  {
    id: 'all-in-one',
    name: 'All-in-One',
    description: 'Everything you need in one platform',
    assets: []
  }
];

// Helper functions
export function getAgentById(id: string): ProductAgent | undefined {
  return AGENTS.find(agent => agent.id === id);
}

export function getSkillById(skillId: string): ProductSkill | undefined {
  for (const agent of AGENTS) {
    const skill = agent.skills.find(s => s.id === skillId);
    if (skill) return skill;
  }
  return undefined;
}

export function getSkillsByAgent(agentId: string): ProductSkill[] {
  const agent = getAgentById(agentId);
  return agent?.skills || [];
}

export function getAllAssets(): ProductAsset[] {
  const assets: ProductAsset[] = [];

  // Collect from agents/skills
  AGENTS.forEach(agent => {
    agent.skills.forEach(skill => {
      assets.push(...skill.assets);
    });
  });

  // Collect from features
  FEATURES.forEach(feature => {
    assets.push(...feature.assets);
  });

  // Collect from attributes
  ATTRIBUTES.forEach(attribute => {
    assets.push(...attribute.assets);
  });

  return assets;
}

export function getAssetsByFocus(
  focusType: ProductFocusType,
  focusId?: string
): ProductAsset[] {
  const assets: ProductAsset[] = [];

  if (focusType === 'platform') {
    // Return all assets from all sources
    AGENTS.forEach(agent => {
      agent.skills.forEach(skill => {
        assets.push(...skill.assets);
      });
    });
    FEATURES.forEach(feature => {
      assets.push(...feature.assets);
    });
    ATTRIBUTES.forEach(attribute => {
      assets.push(...attribute.assets);
    });
  } else if (focusType === 'agent' && focusId) {
    const agent = getAgentById(focusId);
    if (agent) {
      agent.skills.forEach(skill => {
        assets.push(...skill.assets);
      });
    }
  } else if (focusType === 'skill' && focusId) {
    const skill = getSkillById(focusId);
    if (skill) {
      assets.push(...skill.assets);
    }
  } else if (focusType === 'feature' && focusId) {
    const feature = FEATURES.find(f => f.id === focusId);
    if (feature) {
      assets.push(...feature.assets);
    }
  } else if (focusType === 'attribute' && focusId) {
    const attribute = ATTRIBUTES.find(a => a.id === focusId);
    if (attribute) {
      assets.push(...attribute.assets);
    }
  }

  return assets;
}
