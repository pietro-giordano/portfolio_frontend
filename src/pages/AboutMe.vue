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
      <section id="about" class="container mx-auto pt-14 md:pt-20 lg:pt-28">

            <h2 ref="right" class="sr text-orange-very text-lg mb-8 text-center">About <span class="text-orange">Me</span>
            </h2>

            <div class="grid grid-cols lg:grid-cols-2">
                  <div ref="left" class="sr border-2 border-white flex justify-center items-center">
                        <div class="w-[280px] h-[280px] md:w-[400px] md:h-[400px] mt-16 rounded-full">
                              <img src="../assets/foto1.jpg" alt="" class="rounded-full">
                        </div>
                  </div>

                  <div ref="bottom" class="sr border-2 border-orange px-12 pt-8 md:pt-14 lg:pt-20 text-center">
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

/* per scrollreveal */
.sr {
      visibility: hidden;
}
</style>