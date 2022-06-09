module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        textColor: (theme) => ({
            ...theme('colors'),
            react: '#54def2',
        }),
        borderColor: (theme) => ({
            ...theme('colors'),
            react: '#54def2',
        }),
        backgroundColor: (theme) => ({
            ...theme('colors'),
            react: '#54def2',
        }),
        extend: {
            minHeight: {
                '90-screen': '90vh',
                'screen-3/4': '75vh',
            },
        },
    },
    plugins: [],
};
