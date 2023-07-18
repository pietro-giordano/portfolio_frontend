/** @type {import('tailwindcss').Config} */
export default {
      content: [
            "./index.html",
            "./src/**/*.{js,vue}",
      ],
      theme: {
            colors: {
                  'bblack': '#1f1e1a',
                  'grey': '#494844',
                  'grey-light': '#5d5c59',
                  'orange': '#ff6000',
                  'orange-light': '#FFA559',
                  'orange-very': '#ffe6c7',
                  'white': 'white'
            },
            boxShadow: {
                  'none': '0px 0px 0px 0px #000',
                  'o': '0px 0px 10px 6px #FFA559',
                  'o2': '0px 0px 8px 6px #FFA559',
                  'o3': '0px 0px 8px 6px #FF6000'
            },
      },
      plugins: [],
}

