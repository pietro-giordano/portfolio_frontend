<script>
import axios from 'axios';
import scrollreveal from 'scrollreveal';

export default {
      name: 'Skills',
      data() {
            return {
                  skills: []
            }
      },
      mounted() {
            axios
                  .get('http://127.0.0.1:8000/api/skills')
                  .then(response => {
                        console.log(response.data);
                        this.skills = response.data.skills;
                  })

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
      <section id="skills" class="container mx-auto pt-14 md:pt-20 lg:pt-28">

            <h2 ref="left" class="sm text-orange-very text-lg mb-12 text-center">My <span class="text-orange">Skills</span>
            </h2>

            <div ref="right"
                  class="px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-fr gap-8 md:gap-8 lg:gap-10">
                  <div v-for="skill in skills"
                        class="border-4 border-orange-light bg-orange-very rounded-3xl p-2 md:p-6 lg:p-8 flex flex-col items-center justify-center h-full w-full shadow-o2">
                        <img :src="skill.logo" :alt="skill.name" class="d-block max-h-12 md:max-h-16 lg:max-h-20">
                        <a :href="skill.documentation" class="text-orange text-center mt-4">{{ skill.name }}</a>
                  </div>
            </div>

      </section>
</template>

<style scoped>
h2 {
      font-size: clamp(2rem, 9vw, 3.5rem);
}
</style>