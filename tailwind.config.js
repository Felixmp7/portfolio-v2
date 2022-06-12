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
            'custom-purple': '#582DE8',
            react: '#54def2',
        }),
        borderColor: (theme) => ({
            ...theme('colors'),
            react: '#54def2',
        }),
        backgroundColor: (theme) => ({
            ...theme('colors'),
            'custom-black': '#080a10',
            'custom-purple': '#582DE8',
            react: '#54def2',
        }),
        screens: {
            mobileXs: '350px',
            mobileSm: '420px',
            mobileMd: '480px',
            mobile: '520px',
            mobileLg: '600px',
            mobileXl: '680px',
            tablet: '762px',
            tabletLg: '880px',
            tabletXl: '952px',
            laptop: '1024px',
            laptopLg: '1180px',
            laptopXl: '1260px',
            desktop: '1344px',
        },
        extend: {
            minHeight: {
                '90-screen': '90vh',
                'screen-3/4': '75vh',
            },
        },
    },
    plugins: [],
};
