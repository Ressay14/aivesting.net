import { Allocation, Insight } from '../components/dashboard/PortfolioOptimization';

export async function optimizePortfolio({ allocations, method, riskTolerance, timeHorizon, region }: {
  allocations: Allocation[];
  method: string;
  riskTolerance: number;
  timeHorizon: string;
  region: string;
}): Promise<{ optimizedAllocations: Allocation[]; insight: Insight }> {
  // Compose a prompt for GPT-4
  const prompt = `You are a world-class portfolio strategist. Given the following portfolio allocations:
${allocations.map(a => `${a.asset}: ${a.percent}%`).join(', ')}
Optimization goal: ${method}
Risk tolerance: ${riskTolerance}/10
Time horizon: ${timeHorizon}
Region: ${region}

Suggest improved weights (total 100%) for the goal, and explain your rationale in plain English. Also, provide 2-3 actionable tips and any improved metrics (e.g., Sharpe Ratio, Volatility, Return).
Respond in JSON:
{
  "optimizedAllocations": [{ "asset": string, "percent": number }],
  "insight": {
    "summary": string,
    "tips": string[],
    "improvedMetrics": { [key: string]: string }
  }
}`;

  // Call OpenAI API (pseudo code, user to fill in API key)
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer YOUR_OPENAI_API_KEY`, // <-- Replace with your key
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    }),
  });
  const data = await response.json();
  // Parse the JSON from GPT-4's response
  const match = data.choices?.[0]?.message?.content?.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('AI response not in expected format.');
  const parsed = JSON.parse(match[0]);
  return parsed;
} 