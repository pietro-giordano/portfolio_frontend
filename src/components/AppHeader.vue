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
                              icon: '<font-awesome-icon icon="fa-brands fa-facebook" />',
                              link: '#'
                        }, {
                              name: 'instagram',
                              icon: '<font-awesome-icon icon="fa-brands fa-instagram" />',
                              link: '#'
                        }, {
                              name: 'linkedin',
                              icon: '<font-awesome-icon icon="fa-brands fa-linkedin" />',
                              link: '#'
                        }, {
                              name: 'discord',
                              icon: '<font-awesome-icon icon="fa-brands fa-discord" />',
                              link: '#'
                        }, {
                              name: 'github',
                              icon: '<font-awesome-icon icon="fa-brands fa-github" />',
                              link: '#'
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
                  <div class="mt-40 text-orange-very border-2 border-white">
                        <div class="font-bold text-4xl leading-relaxed">
                              Hi, It's me
                              <h1 class="text-6xl text-orange-light">Pietro Giordano</h1>
                              And I'm a
                              <h2 class="text-orange">Jr. Full Stack Web Developer</h2>
                        </div>

                        <p class="py-5">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, reprehenderit consequatur?
                              Itaque vel quisquam nulla assumenda? Tenetur aut fugiat soluta?
                        </p>

                        <div>
                              <ul>
                                    <li v-for="item in social">
                                          <a href="">
                                                <font-awesome-icon icon="`${{ item.icon }}`" />
                                          </a>
                                    </li>
                              </ul>
                        </div>
                  </div>

                  <div class="border-2 border-orange">

                  </div>
            </div>
      </header>
</template>

<style></style>