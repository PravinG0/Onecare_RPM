/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          cta: 'var(--accent-cta)',
          'cta-hover': 'var(--accent-cta-hover)',
          ink: 'var(--accent-ink)',
          soft: 'var(--accent-soft)',
          tint: 'var(--accent-tint)',
          border: 'var(--accent-border)',
          glow: 'var(--accent-glow)',
        },
        slate: {
          dark: 'var(--slate-dark)',
          card: 'var(--slate-card)',
          subtle: 'var(--slate-subtle)',
        },
        aws: {
          gold: 'var(--aws-gold)',
        },
        brand: {
          bg: 'var(--bg)',
          'bg-alt': 'var(--bg-alt)',
          text: 'var(--text)',
          body: 'var(--text-body)',
          muted: 'var(--text-muted)',
          border: 'var(--border)',
        },
        ok: {
          DEFAULT: 'var(--ok)',
          soft: 'var(--ok-soft)',
        },
        critical: {
          DEFAULT: 'var(--critical)',
          soft: 'var(--critical-soft)',
          border: 'var(--critical-border)',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'sm-soft': 'var(--shadow-sm)',
        'md-soft': 'var(--shadow-md)',
        'lg-soft': 'var(--shadow-lg)',
        'glow-accent': '0 8px 30px rgba(30, 136, 229, 0.25)',
      },
      borderRadius: {
        panel: '16px',
        card: '14px',
      },
    },
  },
  plugins: [],
};
