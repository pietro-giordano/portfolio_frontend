<script>
import VueWriter from 'vue-writer';
import scrollreveal from 'scrollreveal';

export default {
      name: 'AppHeader',
      components: {
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
                              link: 'https://www.linkedin.com/in/pietro-giordano-wd/'
                        }, 
                        // {
                        //       name: 'discord',
                        //       icon: 'fa-brands fa-discord',
                        //       link: '#'
                        // }, 
                        {
                              name: 'github',
                              icon: 'fa-brands fa-github',
                              link: 'https://github.com/pietro-giordano'
                        },
                  ],
            }
      },
      mounted() {
            scrollreveal({
                  reset: true,
                  distance: '80px',
                  duration: 2000,
                  delay: 200
            })
            scrollreveal().reveal(this.$refs.bottom, { origin: 'bottom' });
            scrollreveal().reveal(this.$refs.top, { origin: 'top' });
            scrollreveal().reveal(this.$refs.left, { origin: 'left' });
            scrollreveal().reveal(this.$refs.right, { origin: 'right' });
      }
}
</script>

<template>
      <header id="header">

            <div id="jumbotron" class="container grid grid-cols lg:grid-cols-2">
                  <div ref="top" class="sr mt-24 lg:mt-28 px-3">
                        <div class="font-bold text-first text-orange-very">
                              Hi, It's me
                              <div ref="left" class="sr text-orange-light name">Pietro Giordano</div>
                              And I'm a
                              <h1 class="text-orange">
                                    <!-- componente vue-writer -->
                                    <VueWriter
                                          :array="['Jr Full Stack Developer', 'Jr Front End Developer', 'Jr Back End Developer']"
                                          :typeSpeed="150" :eraseSpeed="100" :caret="cursor" />
                              </h1>
                        </div>

                        <p class="py-3 text-orange-very text-sm md:text-base">
                              Benvenuto nel mio mondo! <br>
                              Sono un appassionato di sviluppo web, informatica e tecnologia. Trasformare le idee in realtà
                              digitali è ciò che rende questo mondo incredibilmente affascinante.
                              <!--
                              Welcome to my world! <br>
                              I am passionate about web development, computing and technology. 
                              Turning ideas into digital realities is what makes this world incredibly fascinating. 
                              -->
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

                        <a ref="right"
                              href="../assets/PIETRO GIORDANO - cv.pdf"
                              download
                              class="sr inline-block mt-8 px-3 py-2 md:px-6 md:py-3 font-bold md:text-lg rounded-3xl text-bblack bg-orange-light shadow-o hover:shadow-none tracking-wider transition-shadow duration-500">
                              Download CV
                        </a>
                  </div>

                  <div ref="bottom" class="sr flex justify-center items-center my-20 lg:mt-40">
                        <div
                              class="w-[280px] h-[280px] md:w-[400px] md:h-[400px] relative flex justify-center items-center animated-border overflow-hidden rounded-full">
                              <img src="../assets/foto1.jpg" alt="" class="w-11/12 h-11/12 z-10 absolute rounded-full">
                        </div>
                  </div>
            </div>
      </header>
</template>

<style scoped>
.text-first {
      font-size: clamp(1.3rem, 6vw, 2rem);
}

.name {
      font-size: clamp(2.2rem, 9vw, 3.5rem);
}

h1 {
      font-size: clamp(1.35rem, 6vw, 2.2rem);
}

/* stile cursore testo animato */
.is-typed span.cursor {
      display: inline-block;
      width: 4px;
      background-color: #ff6000;
      animation: blink 1s infinite;
}

/* animazione bordi foto */
.animated-border::after {
      content: '';
      position: absolute;
      width: 550px;
      height: 550px;
      background-image: conic-gradient(transparent, transparent, transparent, #ffa559);
      animation: animate 4s linear infinite;
      animation-delay: -2s;
}

.animated-border::before {
      content: '';
      position: absolute;
      width: 550px;
      height: 550px;
      background-image: conic-gradient(transparent, transparent, transparent, #ff6000);
      animation: animate 4s linear infinite;
}

@keyframes animate {
      0% {
            transform: rotate(0deg);
      }

      100% {
            transform: rotate(360deg);
      }
}

/* fine animazione bordi */

/* animazione float image */
.animated-border {
      animation: floatImage 4s ease-in-out infinite;
}

@keyframes floatImage {
      0% {
            transform: translateY(0);
      }

      50% {
            transform: translateY(-2.2rem);
      }

      100% {
            transform: translateY(0);
      }
}

/* fine animazione float image */

/* per scrollreveal */
.sr {
      visibility: hidden;
}
</style>