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
      <nav class="container mx-auto h-24 flex justify-center items-center border-white border-2">
            <ul class="flex ">
                  <li v-for="link, index in navLinks" class="m-5" @click="activeNav(index)">
                        <a :href="link.link" class="p-3 hover:text-orange text-lg"
                              :class="link.active ? 'text-orange' : 'text-orange-very'">
                              {{ link.title }}
                        </a>
                  </li>
            </ul>
      </nav>
</template>

<style></style>