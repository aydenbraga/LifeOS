import React, { useState } from 'react';

export default function HealthGymHub() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold premium-text-gradient">Performance Hub</h1>
          <p className="text-lifeos-muted">Optimize your biology and athletic output.</p>
        </div>
        <div className="flex gap-3">
          <button className="glass-card px-4 py-2 text-sm font-medium hover:bg-white/10">Export Data</button>
          <button className="bg-lifeos-accent px-4 py-2 rounded-xl text-sm font-medium text-white shadow-lg shadow-indigo-500/20">Log Session</button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Col: Daily Biometrics */}
        <div className="lg:col-span-1 space-y-6">
          <h3 className="text-xl font-semibold px-1">Daily Biometrics</h3>
          <div className="space-y-4">
            <BiometricInput label="Body Weight" unit="kg" value="82.4" />
            <BiometricInput label="Sleep Duration" unit="hrs" value="7.8" />
            <BiometricInput label="Recovery Score" unit="%" value="88" />
            <BiometricInput label="Water Intake" unit="ml" value="3200" />
            <BiometricInput label="Energy Level" unit="/10" value="8" />
            <BiometricInput label="Mood Score" unit="/10" value="7" />
          </div>
          <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-all">
            Save Biometrics
          </button>
        </div>

        {/* Middle/Right Col: Gym & Performance */}
        <div className="lg:col-span-2 space-y-8">
          <section className="space-y-6">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-xl font-semibold">Workout Log</h3>
              <button className="text-xs text-lifeos-accent font-medium">+ Add Exercise</button>
            </div>

            <div className="glass-panel p-6 space-y-6">
              <div className="flex justify-between items-center mb-4">
                <input
                  className="bg-transparent text-2xl font-bold outline-none border-b border-transparent focus:border-lifeos-accent transition-all"
                  defaultValue="Leg Day Hypertrophy"
                />
                <span className="text-xs font-mono text-lifeos-muted">Session: 75m</span>
              </div>

              <div className="space-y-4">
                <ExerciseRow name="Back Squat" sets={4} reps={8} weight={140} />
                <ExerciseRow name="Leg Press" sets={3} reps={12} weight={220} />
                <ExerciseRow name="Leg Extension" sets={3} reps={15} weight={80} />
                <ExerciseRow name="Calf Raises" sets={4} reps={20} weight={100} />
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-xl font-semibold">Athletic Metrics</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PerformanceCard label="Vertical Jump" value="28.5 in" delta="+0.5 in" />
              <PerformanceCard label="40yd Sprint" value="4.62s" delta="-0.05s" />
              <PerformanceCard label="Agility T-Test" value="11.2s" delta="0.0s" />
              <PerformanceCard label="Max Bench" value="110kg" delta="+2.5kg" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function BiometricInput({ label, unit, value }: { label: string, unit: string, value: string }) {
  return (
    <div className="glass-card p-4 flex justify-between items-center">
      <span className="text-sm text-lifeos-muted">{label}</span>
      <div className="flex items-center gap-2">
        <input
          className="bg-black/20 border border-white/10 rounded-lg px-2 py-1 text-right text-sm font-medium w-20 outline-none focus:border-lifeos-accent"
          defaultValue={value}
        />
        <span className="text-xs text-lifeos-muted">{unit}</span>
      </div>
    </div>
  );
}

function ExerciseRow({ name, sets, reps, weight }: { name: string, sets: number, reps: number, weight: number }) {
  return (
    <div className="grid grid-cols-4 items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
      <span className="font-medium">{name}</span>
      <div className="flex items-center gap-2">
        <span className="text-xs text-lifeos-muted">Sets</span>
        <input className="bg-transparent text-center w-8 text-sm" defaultValue={sets} />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-lifeos-muted">Reps</span>
        <input className="bg-transparent text-center w-8 text-sm" defaultValue={reps} />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-lifeos-muted">Kg</span>
        <input className="bg-transparent text-center w-12 text-sm" defaultValue={weight} />
      </div>
    </div>
  );
}

function PerformanceCard({ label, value, delta }: { label: string, value: string, delta: string }) {
  return (
    <div className="glass-card p-5 space-y-2">
      <span className="text-xs font-medium text-lifeos-muted uppercase">{label}</span>
      <div className="flex justify-between items-baseline">
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-xs text-green-400 font-medium">{delta}</span>
      </div>
    </div>
  );
}
