<script>
import scrollreveal from 'scrollreveal';

export default {
      name: 'AboutMe',
      mounted() {
            scrollreveal({
                  reset: true,
                  distance: '80px',
                  duration: 2000,
                  delay: 200
            })
            scrollreveal().reveal(this.$refs.bottom, { origin: 'bottom' });
            scrollreveal().reveal(this.$refs.left, { origin: 'left' });
            scrollreveal().reveal(this.$refs.right, { origin: 'right' });
      }
}
</script>

<template>
      <section id="about" class="container mx-auto min-h-screen mt-28 md:mt-80 lg:mt-0">

            <h2 ref="right" class="sm text-orange-very text-lg pt-28 mb-8 text-center">About <span
                        class="text-orange">Me</span>
            </h2>

            <div class="grid grid-cols lg:grid-cols-2">
                  <div ref="left" class="border-2 border-white flex justify-center items-center">
                        <div class="w-[280px] h-[280px] md:w-[400px] md:h-[400px] mt-16 rounded-full">
                              <img src="../assets/foto1.jpg" alt="" class="rounded-full">
                        </div>
                  </div>

                  <div ref="bottom" class="border-2 border-orange px-12 pt-20 text-center">
                        <p class="text-orange-very">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                              blanditiis ullam inventore animi
                              assumenda doloribus, sit aspernatur ducimus praesentium repudiandae. Soluta provident voluptates
                              blanditiis eos consectetur sapiente, officia officiis perspiciatis.</p>
                  </div>
            </div>

      </section>
</template>

<style scoped>
h2 {
      font-size: clamp(2rem, 9vw, 3.5rem);
}
</style>