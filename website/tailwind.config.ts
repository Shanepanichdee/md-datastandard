import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg:          '#070710',
        'bg-card':   '#0D0D1C',
        'bg-elev':   '#121228',
        gold:        '#C9A84C',
        teal:        '#3ECFBE',
        rose:        '#E8697A',
        lav:         '#9B8FD4',
        amber:       '#E8A84C',
        ink:         '#EDE9E0',
        muted:       '#7A788C',
        dim:         '#4A4860',
        border:      'rgba(255,255,255,0.06)',
        'gold-b':    'rgba(201,168,76,0.22)',
        'gold-d':    'rgba(201,168,76,0.12)',
        'teal-d':    'rgba(62,207,190,0.1)',
        'rose-d':    'rgba(232,105,122,0.1)',
        'lav-d':     'rgba(155,143,212,0.1)',
      },
      fontFamily: {
        serif:  ['var(--font-serif)', 'Georgia', 'serif'],
        body:   ['var(--font-body)', 'Georgia', 'serif'],
        mono:   ['var(--font-mono)', 'monospace'],
      },
      animation: {
        drift1: 'drift1 18s ease-in-out infinite alternate',
        drift2: 'drift2 24s ease-in-out infinite alternate-reverse',
        pulse2: 'scrollPulse 2s ease-in-out infinite',
      },
      keyframes: {
        drift1: { from: { transform: 'translate(0,0) scale(1)' }, to: { transform: 'translate(40px,30px) scale(1.1)' } },
        drift2: { from: { transform: 'translate(0,0) scale(1)' }, to: { transform: 'translate(-30px,20px) scale(1.08)' } },
        scrollPulse: {
          '0%,100%': { opacity: '0.3', transform: 'scaleY(1)' },
          '50%':     { opacity: '1',   transform: 'scaleY(0.7)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
