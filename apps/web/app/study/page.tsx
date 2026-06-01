import React, { useState } from 'react';

export default function StudyHub() {
  const [timer, setTimer] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10">
      <header className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold premium-text-gradient">Academic Hub</h1>
          <p className="text-lifeos-muted">Precision management of your university trajectory.</p>
        </div>
        <div className="flex gap-3">
          <button className="glass-card px-4 py-2 text-sm font-medium hover:bg-white/10">GPA Calculator</button>
          <button className="bg-lifeos-accent px-4 py-2 rounded-xl text-sm font-medium text-white shadow-lg shadow-indigo-500/20">+ Add Assignment</button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Col: Courses & Progress */}
        <div className="lg:col-span-1 space-y-6">
          <h3 className="text-xl font-semibold px-1">Active Courses</h3>
          <div className="space-y-4">
            <CourseCard name="Operating Systems" code="FIT1008" progress={65} color="bg-blue-500" />
            <CourseCard name="Discrete Mathematics" code="MAT2001" progress={42} color="bg-purple-500" />
            <CourseCard name="Computer Architecture" code="CSE3002" progress={88} color="bg-indigo-500" />
            <CourseCard name="Database Design" code="FIT2005" progress={20} color="bg-emerald-500" />
          </div>

          {/* Pomodoro Timer */}
          <div className="glass-panel p-6 space-y-4 bg-indigo-500/5 border-indigo-500/20">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Focus Timer</h3>
              <span className="text-xs font-mono text-lifeos-accent">Pomodoro</span>
            </div>
            <div className="text-center py-4">
              <div className="text-5xl font-bold font-mono tracking-tighter">
                {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsActive(!isActive)}
                className="flex-1 py-2 rounded-lg bg-lifeos-accent text-white text-sm font-medium"
              >
                {isActive ? 'Pause' : 'Start Focus'}
              </button>
              <button
                onClick={() => {setIsActive(false); setTimer(25*60)}}
                className="px-3 py-2 rounded-lg bg-white/5 text-sm hover:bg-white/10"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Middle/Right Col: Assignments & AI Planner */}
        <div className="lg:col-span-2 space-y-8">
          <section className="space-y-6">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-xl font-semibold">Upcoming Deadlines</h3>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-lifeos-muted">All</span>
                <span className="text-xs px-2 py-1 rounded-full bg-lifeos-accent/20 border border-lifeos-accent/30 text-lifeos-accent">Priority</span>
              </div>
            </div>

            <div className="space-y-3">
              <AssignmentRow title="Algorithm Analysis Report" course="FIT1008" due="3 Days" priority="High" weight="15%" />
              <AssignmentRow title="Linear Algebra Quiz 2" course="MAT2001" due="5 Days" priority="Medium" weight="10%" />
              <AssignmentRow title="CPU Cache Simulation" course="CSE3002" due="1 Week" priority="Low" weight="20%" />
              <AssignmentRow title="ER Diagram Submission" course="FIT2005" due="12 Days" priority="Medium" weight="5%" />
            </div>
          </section>

          {/* AI Study Assistant Section */}
          <section className="space-y-6">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-xl font-semibold">AI Study Assistant</h3>
              <span className="text-xs text-lifeos-accent animate-pulse">Thinking...</span>
            </div>
            <div className="glass-panel p-6 space-y-4 bg-gradient-to-br from-slate-800/40 to-transparent">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-lifeos-accent flex items-center justify-center text-sm">🧠</div>
                <div className="space-y-2">
                  <p className="text-sm leading-relaxed text-lifeos-text">
                    "Based on your current laod, I recommend prioritizing the <span className="text-white font-semibold">Algorithm Analysis Report</span> tonight. Your energy levels are currently high (8/10), making it the perfect window for deep conceptual work."
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-3 rounded-xl bg-white/5 border border-white/10 text-left text-xs hover:bg-white/10 transition-all">
                  <span className="block font-semibold text-white">Generate Study Plan</span>
                  <span className="text-lifeos-muted">Optimize my week</span>
                </button>
                <button className="p-3 rounded-xl bg-white/5 border border-white/10 text-left text-xs hover:bg-white/10 transition-all">
                  <span className="block font-semibold text-white">Break Down Task</span>
                  <span className="text-lifeos-muted">Divide Algorithm Report</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function CourseCard({ name, code, progress, color }: { name: string, code: string, progress: number, color: string }) {
  return (
    <div className="glass-card p-4 space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xs font-mono text-lifeos-muted">{code}</span>
          <h4 className="font-medium text-sm">{name}</h4>
        </div>
        <span className="text-xs font-bold">{progress}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full ${color} transition-all duration-500`} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

function AssignmentRow({ title, course, due, priority, weight }: { title: string, course: string, due: string, priority: string, weight: string }) {
  const priorityColor = priority === 'High' ? 'text-red-400' : priority === 'Medium' ? 'text-amber-400' : 'text-lifeos-muted';

  return (
    <div className="glass-card p-4 flex items-center justify-between hover:border-white/20 transition-all">
      <div className="flex items-center gap-4">
        <div className="w-1 h-8 rounded-full bg-lifeos-accent" />
        <div className="flex flex-col">
          <span className="block font-medium text-sm">{title}</span>
          <span className="text-xs text-lifeos-muted">{course} • {weight} of grade</span>
        </div>
      </div>
      <div className="text-right space-y-1">
        <span className="block text-sm font-medium">{due}</span>
        <span className={`text-[10px] uppercase tracking-widest font-bold ${priorityColor}`}>{priority}</span>
      </div>
    </div>
  );
}
