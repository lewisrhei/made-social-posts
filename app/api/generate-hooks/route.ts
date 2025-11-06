import { NextResponse } from 'next/server';
import openrouter from '@/lib/openrouter';

export async function POST(request: Request) {
  try {
    const {
      narrative,
      painPoint,
      voiceName,
      voicePersonality,
      voiceStyle,
      productFocusType,
      productFocusName,
      productFocusDescription
    } = await request.json();

    const voiceDesc = voicePersonality || voiceStyle;

    console.log('🎯 Hook Generation Request:');
    console.log('  Narrative:', narrative);
    console.log('  Pain Point:', painPoint);
    console.log('  Voice:', voiceName, '-', voiceDesc);
    console.log('  Product Focus:', productFocusType, '-', productFocusName);

    // Build product context based on focus
    let productContext = '';
    let focusInstruction = '';

    if (productFocusType === 'platform') {
      productContext = 'Made - AI creative platform that gives creators a full production team for $29.99/mo';
      focusInstruction = 'Promote Made as a complete platform solution.';
    } else if (productFocusType === 'agent') {
      productContext = `${productFocusName} on Made${productFocusDescription ? ` - ${productFocusDescription}` : ''}`;
      focusInstruction = `Focus specifically on ${productFocusName.split(' (')[0]} as an AI agent that helps creators. Highlight this agent's personality and capabilities.`;
    } else if (productFocusType === 'skill') {
      productContext = `${productFocusName}${productFocusDescription ? ` - ${productFocusDescription}` : ''}`;
      focusInstruction = `Focus SPECIFICALLY on the "${productFocusName}" capability. The hooks should be about this ONE specific feature/skill, not the general platform. Make the hooks very targeted to this capability.`;
    } else if (productFocusType === 'feature') {
      productContext = `Made's ${productFocusName} feature${productFocusDescription ? ` - ${productFocusDescription}` : ''}`;
      focusInstruction = `Promote the ${productFocusName} feature specifically.`;
    } else if (productFocusType === 'attribute') {
      productContext = `Made (${productFocusName})${productFocusDescription ? ` - ${productFocusDescription}` : ''}`;
      focusInstruction = `Emphasize the ${productFocusName} aspect of Made.`;
    }

    const prompt = `You are a marketing expert creating scroll-stopping social media hooks.

Context:
- Problem: ${painPoint}
- Narrative: ${narrative}
- Platform: TikTok/Instagram (9:16 vertical video)
- Product Focus: ${productContext}
- Voice Style: ${voiceName} - ${voiceDesc}

${focusInstruction}

Create 7 short, punchy hooks (8-12 words each) that:
1. Stop scrolling immediately
2. Match the ${voiceName} voice style perfectly
3. Address the pain point directly
4. Feel authentic, not salesy
5. Work for vertical video format
6. Are SPECIFICALLY about the product focus above (not generic platform messaging)

Return ONLY a JSON object with a "hooks" array of 7 strings:
{
  "hooks": ["hook1", "hook2", "hook3", "hook4", "hook5", "hook6", "hook7"]
}

No explanation, no markdown formatting, just the raw JSON object.`;

    const completion = await openrouter.chat.completions.create({
      model: 'google/gemini-2.5-pro',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.9,
      max_tokens: 4000,  // Much higher to account for reasoning tokens
      response_format: { type: 'json_object' }
    });

    console.log('🔍 Full completion object:', JSON.stringify(completion, null, 2));
    console.log('🔍 Finish reason:', completion.choices[0]?.finish_reason);

    const content = completion.choices[0]?.message?.content || '[]';

    console.log('🤖 AI Response (raw):', content);
    console.log('🤖 Response length:', content.length, 'characters');

    // Parse the JSON response
    let hooks: string[];
    try {
      // Remove markdown code blocks if present (more aggressive cleaning)
      let cleanContent = content.trim();
      // Remove ```json or ``` from start
      cleanContent = cleanContent.replace(/^```json\s*/i, '').replace(/^```\s*/, '');
      // Remove ``` from end
      cleanContent = cleanContent.replace(/\s*```\s*$/, '');
      cleanContent = cleanContent.trim();

      console.log('🧹 Cleaned content:', cleanContent);

      const parsed = JSON.parse(cleanContent);

      // Extract hooks array from the object
      if (Array.isArray(parsed)) {
        // If it's already an array, use it directly (backwards compatibility)
        hooks = parsed;
      } else if (parsed.hooks && Array.isArray(parsed.hooks)) {
        // If it's an object with a hooks property, extract it
        hooks = parsed.hooks;
      } else {
        throw new Error('Response does not contain a valid hooks array');
      }

      console.log('✅ Parsed', hooks.length, 'hooks successfully');
    } catch (parseError) {
      console.error('❌ Failed to parse hooks:', content);
      console.error('Parse error:', parseError);
      // Fallback to placeholder hooks
      hooks = [
        'Stop being a creator. Start being a media company.',
        'You have infinite ideas. We give you an infinite team.',
        '3 employees for $29.99 a month.',
        'The cure for creator burnout isn\'t a vacation.',
        'Get back to the part of your job you actually love.',
        'Your creator stack is a mess. Let\'s fix it.',
        'One platform. One login. Infinite creativity.',
      ];
    }

    return NextResponse.json({ hooks });
  } catch (error: any) {
    console.error('Error generating hooks:', error);
    return NextResponse.json(
      { error: 'Failed to generate hooks', details: error.message },
      { status: 500 }
    );
  }
}
