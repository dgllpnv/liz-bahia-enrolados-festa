
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Tangled theme colors - saturação aumentada
				rapunzel: {
					purple: '#E0D6FF',
					'purple-dark': '#D0ACFF',
					peach: '#FFD6BE',
					pink: '#FFD0D8',
					blue: '#C5DFFF',
					gold: '#FFD700',
				},
				// Royal theme colors - cores mais intensas e vibrantes
				royal: {
					gold: '#F7C530',          // Dourado mais vibrante
					cream: '#FFF8E1',
					beige: '#F5F5DC',
					burgundy: '#9B0026',      // Bordô mais intenso
					purple: '#6D2B9A',        // Roxo mais profundo
					lilac: '#CC8DE0',         // Lilás mais vibrante
					lavender: '#9D6FE8',      // Lavanda mais saturado
					pink: '#FF2E93',          // Rosa mais vibrante e forte
					'pink-light': '#FF8BC5',  // Rosa claro mais colorido
					'gold-light': '#FFDA55',  // Dourado claro mais intenso
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'float-slow': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-5px)'
					}
				},
				'float-horizontal': {
					'0%, 100%': {
						transform: 'translateX(0)'
					},
					'50%': {
						transform: 'translateX(10px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.6'
					}
				},
				'hair-flow': {
					'0%': {
						transform: 'translateX(0) rotate(0deg)'
					},
					'50%': {
						transform: 'translateX(20px) rotate(5deg)'
					},
					'100%': {
						transform: 'translateX(0) rotate(0deg)'
					}
				},
				'lantern-float': {
					'0%': {
						transform: 'translateY(0) translateX(0)'
					},
					'25%': {
						transform: 'translateY(-15px) translateX(10px)'
					},
					'50%': {
						transform: 'translateY(-30px) translateX(0)'
					},
					'75%': {
						transform: 'translateY(-15px) translateX(-10px)'
					},
					'100%': {
						transform: 'translateY(0) translateX(0)'
					}
				},
				'flourish-float': {
					'0%': {
						transform: 'translateY(0) translateX(0) rotate(0deg)'
					},
					'25%': {
						transform: 'translateY(-10px) translateX(5px) rotate(2deg)'
					},
					'50%': {
						transform: 'translateY(-20px) translateX(0) rotate(0deg)'
					},
					'75%': {
						transform: 'translateY(-10px) translateX(-5px) rotate(-2deg)'
					},
					'100%': {
						transform: 'translateY(0) translateX(0) rotate(0deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-slow': 'float-slow 8s ease-in-out infinite',
				'float-horizontal': 'float-horizontal 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
				'hair-flow': 'hair-flow 10s ease-in-out infinite',
				'lantern-float': 'lantern-float 15s ease-in-out infinite',
				'flourish-float': 'flourish-float 18s ease-in-out infinite'
			},
			fontFamily: {
				tangled: ['Tangled', 'serif'],
				storybook: ['Storybook', 'serif'],
				fairytale: ['Fairytale', 'cursive'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
