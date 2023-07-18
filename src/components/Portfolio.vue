<script>
import axios from 'axios';

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
      }
}
</script>

<template>
      <section id="portfolio" class="container mx-auto pt-14 md:pt-20 lg:pt-28">

            <h2 ref="top" class="sm text-orange-very text-lg pb-4 text-center">Latest <span class="text-orange">Project</span>
            </h2>

            <div v-for="project in projects">
                  <div class="grid grid-cols-3 border-2 border-orange shadow-o3 rounded-xl h-80 my-10 p-2">
                        <div class="border-2 border-orange-very text-orange-very p-2">
                              <h4 class="font-bold uppercase text-2sxl text-center">
                                    {{ project.name }}
                              </h4>

                              <ul>
                                    <li v-for="skill in project.skills">
                                          {{ skill.name }}
                                    </li>
                              </ul>
                        </div>

                        <div class="border-2 border-orange-very text-orange-very p-2 flex items-center">
                              {{ project.description }}
                        </div>

                        <div class="border-2 border-orange-very flex items-center">
                              <video :src="project.video" controls></video>
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