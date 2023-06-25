/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'background': '#472e17',
                'primary': '#f19f53',
                'secondary': '#80542c',
                'accent': '#ffffff',
            }
        },
    },
    plugins: [],
}
