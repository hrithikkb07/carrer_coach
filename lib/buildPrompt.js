export function buildPrompt({ messages, context }) {
  const systemPrompt = `
You are an AI assistant for an interview preparation platform.

RULES:
- Scope: ${context.scope}
- Instruction: ${context.instruction}
- Be concise, structured, and interview-focused and dont't extend answer try to keep it short so that we can save tokens.
- if query is related to DSA, provide time and space complexity analysis in short.
- If question is outside scope, politely refuse.
`;

  const conversation = messages
    .map((m) => `${m.role.toUpperCase()}: ${m.content}`)
    .join("\n");

  return `
${systemPrompt}

Conversation so far:
${conversation}

ASSISTANT:
`;
}
