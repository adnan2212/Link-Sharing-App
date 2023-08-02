/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "upload-img": 'url("/src/assets/icons/con-upload-image.svg")',
        phoneMockup: 'url("/src/assets/images/illustration-phone-mockup.svg")'
      }
    }
  },
  plugins: []
};
