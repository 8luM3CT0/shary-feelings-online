module.exports = {
    mode: 'jit',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    media: false,
    theme: {
        extend: {
            fontFamily: {
                'google-sans': ['Open Sans', 'sans-serif'],
                'hind-font': ['Hind', 'sans-serif'],
                'font-robot': ['Roboto', 'sans-serif'],
                'robot-condensed': ['Roboto Condensed', 'sans-serif'],
                'robot-slab': ['Roboto Slab', 'serif'],
                'source-serif': ['Source Serif Pro', 'serif']
            },
            backgroundImage: theme => ({
                'mm-lakes': 'url(https://www.mercurynews.com/wp-content/uploads/2018/10/MAMMOTH5.jpg)'
            })
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
        require('@tailwindcss/line-clamp')
    ],
}