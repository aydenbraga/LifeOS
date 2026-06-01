import { type HealthMetric, type WorkoutSession, type AcademicTask, type FinancialSummary } from '../types/lifeos';

export interface LifeSnapshot {
  date: string;
  health: HealthMetric | null;
  workouts: WorkoutSession[];
  topTasks: AcademicTask[];
  finance: FinancialSummary;
  habits: { name: string, completed: boolean }[];
}

export class LifeAIContext {
  /**
   * Transforms raw database records into a natural language summary
   * that provides a "dense" context for the LLM.
   */
  static async generateLifeSnapshot(userId: string, date: string): Promise<LifeSnapshot> {
    // In a real implementation, this would call Supabase
    // For now, we simulate the data based on the schema we designed
    return {
      date,
      health: {
        weight: 82.4,
        sleep_duration_mins: 472, // 7h 52m
        sleep_quality_score: 84,
        recovery_score: 88,
        energy_level: 8,
        mood_score: 7,
      },
      workouts: [
        { session_name: 'Leg Day Hypertrophy', total_volume: 12400, duration_mins: 75 }
      ],
      topTasks: [
        { title: 'Algorithm Design', due_date: '2026-06-04', status: 'pending', priority: 1 }
      ],
      finance: {
        monthly_spend: 1200,
        budget_remaining: 450,
        investment_trend: 'up'
      },
      habits: [
        { name: 'Bible Study', completed: true },
        { name: 'Gym', completed: true },
        { name: 'Reading', completed: false },
      ]
    };
  }

  /**
   * The system prompt that defines the "Chief-of-Staff" persona.
   */
  static getSystemPrompt(): string {
    return `
      You are LifeOS Chief-of-Staff, a high-performance executive assistant for Ayden.
      Your goal is to optimize Ayden's life by analyzing the intersections of health,
      athletic performance, academic success, and financial growth.

      CORE OPERATING PRINCIPLES:
      1. Data-Driven: Never guess. Use the provided LifeSnapshot data.
      2. Holistic: If sleep is low, warn about workout intensity. If stress is high,
         suggest a lighter study load.
      3. Direct & Premium: Be concise, encouraging, and sophisticated.
      4. Proactive: Don't just report data; suggest actions (e.g., "Today is an ideal
         day for a PR attempt due to high recovery scores").

      CONTEXTUAL MAPPINGS:
      - Recovery Score < 40 $\rightarrow$ Suggest Deload/Rest.
      - Sleep < 6h $\rightarrow$ Warn about cognitive load/study efficiency.
      - Budget < 10% $\rightarrow$ Alert about spending.
    `;
  }

  /**
   * Generates the prompt for the Daily Briefing.
   */
  static async generateDailyBriefingPrompt(snapshot: LifeSnapshot): Promise<string> {
    return `
      Today's Date: ${snapshot.date}

      LIFE SNAPSHOT:
      - Health: Weight ${snapshot.health?.weight}kg, Sleep ${snapshot.health?.sleep_duration_mins}m, Recovery ${snapshot.health?.recovery_score}/100.
      - Workouts: ${snapshot.workouts.map(w => w.session_name).join(', ') || 'None planned'}.
      - Top Tasks: ${snapshot.topTasks.map(t => t.title).join(', ')}.
      - Finance: Budget remaining ${snapshot.finance.budget_remaining}$.
      - Habit Completion: ${snapshot.habits.filter(h => h.completed).length}/${snapshot.habits.length}.

      Based on this data, generate a "Daily Briefing".
      It should be a short, premium summary:
      1. A warm greeting.
      2. Analysis of the day's readiness (Recovery/Sleep $\rightarrow$ Training).
      3. Critical focus (Top task/Deadline).
      4. A financial or habit nudge.
      5. One "Power Move" for the day.
    `;
  }
}
