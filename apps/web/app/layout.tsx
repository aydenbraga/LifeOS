import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LifeOS | Command Center',
  description: 'The intelligent operating system for a high-performance life.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-lifeos-bg text-lifeos-text overflow-hidden`}>
        <div className="flex h-screen w-full">
          {/* Sidebar */}
          <aside className="w-64 h-full border-r border-white/10 bg-black/20 backdrop-blur-xl flex flex-col p-6 gap-8">
            <div className="text-xl font-bold premium-text-gradient">
              LifeOS
            </div>

            <nav className="flex flex-col gap-2">
              <SidebarLink active label="Dashboard" icon="🏠" />
              <SidebarLink label="Health" icon="❤️" />
              <SidebarLink label="Gym" icon="💪" />
              <SidebarLink label="Study" icon="📚" />
              <SidebarLink label="Finance" icon="💰" />
              <SidebarLink label="Goals" icon="🎯" />
              <SidebarLink label="Habits" icon="🔄" />
            </nav>

            <div className="mt-auto p-4 glass-panel text-xs text-lifeos-muted">
              Chief-of-Staff v1.0.0<br />
              System Status: Optimal
            </div>
          </aside>

          <main className="flex-1 h-full overflow-y-auto relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

function SidebarLink({ label, icon, active = false }: { label: string, icon: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${active ? 'bg-lifeos-accent text-white' : 'text-lifeos-muted hover:bg-white/5 hover:text-white'}`}>
      <span>{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
