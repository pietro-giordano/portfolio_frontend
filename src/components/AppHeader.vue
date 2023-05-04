<script>
import VueWriter from 'vue-writer'
import Navbar from './Navbar.vue';

export default {
      name: 'AppHeader',
      components: {
            Navbar,
            VueWriter
      },
      data() {
            return {
                  social: [
                        {
                              name: 'facebook',
                              icon: 'fa-brands fa-facebook',
                              link: 'https://www.facebook.com/pietro.giordano.87/'
                        }, {
                              name: 'instagram',
                              icon: 'fa-brands fa-instagram',
                              link: 'https://www.instagram.com/pietro.giordano.87/'
                        }, {
                              name: 'linkedin',
                              icon: 'fa-brands fa-linkedin',
                              link: 'https://www.linkedin.com/in/pietro-giordano87/'
                        }, {
                              name: 'discord',
                              icon: 'fa-brands fa-discord',
                              link: '#'
                        }, {
                              name: 'github',
                              icon: 'fa-brands fa-github',
                              link: 'https://github.com/pietro-giordano'
                        },
                  ],
            }
      },
      methods: {

            // funzione cambia testo
            // changeText() {
            //       setTimeout(() => {
            //             this.$refs.textmation.textContent = 'Jr Full Stack Web Developer';
            //       }, 0);
            //       setTimeout(() => {
            //             this.$refs.textmation.textContent = 'Jr Front End Web Developer';
            //       }, 6150);
            //       setTimeout(() => {
            //             this.$refs.textmation.textContent = 'Jr Back End Web Developer';
            //       }, 12300);
            // },
            // resetText() {
            //       setInterval(this.changeText(), 18450);
            // }
      },
      mounted() {

            // this.changeText();
      },
      created() {

            // setInterval(this.changeText(), 18450);
      }
}
</script>

<template>
      <header class="h-screen">
            <Navbar />

            <div id="jumbotron" class="h-screen container mx-auto grid grid-cols lg:grid-cols-2">
                  <div class="mt-40 px-1 border-2 border-white">
                        <div class="font-bold text-first text-orange-very">
                              Hi, It's me
                              <div class="text-orange-light name">Pietro Giordano</div>
                              And I'm a
                              <h1 class="text-orange">
                                    <VueWriter
                                          :array="['Jr Full Stack Developer', 'Jr Front End Developer', 'Jr Back End Developer']"
                                          :typeSpeed="150" :eraseSpeed="100" :caret="cursor" />
                              </h1>
                        </div>

                        <p class="py-5 text-orange-very text-sm md:text-base">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, reprehenderit consequatur?
                              Itaque vel quisquam nulla assumenda? Tenetur aut fugiat soluta?
                        </p>

                        <ul class="md:flex mt-2 hidden">
                              <li v-for="item in social" class=" ">
                                    <a :href="item.link"
                                          class="flex justify-center items-center w-12 h-12 border-2 border-orange-light rounded-full me-3 md:me-5 text-orange-light hover:text-bblack hover:border-orange-light hover:bg-orange-light hover:shadow-o transition-shadow duration-75">
                                          <font-awesome-icon :icon="`${item.icon}`" size="xl" />
                                    </a>
                              </li>
                        </ul>

                        <ul class="flex mt-2 md:hidden">
                              <li v-for="item in social" class=" ">
                                    <a :href="item.link"
                                          class="flex justify-center items-center w-10 h-10 border-2 border-orange-light rounded-full me-3 md:me-5 text-orange-light hover:text-bblack hover:border-orange-light hover:bg-orange-light hover:shadow-o transition-shadow duration-75">
                                          <font-awesome-icon :icon="`${item.icon}`" size="lg" />
                                    </a>
                              </li>
                        </ul>

                        <button
                              class="mt-8 px-3 py-2 md:px-6 md:py-3 font-bold md:text-lg rounded-3xl text-bblack bg-orange-light shadow-o hover:shadow-none tracking-wider transition-shadow duration-500">
                              Download CV
                        </button>
                  </div>

                  <div class="border-2 border-orange">

                  </div>
            </div>
      </header>
</template>

<style>
.text-first {
      font-size: clamp(1.3rem, 6vw, 2rem);
}

.name {
      font-size: clamp(2.2rem, 9vw, 3.5rem);
}

h1 {
      font-size: clamp(1.35rem, 6vw, 2.2rem);
}

.is-typed span.cursor {
      display: inline-block;
      width: 4px;
      background-color: #ff6000;
      animation: blink 1s infinite;
}
</style>