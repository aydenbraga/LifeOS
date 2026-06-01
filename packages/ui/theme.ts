export const colors = {
  background: '#050505',
  surface: {
    primary: '#121212',
    secondary: '#1e1e1e',
    tertiary: '#2a2a2a',
    glass: 'rgba(20, 20, 20, 0.7)',
  },
  accent: {
    primary: '#6366f1', // Indigo 500
    secondary: '#a855f7', // Purple 500
    success: '#22c55e', // Green 500
    warning: '#f59e0b', // Amber 500
    danger: '#ef4444', // Red 500
  },
  text: {
    primary: '#f8fafc', // Slate 50
    secondary: '#94a3b8', // Slate 400
    tertiary: '#64748b', // Slate 500
  },
  border: 'rgba(255, 255, 255, 0.1)',
}

export type ColorScale = keyof typeof colors;
