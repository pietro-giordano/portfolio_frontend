<script>
import Navbar from './Navbar.vue';

export default {
      name: 'AppHeader',
      components: {
            Navbar,
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
                              link: 'https://github.com/prtruz87'
                        },
                  ],
            }
      },
}
</script>

<template>
      <header class="bg-bblack h-screen">
            <Navbar />

            <div id="jumbotron" class="h-screen container mx-auto grid grid-cols-2">
                  <div class="mt-40 border-2 border-white">
                        <div class="font-bold text-4xl leading-relaxed text-orange-very">
                              Hi, It's me
                              <h1 class="text-6xl text-orange-light">Pietro Giordano</h1>
                              And I'm a
                              <h2 class="text-orange">Jr. Full Stack Web Developer</h2>
                        </div>

                        <p class="py-5 text-orange-very">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, reprehenderit consequatur?
                              Itaque vel quisquam nulla assumenda? Tenetur aut fugiat soluta?
                        </p>

                        <ul class="flex mt-2">
                              <li v-for="item in social" class=" ">
                                    <a :href="item.link"
                                          class="flex justify-center items-center w-12 h-12 border-2 border-orange-light rounded-full me-5 text-orange-light hover:text-bblack hover:border-orange-light hover:bg-orange-light hover:shadow-o transition-shadow duration-75">
                                          <font-awesome-icon :icon="`${item.icon}`" size="xl" />
                                    </a>
                              </li>
                        </ul>

                        <button
                              class="mt-8 px-6 py-3 font-bold text-lg rounded-3xl text-bblack bg-orange-light shadow-o hover:shadow-none tracking-wider transition-shadow duration-500">
                              Download CV
                        </button>
                  </div>

                  <div class="border-2 border-orange">

                  </div>
            </div>
      </header>
</template>

<style></style>