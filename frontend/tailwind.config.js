/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Swahili Pot Color Palette
                primary: '#E74C3C',    // Coral/Orange Red - Main Actions, Buttons
                secondary: '#F5E6D3',  // Warm Beige - Backgrounds (Karibu warmth)
                accent: '#4A4A4A',     // Dark Gray/Charcoal - Text, Headings
                neutral: '#FFFFFF',    // White - Cards, Content Areas
                success: '#10B981',    // Green for success messages
                warning: '#F59E0B',    // Amber for warnings
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'], // Elegant headings
                sans: ['Inter', 'sans-serif'],        // Clean body text
            }
        },
    },
    plugins: [],
}
