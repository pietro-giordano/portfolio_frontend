<script>
import Navbar from './Navbar.vue';

export default {
      name: 'AppHeader',
      components: {
            Navbar,
      }
}
</script>

<template>
      <header class="bg-bblack h-screen border-2 border-orange">
            <Navbar />

            <div id="jumbotron" class="container mx-auto grid grid-cols-2">
                  <div class="text-orange-very font-bold text-4xl leading-relaxed border-2 border-white">
                        Hi, It's me
                        <h1 class="text-6xl text-orange-light">Pietro Giordano</h1>
                        And I'm a
                        <h2 class="text-orange">Jr. Full Stack Web Developer</h2>
                  </div>

                  <div class="border-2 border-orange">

                  </div>
            </div>
      </header>
</template>

<style></style>