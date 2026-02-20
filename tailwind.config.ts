import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      colors: {
        /* semantic tokens mapped to CSS variables */
        background: "var(--color-bg)",
        foreground: "var(--color-text)",
        border: "var(--color-border)",
        input: "var(--color-border)",
        ring: "var(--color-focus-ring)",

        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        muted: "var(--color-muted)",
        destructive: "var(--color-danger)",
        danger: "var(--color-danger)",

        /* convenience aliases so existing utility classes still work */
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        card: "var(--color-surface)",
        "card-foreground": "var(--color-text)",
        "muted-foreground": "var(--color-muted)",
        "primary-foreground": "var(--color-text-inverse)",
        "accent-foreground": "var(--color-text-inverse)",
        secondary: "var(--color-accent)",
        "secondary-foreground": "var(--color-text-inverse)",
        sidebar: {
          DEFAULT: "var(--color-bg)",
          foreground: "var(--color-text)",
          primary: "var(--color-primary)",
          "primary-foreground": "var(--color-text-inverse)",
          accent: "var(--color-accent)",
          "accent-foreground": "var(--color-text-inverse)",
          border: "var(--color-border)",
          ring: "var(--color-focus-ring)",
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
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
