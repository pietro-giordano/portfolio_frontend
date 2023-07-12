<script>
import axios from 'axios';

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
      }
}
</script>

<template>
      <section id="skills" class="container mx-auto min-h-screen">

            <h2 ref="top" class="sm text-orange-very text-lg pt-28 mb-8 text-center">My <span
                        class="text-orange">Skills</span>
            </h2>

            <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 lg:gap-6 my-12">
                  <div v-for="skill in skills" class="border-4 border-orange-light bg-orange-very rounded-3xl p-6">
                        <img :src="skill.logo" :alt="skill.name">
                        <p class="text-orange text-center mt-4">{{ skill.name }}</p>
                  </div>
            </div>

      </section>
</template>

<style scoped>
h2 {
      font-size: clamp(2rem, 9vw, 3.5rem);
}
</style>