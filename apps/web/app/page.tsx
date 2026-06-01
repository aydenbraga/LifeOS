import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <header className="flex justify-between items-end">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold premium-text-gradient">Good Morning, Ayden</h1>
          <p className="text-lifeos-muted">Monday, June 1st, 2026</p>
        </div>
        <div className="glass-panel px-4 py-2 text-sm font-medium">
          Current Energy: <span className="text-lifeos-accent">88%</span>
        </div>
      </header>

      {/* AI Daily Briefing */}
      <section className="glass-panel p-6 bg-gradient-to-br from-indigo-500/10 to-transparent border-indigo-500/20">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-lifeos-accent flex items-center justify-center shadow-lg shadow-indigo-500/20">
            ✨
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">AI Daily Briefing</h2>
            <p className="text-lifeos-muted leading-relaxed">
              You slept <span className="text-white">7h 52m</span>, recovery is above average, and today is an ideal day for <span className="text-white font-medium">intense training</span>.
              You have <span className="text-white font-medium">one university task</span> due in 3 days, and you are <span className="text-green-400">under budget</span> for the week.
            </p>
          </div>
        </div>
      </section>

      {/* Today's Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Widget title="Body Metrics" value="82.4 kg" delta="-0.2kg" icon="⚖️" />
        <Widget title="Sleep Quality" value="84%" delta="+2%" icon="🌙" />
        <Widget title="Workout Volume" value="12,400 kg" delta="+500kg" icon="🏋️" />
        <Widget title="Study Focus" value="4.2 hrs" delta="-0.5h" icon="📖" />
        <Widget title="Cash Flow" value="+$1,200" delta="+12%" icon="📈" />
        <Widget title="Habit Streak" value="14 Days" delta="🔥" icon="✨" />
      </div>

      {/* Upcoming Agenda */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold px-1">Upcoming Agenda</h3>
        <div className="space-y-2">
          <AgendaItem time="08:00 AM" task="Deep Work: Algorithm Design" category="Study" color="bg-blue-500" />
          <AgendaItem time="11:00 AM" task="Leg Day: Hypertrophy" category="Gym" color="bg-purple-500" />
          <AgendaItem time="02:00 PM" task="University Lecture: OS Theory" category="Study" color="bg-blue-500" />
          <AgendaItem time="06:00 PM" task="Basketball Drills" category="Sport" color="bg-orange-500" />
        </div>
      </section>
    </div>
  );
}

function Widget({ title, value, delta, icon }: { title: string, value: string, delta: string, icon: string }) {
  return (
    <div className="glass-card p-6 space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium text-lifeos-muted uppercase tracking-wider">{title}</span>
        <span className="text-xl">{icon}</span>
      </div>
      <div className="flex justify-between items-baseline">
        <span className="text-3xl font-bold">{value}</span>
        <span className={`text-xs font-medium ${delta.startsWith('+') ? 'text-green-400' : delta.startsWith('-') ? 'text-red-400' : 'text-lifeos-accent'}`}>
          {delta}
        </span>
      </div>
    </div>
  );
}

function AgendaItem({ time, task, category, color }: { time: string, task: string, category: string, color: string }) {
  return (
    <div className="glass-card p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-xs font-mono text-lifeos-muted">{time}</span>
        <span className="font-medium">{task}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${color}`} />
        <span className="text-xs text-lifeos-muted">{category}</span>
      </div>
    </div>
  );
}
