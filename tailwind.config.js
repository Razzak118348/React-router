import daisyui from './node_modules/daisyui'
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
}