export const GENERATE_SCRIPT_PROMPT = `Generate 3 different creative video ad scripts for the following:

Topic: {topic}
Language: {language}
Duration: 30 seconds

Please provide the scripts in JSON format following this schema:
[
  {
    "content": "",
    "translations": {
      "english": "",
      "hindi": "",
      "marathi": ""
    },
    "tone": "", 
    "target_audience": "",
    "call_to_action": ""
  }
]

Requirements:
- Each script should be unique and engaging
- Include compelling call-to-action
- Maintain consistent brand voice
- Keep scripts concise for 30-second duration
- Ensure proper translations in all three languages
- Focus on conversion and engagement

Please ensure each script variation has a different approach (emotional, factual, storytelling) to maximize impact.`;