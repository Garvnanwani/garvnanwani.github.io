module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: 'var(--clr-primary)',
                secondary: 'var(--clr-secondary)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
