
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom Sam-themed colors
				sam: {
					pink: '#FFB3D9',
					lavender: '#E6E6FA',
					cream: '#FFF8DC',
					warmPink: '#FFD1DC',
					softPurple: '#DDA0DD',
					paleYellow: '#FFFFE0'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float-in-left': {
					'0%': { transform: 'translateX(-100vw) rotate(-45deg)', opacity: '0' },
					'100%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' }
				},
				'float-in-right': {
					'0%': { transform: 'translateX(100vw) rotate(45deg)', opacity: '0' },
					'100%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' }
				},
				'float-in-top': {
					'0%': { transform: 'translateY(-100vh) scale(0.5)', opacity: '0' },
					'100%': { transform: 'translateY(0) scale(1)', opacity: '1' }
				},
				'float-in-bottom': {
					'0%': { transform: 'translateY(100vh) scale(0.5)', opacity: '0' },
					'100%': { transform: 'translateY(0) scale(1)', opacity: '1' }
				},
				'float-in-diagonal-tl': {
					'0%': { transform: 'translate(-100vw, -100vh) rotate(-90deg)', opacity: '0' },
					'100%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '1' }
				},
				'float-in-diagonal-tr': {
					'0%': { transform: 'translate(100vw, -100vh) rotate(90deg)', opacity: '0' },
					'100%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '1' }
				},
				'float-in-diagonal-bl': {
					'0%': { transform: 'translate(-100vw, 100vh) rotate(90deg)', opacity: '0' },
					'100%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '1' }
				},
				'float-in-diagonal-br': {
					'0%': { transform: 'translate(100vw, 100vh) rotate(-90deg)', opacity: '0' },
					'100%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '1' }
				},
				'heart-float': {
					'0%': { transform: 'translateY(100vh) scale(0)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateY(-100vh) scale(1)', opacity: '0' }
				},
				'pulse-heart': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.2)' }
				},
				'button-escape': {
					'0%': { transform: 'translate(0, 0)' },
					'100%': { transform: 'translate(var(--escape-x), var(--escape-y))' }
				},
				'gentle-sway': {
					'0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
					'25%': { transform: 'translateX(-10px) rotate(-2deg)' },
					'75%': { transform: 'translateX(10px) rotate(2deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float-in-left': 'float-in-left 2s ease-out forwards',
				'float-in-right': 'float-in-right 2s ease-out forwards',
				'float-in-top': 'float-in-top 1.5s ease-out forwards',
				'float-in-bottom': 'float-in-bottom 1.5s ease-out forwards',
				'float-in-diagonal-tl': 'float-in-diagonal-tl 2.5s ease-out forwards',
				'float-in-diagonal-tr': 'float-in-diagonal-tr 2.5s ease-out forwards',
				'float-in-diagonal-bl': 'float-in-diagonal-bl 2.5s ease-out forwards',
				'float-in-diagonal-br': 'float-in-diagonal-br 2.5s ease-out forwards',
				'heart-float': 'heart-float 4s linear infinite',
				'pulse-heart': 'pulse-heart 2s ease-in-out infinite',
				'button-escape': 'button-escape 0.3s ease-out forwards',
				'gentle-sway': 'gentle-sway 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
