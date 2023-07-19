<script>
import axios from 'axios';
import scrollreveal from 'scrollreveal';

export default {
      name: 'Portfolio',
      data() {
            return {
                  projects: []
            }
      },
      mounted() {
            axios
                  .get('http://127.0.0.1:8000/api/projects')
                  .then(response => {
                        console.log(response.data);
                        this.projects = response.data.projects;
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
      <section id="portfolio" class="container mx-auto pt-14 md:pt-20 lg:pt-28">

            <h2 ref="right" class="sm text-orange-very text-lg pb-4 text-center">Latest <span
                        class="text-orange">Project</span>
            </h2>

            <div ref="left" class="px-6">
                  <div v-for="project in projects"
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 border-orange shadow-o3 rounded-xl min-h-80 my-10 p-2">
                        <div class="border-2 border-orange-very text-orange-very p-2">
                              <h4 class="font-bold uppercase text-2xl text-center">
                                    {{ project.name }}
                              </h4>

                              <ul class="my-2">
                                    <li v-for="skill in project.skills"
                                          class="text-sm text-bblack inline-block bg-orange-light mb-1 me-2 p-1 rounded-xl">
                                          {{ skill.name }}
                                    </li>
                              </ul>

                              <ul>
                                    Github repository:
                                    <li v-for="link in project.github" class="underline">
                                          <a :href="link">{{ link }}</a>
                                    </li>
                              </ul>
                        </div>

                        <div class="border-2 border-orange-very flex items-center">
                              <video :src="project.video" controls></video>
                        </div>

                        <div
                              class="border-2 border-orange-very md:col-span-2 lg:col-span-1 text-orange-very p-2 flex items-center">
                              {{ project.description }}
                        </div>
                  </div>
            </div>

      </section>
</template>

<style scoped>
h2 {
      font-size: clamp(2rem, 9vw, 3.5rem);
}
</style>