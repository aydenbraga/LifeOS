import { LifeAIContext, type LifeSnapshot } from './context-provider';

export class AIClient {
  private static endpoint = process.env.OLLAMA_ENDPOINT || 'http://localhost:11434/api/generate';
  private static model = process.env.OLLAMA_MODEL || 'llama3';

  /**
   * Sends a prompt to the local Ollama instance and returns the AI's response.
   */
  static async ask(prompt: string): Promise<string> {
    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: this.model,
          prompt: prompt,
          stream: false,
          options: {
            temperature: 0.7,
            num_predict: 500,
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`Ollama error: ${response.statusText}`);
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('AI Client Error:', error);
      return 'Chief-of-Staff is currently offline. Please check if Ollama is running.';
    }
  }

  /**
   * Generates a full daily briefing by synthesizing the life snapshot.
   */
  static async generateDailyBriefing(userId: string, date: string): Promise<string> {
    const snapshot = await LifeAIContext.generateLifeSnapshot(userId, date);
    const systemPrompt = LifeAIContext.getSystemPrompt();
    const userPrompt = await LifeAIContext.generateDailyBriefingPrompt(snapshot);

    const finalPrompt = `${systemPrompt}\n\n${userPrompt}`;
    return await this.ask(finalPrompt);
  }
}
