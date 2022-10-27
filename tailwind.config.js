/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {}
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            'main',
            {
                main: {
                    primary: '#d946ef',
                    secondary: '#8b5cf6',
                    accent: '#ec4899',
                    'base-100': '#111'
                }
            }
        ]
    }
}
