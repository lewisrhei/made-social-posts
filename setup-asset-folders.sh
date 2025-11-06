#!/bin/bash

# Setup asset folder structure for Made social posts
# This creates folders matching the product hierarchy

echo "🎨 Creating asset folder structure..."

BASE_DIR="public/product"

# Create base directory if it doesn't exist
mkdir -p "$BASE_DIR"

# AGENTS AND THEIR SKILLS
echo "📁 Setting up agent folders..."

# Milo - Creative Director
mkdir -p "$BASE_DIR/milo/thumbnail-generation"
mkdir -p "$BASE_DIR/milo/color-grading"
mkdir -p "$BASE_DIR/milo/visual-concepts"

# Remi - Content Producer
mkdir -p "$BASE_DIR/remi/video-editing"
mkdir -p "$BASE_DIR/remi/caption-generation"
mkdir -p "$BASE_DIR/remi/content-repurposing"

# Zara - Community Manager
mkdir -p "$BASE_DIR/zara/comment-responses"
mkdir -p "$BASE_DIR/zara/community-insights"
mkdir -p "$BASE_DIR/zara/social-listening"

# Lila - Distribution Manager
mkdir -p "$BASE_DIR/lila/content-claiming"
mkdir -p "$BASE_DIR/lila/repost-tracking"
mkdir -p "$BASE_DIR/lila/distribution-analytics"

# Enzo - Strategist
mkdir -p "$BASE_DIR/enzo/trend-analysis"
mkdir -p "$BASE_DIR/enzo/content-strategy"
mkdir -p "$BASE_DIR/enzo/competitor-analysis"

# Amie - Relationship Manager
mkdir -p "$BASE_DIR/amie/collaboration-tools"
mkdir -p "$BASE_DIR/amie/brand-deal-matching"
mkdir -p "$BASE_DIR/amie/outreach-automation"

# PLATFORM FEATURES
echo "📁 Setting up feature folders..."
mkdir -p "$BASE_DIR/features/projects"
mkdir -p "$BASE_DIR/features/workflows"
mkdir -p "$BASE_DIR/features/asset-library"
mkdir -p "$BASE_DIR/features/team-collaboration"
mkdir -p "$BASE_DIR/features/analytics-dashboard"

# PLATFORM ATTRIBUTES
echo "📁 Setting up attribute folders..."
mkdir -p "$BASE_DIR/attributes/speed"
mkdir -p "$BASE_DIR/attributes/affordability"
mkdir -p "$BASE_DIR/attributes/ai-powered"
mkdir -p "$BASE_DIR/attributes/all-in-one"

# GENERAL PLATFORM ASSETS
echo "📁 Setting up platform folder..."
mkdir -p "$BASE_DIR/platform/general"

echo "✅ Folder structure created!"
echo ""
echo "📝 Usage Instructions:"
echo "  1. Drop agent skill screenshots into: public/product/[agent]/[skill]/"
echo "     Example: public/product/milo/thumbnail-generation/"
echo ""
echo "  2. Drop feature screenshots into: public/product/features/[feature]/"
echo "     Example: public/product/features/projects/"
echo ""
echo "  3. Drop attribute screenshots into: public/product/attributes/[attribute]/"
echo "     Example: public/product/attributes/speed/"
echo ""
echo "  4. Drop general platform screenshots into: public/product/platform/general/"
echo ""
echo "💡 Tip: Use descriptive filenames like 'thumbnail-editor-ui.png' or 'analytics-overview.png'"
echo "     The system will automatically pick them up!"
