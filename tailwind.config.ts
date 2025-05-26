import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"
import tailwindcssAnimate from "tailwindcss-animate";

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
    extend: {
      fontFamily: {
        serif: ["Georgia", "serif"],
      },
      colors: {
        // Custom brand colors
        primary: {
          50: "#E6EEF7",
          100: "#CCDDEF",
          200: "#99BBDF",
          300: "#6699CF",
          400: "#3377BF",
          500: "#0056AF",
          600: "#00448C",
          700: "#00346E", // Main brand color
          800: "#002A5A",
          900: "#001F42",
          DEFAULT: "#00346E",
          foreground: colors.white,
        },
        secondary: {
          50: "#FFF8E6",
          100: "#FFF1CC",
          200: "#FFE299",
          300: "#FFD466",
          400: "#FFC533",
          500: "#F0A500", // Complementary gold/orange
          600: "#CC8A00",
          700: "#A36F00",
          800: "#7A5500",
          900: "#523A00",
          DEFAULT: "#F0A500",
          foreground: colors.gray[900],
        },
        accent: {
          50: "#E6F9FB",
          100: "#CCF3F7",
          200: "#99E7EF",
          300: "#66DBE7",
          400: "#33CFDF",
          500: "#00C3D7",
          600: "#00A3B4", // Accent teal
          700: "#008291",
          800: "#00626E",
          900: "#00414B",
          DEFAULT: "#00A3B4",
          foreground: colors.white,
        },
        // Keep the shadcn system colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate]
} satisfies Config

export default config
