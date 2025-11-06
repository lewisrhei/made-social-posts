# Product Asset Organization

This folder structure matches the product hierarchy exactly. Drop your screenshots into the appropriate folders and they'll automatically appear in the Asset Browser!

## 📁 Folder Structure

```
public/product/
├── milo/                           # Milo - Creative Director
│   ├── thumbnail-generation/       # Thumbnail creation screenshots
│   ├── color-grading/              # Color correction screenshots
│   └── visual-concepts/            # Visual concept screenshots
│
├── remi/                           # Remi - Content Producer
│   ├── video-editing/              # Video editing screenshots
│   ├── caption-generation/         # Caption tool screenshots
│   └── content-repurposing/        # Repurposing tool screenshots
│
├── zara/                           # Zara - Community Manager
│   ├── comment-responses/          # Comment management screenshots
│   ├── community-insights/         # Analytics screenshots
│   └── social-listening/           # Monitoring tool screenshots
│
├── lila/                           # Lila - Distribution Manager
│   ├── content-claiming/           # Claims management screenshots
│   ├── repost-tracking/            # Repost finder screenshots
│   └── distribution-analytics/     # Distribution metrics screenshots
│
├── enzo/                           # Enzo - Strategist
│   ├── trend-analysis/             # Trend tool screenshots
│   ├── content-strategy/           # Strategy tool screenshots
│   └── competitor-analysis/        # Competitor tool screenshots
│
├── amie/                           # Amie - Relationship Manager
│   ├── collaboration-tools/        # Collaboration screenshots
│   ├── brand-deal-matching/        # Brand deals screenshots
│   └── outreach-automation/        # Outreach tool screenshots
│
├── features/                       # Platform Features
│   ├── projects/                   # Project management screenshots
│   ├── workflows/                  # Workflow automation screenshots
│   ├── asset-library/              # Asset library screenshots
│   ├── team-collaboration/         # Team tools screenshots
│   └── analytics-dashboard/        # Analytics screenshots
│
├── attributes/                     # Product Attributes
│   ├── speed/                      # Speed/performance screenshots
│   ├── affordability/              # Pricing/value screenshots
│   ├── ai-powered/                 # AI capabilities screenshots
│   └── all-in-one/                 # Platform overview screenshots
│
└── platform/                       # General Platform
    └── general/                    # General Made screenshots
```

## 🎯 How to Add Assets

### 1. **Agent Skills** (Most Common)
Drop screenshots showing specific agent capabilities:

```bash
# Example: Milo's thumbnail generation feature
public/product/milo/thumbnail-generation/
  ├── thumbnail-editor-interface.png
  ├── thumbnail-templates.png
  └── ai-thumbnail-preview.png

# Example: Lila's content claiming feature
public/product/lila/content-claiming/
  ├── claims-dashboard.png
  ├── claim-details-view.png
  └── bulk-claiming-tool.png
```

### 2. **Platform Features**
Drop screenshots showing core platform features:

```bash
# Example: Projects feature
public/product/features/projects/
  ├── project-overview.png
  ├── project-kanban-board.png
  └── project-timeline.png
```

### 3. **Product Attributes**
Drop screenshots that showcase specific benefits:

```bash
# Example: Speed attribute
public/product/attributes/speed/
  ├── fast-rendering.png
  ├── instant-preview.png
  └── quick-export.png
```

## 📝 Naming Conventions

**Good filenames:**
- `thumbnail-editor-ui.png`
- `analytics-overview.png`
- `team-collaboration-chat.png`
- `ai-powered-suggestions.png`

**Avoid:**
- `Screen Shot 2024-01-01.png`
- `IMG_1234.png`
- `Untitled.png`

## 🔄 How It Works

1. **Drop images** into the appropriate folder
2. **Restart dev server** (if needed)
3. **Open Asset Browser** in the app
4. **Navigate** to the agent/skill/feature you want
5. **Assets appear automatically!**

The system will:
- Scan all folders for images
- Map them to the product hierarchy
- Display them in the Asset Browser modal
- Let you select which ones to use in your creative

## 💡 Current Setup

Right now, Lila already has some assets:
- `/lila/content-claiming/` - Claims management views
- `/lila/repost-tracking/` - Repost finder views

You can follow this same pattern for all other agents and features!

## 🚀 Next Steps

1. Take screenshots of each agent's key features
2. Drop them into the corresponding folders
3. Test in the Asset Browser modal
4. Create social posts with product-specific assets!
