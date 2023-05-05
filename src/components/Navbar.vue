<script>
export default {
      name: 'Navbar',
      data() {
            return {
                  navLinks: [
                        {
                              title: 'Home',
                              link: '#',
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
            }
      },
      methods: {

            activeNav(index) {
                  this.navLinks.forEach(element => {
                        element.active = false;
                  });
                  this.navLinks[index].active = true;
            },
      }
}
</script>

<template>
      <nav
            class="container mx-auto fixed start-0 top-0 end-0 z-10 h-24 flex justify-between items-center border-white border-2">
            <h2 class="text-orange text-2xl uppercase px-1">Portfolio</h2>

            <!-- hamburger menu -->
            <font-awesome-icon :icon="['fas', 'bars']" size="2xl" class="text-orange lg:hidden p-4" />
            <font-awesome-icon :icon="['fas', 'xmark']" size="2xl" class="text-orange hidden p-4" />
            <ul class="flex flex-col text-end">
                  <li v-for="link, index in navLinks" class="ml-4" @click="activeNav(index)">
                        <a :href="link.link" class="p-3 mt-3 hover:text-orange text-lg"
                              :class="link.active ? 'text-orange' : 'text-orange-very'">
                              {{ link.title }}
                        </a>
                  </li>
            </ul>
            <!-- fine hamburger menu -->

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

<style></style>