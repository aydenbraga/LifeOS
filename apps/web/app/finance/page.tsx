import React from 'react';

export default function FinanceGoalsHub() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10">
      <header className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold premium-text-gradient">Financial Command</h1>
          <p className="text-lifeos-muted">Wealth management and long-term vision engineering.</p>
        </div>
        <div className="flex gap-3">
          <button className="glass-card px-4 py-2 text-sm font-medium hover:bg-white/10">Reports</button>
          <button className="bg-lifeos-accent px-4 py-2 rounded-xl text-sm font-medium text-white shadow-lg shadow-indigo-500/20">+ Add Transaction</button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Col: Wealth Snapshot */}
        <div className="lg:col-span-1 space-y-6">
          <h3 className="text-xl font-semibold px-1">Asset Portfolio</h3>
          <div className="space-y-4">
            <AssetCard label="Cash Reserves" value="$12,450" trend="+2.4%" color="bg-emerald-500" />
            <AssetCard label="S&P 500 ETF" value="$8,200" trend="+1.1%" color="bg-blue-500" />
            <AssetCard label="Crypto Portfolio" value="$3,150" trend="-4.2%" color="bg-purple-500" />
            <AssetCard label="Savings Goal" value="$25,000" trend="45% reach" color="bg-indigo-500" />
          </div>

          <div className="glass-panel p-6 space-y-4 bg-emerald-500/5 border-emerald-500/20">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Monthly Budget</h3>
              <span className="text-xs font-mono text-emerald-400">Healthy</span>
            </div]
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-lifeos-muted">Spent</span>
                <span>$840 / $1,200</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[70%] transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Middle/Right Col: Transactional Flow & Vision */}
        <div className="lg:col-span-2 space-y-8">
          <section className="space-y-6">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-xl font-semibold">Recent Transactions</h3>
              <button className="text-xs text-lifeos-accent font-medium">View All</button>
            </div]

            <div className="space-y-3">
              <TransactionRow label="Grocery Store" amount="- $124.50" category="Food" date="Yesterday" type="expense" />
              <TransactionRow label="Freelance Payment" amount="+ $1,200.00" category="Income" date="2 days ago" type="income" />
              <TransactionRow label="Netflix Subscription" amount="- $15.99" category="Entertainment" date="3 days ago" type="expense" />
              <TransactionRow label="Gym Membership" amount="- $60.00" category="Health" date="1 week ago" type="expense" />
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-xl font-semibold">Vision & Goal System</h3>
            </div]
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <GoalCard
                category="Financial"
                title="Emergency Fund"
                target="$10,000"
                progress={60}
                milestones={3}
              />
              <GoalCard
                category="Career"
                title="Software Engineer L4"
                target="Promotion"
                progress={30}
                milestones={5}
              />
              <GoalCard
                category="Fitness"
                title="Vertical Jump 30\""
                target="30 inch"
                progress={85}
                milestones={2}
              />
              <GoalCard
                category="Faith"
                title="Daily Devotional"
                target="365 Days"
                progress={40}
                milestones={12}
              />
            </div>
          </section>

          {/* AI Financial Insight */}
          <div className="glass-panel p-6 space-y-4 bg-gradient-to-br from-emerald-800/30 to-transparent">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-sm">💰</div>
              <div className="space-y-2">
                <p className="text-sm leading-relaxed text-lifeos-text">
                  "Your spending in <span className="text-white font-semibold">Entertainment</span> is 15% lower this month. I suggest allocating the surplus ($120) toward your <span className="text-white font-semibold">S&P 500 ETF</span> to accelerate your long-term compound growth."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssetCard({ label, value, trend, color }: { label: string, value: string, trend: string, color: string }) {
  return (
    <div className="glass-card p-4 space-y-2">
      <span className="text-xs text-lifeos-muted uppercase tracking-wider">{label}</span>
      <div className="flex justify-between items-baseline">
        <span className="text-2xl font-bold">{value}</span>
        <span className={`text-xs font-medium ${trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{trend}</span>
      </div>
      <div className={`h-1 w-full rounded-full opacity-20 ${color}`} />
    </div>
  );
}

function TransactionRow({ label, amount, category, date, type }: { label: string, amount: string, category: string, date: string, type: 'income' | 'expense' }) {
  return (
    <div className="glass-card p-4 flex items-center justify-between hover:border-white/20 transition-all">
      <div className="flex items-center gap-4">
        <div className={`w-1 h-8 rounded-full ${type === 'income' ? 'bg-emerald-500' : 'bg-red-500'}`} />
        <div>
          <span className="block font-medium text-sm">{label}</span>
          <span className="text-xs text-lifeos-muted">{category} • {date}</span>
        </div>
      </div>
      <span className={`font-mono font-bold ${type === 'income' ? 'text-green-400' : 'text-white'}`}>{amount}</span>
    </div>
  );
}

function GoalCard({ category, title, target, progress, milestones }: { category: string, title: string, target: string, progress: number, milestones: number }) {
  return (
    <div className="glass-card p-5 space-y-4">
      <div className="flex justify-between items-start">
        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-white/10 text-lifeos-muted">{category}</span>
        <span className="text-xs font-bold">{progress}%</span>
      </div>
      <h4 className="font-semibold text-sm">{title}</h4>
      <div className="flex justify-between items-center text-xs text-lifeos-muted">
        <span>Target: {target}</span>
        <span>{milestones} milestones left</span>
      </div>
      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <div className="h-full bg-lifeos-accent w-full transition-all" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
