/** @type {import('tailwindcss').Config} */
export default {
      content: [
            "./index.html",
            "./src/**/*.{js,vue}",
      ],
      theme: {
            colors: {
                  'bblack': '#1f1e1a',
                  'orange': '#ff6000',
                  'orange-light': '#FFA559',
                  'orange-very': '#ffe6c7',
                  'white': 'white'
            },
            boxShadow: {
                  'none': '0px 0px 0px 0px #000',
                  'o': '0px 0px 10px 4px #FFA559'
            },
            extend: {},
      },
      plugins: [],
}

