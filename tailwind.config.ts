import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                button: {
                    primary: {
                        default: '#004E97',
                        hover: '#007BFF',
                    },
                },
            },
            fontFamily: {
                nunito: ['var(--font-nunito)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
