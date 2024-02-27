module.exports = {
    content: [
        "./portfolio/templates/**/*.html", 
        // ... any other relevant paths
    ],
    theme: {
        fontFamily: { 
            sans: ['Poppins', 'sans-serif'],  // Poppins font 
        },
        extend: {
            colors: {
                'portfolio-bg': '#2b2c41',  // Your custom background
            },
        },
    },
    plugins: [],
};
