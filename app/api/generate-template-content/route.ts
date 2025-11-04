import { NextResponse } from 'next/server';
import openrouter from '@/lib/openrouter';

export async function POST(request: Request) {
  try {
    const { hook, voiceName, voicePersonality, voiceStyle, painPoint, narrative, templateStyle } = await request.json();

    const voiceDesc = voicePersonality || voiceStyle;

    const prompt = `You are designing a ${templateStyle} social media ad for Made.

Context:
- Hook: "${hook}"
- Voice: ${voiceName} - ${voiceDesc}
- Problem: ${painPoint}
- Narrative: ${narrative}
- Template Style: ${templateStyle}
- Format: 9:16 vertical video for TikTok/Instagram

Generate ALL text content for this ${templateStyle} template. Return a JSON object with these fields:

{
  "headline": "Main headline text (if needed for this template)",
  "subheadline": "Supporting headline or tagline",
  "stats": [
    {"value": "6", "label": "AI Specialists"},
    {"value": "80%", "label": "Time Saved"},
    {"value": "$29.99", "label": "Per Month"}
  ],
  "bullets": ["Benefit point 1", "Benefit point 2", "Benefit point 3"],
  "comparison": {
    "before": ["Pain point 1", "Pain point 2", "Pain point 3"],
    "after": ["Solution 1", "Solution 2", "Solution 3"]
  },
  "testimonial": "A realistic testimonial quote from a creator",
  "cta": "Call to action button text",
  "caption": "Footer text or brand tagline"
}

Guidelines:
- Match ${voiceName}'s voice style perfectly
- Be concise and scroll-stopping
- Focus on creator pain points and Made's solutions
- Use the hook as the central message
- Make stats and bullets specific and impactful

Return ONLY the JSON object, no markdown formatting or explanation.`;

    const completion = await openrouter.chat.completions.create({
      model: 'google/gemini-2.5-pro',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 800,
    });

    const content = completion.choices[0]?.message?.content || '{}';

    // Parse the JSON response
    let templateContent: any;
    try {
      // Remove markdown code blocks if present
      const cleanContent = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      templateContent = JSON.parse(cleanContent);
    } catch (parseError) {
      console.error('Failed to parse template content:', content);
      // Fallback to default content
      templateContent = {
        headline: hook,
        subheadline: 'Your full creative team for $29.99/mo',
        stats: [
          { value: '6', label: 'AI Specialists' },
          { value: '80%', label: 'Time Saved' },
          { value: '$29.99', label: 'Per Month' },
        ],
        bullets: [
          'Automated workflows',
          'Consistent posting',
          'Pure creative freedom',
        ],
        comparison: {
          before: ['Editing until 3am', 'Drowning in admin', 'Creative burnout'],
          after: ['6 AI specialists 24/7', 'Automated workflows', 'Pure creative freedom'],
        },
        testimonial: 'Made gave me back my creative freedom. Now I focus on what I love while my AI team handles the rest.',
        cta: 'Start Creating',
        caption: 'made.com • Your creative dream team',
      };
    }

    return NextResponse.json({ content: templateContent });
  } catch (error: any) {
    console.error('Error generating template content:', error);
    return NextResponse.json(
      { error: 'Failed to generate content', details: error.message },
      { status: 500 }
    );
  }
}
