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
      }
}
</script>

<template>
      <nav class="container mx-auto h-24 flex justify-center items-center border-white border-2">
            <ul class="flex ">
                  <li v-for="link in navLinks" class="m-5">
                        <a :href="link.link" class="p-3 hover:text-orange text-lg"
                              :class="link.active ? 'text-orange' : 'text-orange-very'">
                              {{ link.title }}
                        </a>
                  </li>
            </ul>
      </nav>
</template>

<style></style>