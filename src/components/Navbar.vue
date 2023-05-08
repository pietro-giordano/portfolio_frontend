<script>
export default {
      name: 'Navbar',
      data() {
            return {
                  navLinks: [
                        {
                              title: 'Home',
                              link: '#header',
                              active: true
                        }, {
                              title: 'About',
                              link: '#',
                              active: false
                        }, {
                              title: 'Skills',
                              link: '#',
                              active: false
                        }, {
                              title: 'Portfolio',
                              link: '#',
                              active: false
                        }, {
                              title: 'Contact',
                              link: '#',
                              active: false
                        },
                  ],
                  hamburger: true,
            }
      },
      methods: {

            activeNav(index) {
                  this.navLinks.forEach(element => {
                        element.active = false;
                  });
                  this.navLinks[index].active = true;
            },

            hamburgerVisibility() {
                  this.hamburger = !this.hamburger;
            }
      }
}
</script>

<template>
      <nav
            class="bg-bblack container mx-auto fixed start-0 top-0 end-0 z-20 flex justify-between items-start lg:items-center border-white border-2">
            <div>
                  <h2 class="text-orange text-xl lg:text-2xl uppercase px-1 my-5">Portfolio</h2>

                  <!-- hamburger menu -->
                  <ul :class="hamburger ? 'hidden' : 'block'">
                        <li v-for="link, index in navLinks" @click="activeNav(index)" class="my-3 mr-2">
                              <a :href="link.link" class="p-1 hover:text-orange lg:text-lg"
                                    :class="link.active ? 'text-orange' : 'text-orange-very'">
                                    {{ link.title }}
                              </a>
                        </li>
                  </ul>
            </div>

            <!-- hamburger button -->
            <div class="text-end">
                  <font-awesome-icon :icon="['fas', 'bars']" size="2xl" class="text-orange p-2 m-2 lg:hidden"
                        :class="{ 'hidden': !hamburger }" @click="hamburgerVisibility" />

                  <font-awesome-icon :icon="['fas', 'xmark']" size="2xl" class="text-orange px-2 pt-2 mx-2 mt-2"
                        :class="{ 'hidden': hamburger }" @click="hamburgerVisibility" />
            </div>

            <ul class="hidden lg:flex">
                  <li v-for="link, index in navLinks" class="ml-4" @click="activeNav(index)">
                        <a :href="link.link" class="p-3 hover:text-orange text-lg"
                              :class="link.active ? 'text-orange' : 'text-orange-very'">
                              {{ link.title }}
                        </a>
                  </li>
            </ul>
      </nav>
</template>

<style scoped></style>