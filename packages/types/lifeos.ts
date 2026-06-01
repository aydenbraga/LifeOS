export interface HealthMetric {
  weight: number;
  body_fat_pct?: number;
  lean_mass?: number;
  sleep_duration_mins: number;
  sleep_quality_score: number;
  water_intake_ml?: number;
  steps?: number;
  heart_rate_avg?: number;
  recovery_score: number;
  mood_score: number;
  energy_level: number;
}

export interface WorkoutSession {
  session_name: string;
  total_volume: number;
  duration_mins: number;
}

export interface AcademicTask {
  title: string;
  due_date: string;
  status: string;
  priority: number;
}

export interface FinancialSummary {
  monthly_spend: number;
  budget_remaining: number;
  investment_trend: 'up' | 'down' | 'flat';
}
