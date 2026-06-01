import React, { useState } from 'react';

export default function RoutineHub() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10">
      <header className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold premium-text-gradient">Life Planning</h1>
          <p className="text-lifeos-muted">Architecting the daily rhythm of a high-performance life.</p>
        </div>
        <div className="flex gap-3">
          <button className="glass-card px-4 py-2 text-sm font-medium hover:bg-white/10">Weekly Review</button>
          <button className="bg-lifeos-accent px-4 py-2 rounded-xl text-sm font-medium text-white shadow-lg shadow-indigo-500/20">+ New Habit</button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Col: Habit Tracker */}
        <div className="lg:col-span-1 space-y-6">
          <h3 className="text-xl font-semibold px-1">Habit Matrix</h3>
          <div className="space-y-4">
            <HabitRow name="Bible Study" streak={14} completed={true} />
            <HabitRow name="Prayer" streak={22} completed={true} />
            <HabitRow name="Gym" streak={12} completed={true} />
            <HabitRow name="Basketball Training" streak={5} completed={false} />
            <HabitRow name="Reading" streak={3} completed={false} />
            <HabitRow name="Stretching" streak={8} completed={true} />
          </div>

          <div className="glass-panel p-6 space-y-4 bg-indigo-500/5 border-indigo-500/20">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Consistency Score</h3>
              <span className="text-2xl font-bold text-lifeos-accent">82%</span>
            </div]
            <p className="text-xs text-lifeos-muted leading-relaxed">
              Your consistency is up 12% from last week. Maintaining the "Bible Study" streak is positively impacting your mood scores.
            </p>
          </div>
        </div>

        {/* Middle/Right Col: Unified Calendar & Planning */}
        <div className="lg:col-span-2 space-y-8">
          <section className="space-y-6">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-xl font-semibold">Daily Agenda</h3>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-lifeos-accent text-white">Today</span>
                <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-lifeos-muted">Tomorrow</span>
                <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-lifeos-muted">Weekly</span>
              </div>
            </div>

            <div className="space-y-3">
              <CalendarItem time="06:00 AM" event="Prayer & Devotional" category="Faith" color="bg-amber-500" />
              <CalendarItem time="07:30 AM" event="Fasted Cardio / Stretch" category="Health" color="bg-emerald-500" />
              <CalendarItem time="09:00 AM" event="Algorithm Design Session" category="Study" color="bg-blue-500" />
              <CalendarItem time="12:00 PM" event="Lunch & Protein Shake" category="Health" color="bg-emerald-500" />
              <CalendarItem time="03:00 PM" event="OS Theory Lecture" category="Study" color="bg-blue-500" />
              <CalendarItem time="06:00 PM" event="Basketball Skill Work" category="Sport" color="bg-orange-500" />
              <CalendarItem time="09:00 PM" event="Daily Review & Planning" category="Personal" color="bg-indigo-500" />
            </div>
          </section>

          {/* AI Planning Assistant */}
          <section className="space-y-6">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-xl font-semibold">AI Scheduling Assistant</h3>
              <span className="text-xs text-lifeos-accent animate-pulse">Optimizing...</span>
            </div]
            <div className="glass-panel p-6 space-y-4 bg-gradient-to-br from-indigo-800/30 to-transparent">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-lifeos-accent flex items-center justify-center text-sm">📅</div>
                <div className="space-y-2">
                  <p className="text-sm leading-relaxed text-lifeos-text">
                    "I've noticed your <span className="text-white font-semibold">Basketball Training</span> usually happens at 6 PM, but your <span className="text-white font-semibold">Study Load</span> is peaking this Wednesday. I suggest shifting your deep work to 7 AM on Wednesday to free up mental space."
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs hover:bg-white/10 transition-all">
                  Ignore Suggestion
                </button>
                <button className="px-4 py-2 rounded-xl bg-lifeos-accent text-white text-xs font-medium hover:bg-indigo-600 transition-all">
                  Apply Optimization
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function HabitRow({ name, streak, completed }: { name: string, streak: number, completed: boolean }) {
  return (
    <div className="glass-card p-4 flex items-center justify-between hover:border-white/20 transition-all">
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${completed ? 'bg-lifeos-accent border-lifeos-accent' : 'border-white/20'}`}>
          {completed && <span className="text-[10px] text-white">✓</span>}
        </div>
        <span className="text-sm font-medium">{name}</span>
      </div>
      <div className="flex items-center gap-1 text-xs font-bold">
        <span className="text-orange-400">🔥</span>
        <span>{streak}</span>
      </div>
    </div>
  );
}

function CalendarItem({ time, event, category, color }: { time: string, event: string, category: string, color: string }) {
  return (
    <div className="glass-card p-4 flex items-center justify-between hover:border-white/20 transition-all">
      <div className="flex items-center gap-4">
        <span className="text-xs font-mono text-lifeos-muted w-20">{time}</span>
        <div className="flex items-center gap-3">
          <div className={`w-1 h-8 rounded-full ${color}`} />
          <span className="font-medium text-sm">{event}</span>
        </div>
      </div>
      <span className="text-xs text-lifeos-muted">{category}</span>
    </div>
  );
}
