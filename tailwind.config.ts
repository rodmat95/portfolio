import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      nav: "822px", // Breakpoint personalizado para la navegación
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Editorial color palette
        editorial: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        // Accent color - Electric Blue
        electric: {
          50: "#edfaff",
          100: "#d6f2ff",
          200: "#b5e9ff",
          300: "#83ddff",
          400: "#48c7ff",
          500: "#1ea8ff",
          600: "#0087ff",
          700: "#006be0",
          800: "#0058b0",
          900: "#064b8a",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "scroll-down": {
          "0%": { transform: "translateY(0)", opacity: "0.8" },
          "50%": { transform: "translateY(10px)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "0.8" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "cursor-blink": "cursor-blink 1s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "scroll-down": "scroll-down 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "var(--tw-prose-body)",
            lineHeight: "1.75",
          },
        },
      },
      gridTemplateColumns: {
        "12": "repeat(12, minmax(0, 1fr))",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    ({ addBase, theme }) => {
      addBase({
        // Remove focus ring from all interactive elements
        'button:focus, [type="button"]:focus, [type="reset"]:focus, [type="submit"]:focus': {
          outline: "none",
          boxShadow: "none",
        },
        "a:focus, input:focus, select:focus, textarea:focus": {
          outline: "none",
          boxShadow: "none",
        },
        // Add subtle focus styles for keyboard navigation (for accessibility)
        'button:focus-visible, [type="button"]:focus-visible, [type="reset"]:focus-visible, [type="submit"]:focus-visible':
          {
            backgroundColor: theme("colors.primary.DEFAULT", "currentColor") + "10",
            borderColor: theme("colors.primary.DEFAULT", "currentColor") + "50",
          },
        "a:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible": {
          backgroundColor: theme("colors.primary.DEFAULT", "currentColor") + "10",
          borderColor: theme("colors.primary.DEFAULT", "currentColor") + "50",
        },
      })
    },
  ],
} satisfies Config

export default config
