/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h4': ['1.875rem', { lineHeight: '1.4' }],
        'h5': ['1.5rem', { lineHeight: '1.4' }],
        'h6': ['1.25rem', { lineHeight: '1.5' }],
        'base-plus': ['1.125rem', { lineHeight: '1.75' }],
        'base': ['1rem', { lineHeight: '1.75' }],
        'sm-plus': ['0.9375rem', { lineHeight: '1.6' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'xs': ['0.75rem', { lineHeight: '1.5' }],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
      },
      colors: {
        bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#4a8b94",
        designColorLight: "#5ba4ae",
        designColorDark: "#3d757c",
        textPrimary: "#ffffff",
        textSecondary: "#c4cfde",
        textMuted: "#878e99",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'bounce-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3)'
          },
          '50%': {
            transform: 'scale(1.05)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        'fade-in-zoom': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        'split-fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'scale-fade-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        'slide-up-fade': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'scale-in-center': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'bounce-in': 'bounceIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'scale-fade-in': 'scaleFadeIn 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        'split-fade-in': 'splitFadeIn 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'bounce-in': 'bounce-in 0.6s ease-out',
        'fade-in-zoom': 'fade-in-zoom 0.6s ease-out',
        'split-fade-in': 'split-fade-in 0.6s ease-out',
        'scale-fade-in': 'scale-fade-in 0.8s ease-out',
        'slide-up-fade': 'slide-up-fade 0.6s ease-out',
        'scale-in-center': 'scale-in-center 0.6s ease-out'
      }
    },
  },
  plugins: [],
};
