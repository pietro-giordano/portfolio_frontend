<script>
import scrollreveal from 'scrollreveal';

export default {
      name: 'AboutMe',
      mounted() {
            scrollreveal({
                  reset: false,
                  distance: '80px',
                  duration: 2000,
                  delay: 200
            })
            scrollreveal().reveal(this.$refs.top, { origin: 'top' });
            scrollreveal().reveal(this.$refs.bottom, { origin: 'bottom' });
            scrollreveal().reveal(this.$refs.left, { origin: 'left' });
            scrollreveal().reveal(this.$refs.right, { origin: 'right' });
      },
      computed: {
            // calcola età dinamicamente arrotondando in difetto (data di oggi in ms - data di nascita in ms) / (ms in un anno)
            getAge() {
                  return Math.floor((new Date() - new Date(1987, 9, 9)) / (365 * 24 * 60 * 60 * 1000));
            }
      }
}
</script>

<template>
      <section id="about" class="container mx-auto pt-24 pb-24 md:pt-24 lg:pt-28 lg:pb-20">

            <h2 ref="top" class="sr text-orange-very text-lg mb-8 text-center">About <span class="text-orange">Me</span>
            </h2>

            <div class="grid grid-cols lg:grid-cols-2">
                  <div ref="left" class="sr flex justify-center items-center">
                        <div class="w-[280px] h-[280px] md:w-[400px] md:h-[400px] mt-10 rounded-full">
                              <img src="../assets/foto1.jpg" alt="" class="rounded-full">
                        </div>
                  </div>

                  <div ref="bottom" class="sr px-12 pt-8 md:pt-14 lg:pt-20 text-center">
                        <p class="text-orange-very">
                              Mi chiamo <span class="text-orange">Pietro Giordano</span>, ho {{ getAge }} anni e sono da
                              sempre
                              appassionato di informatica, tecnologia, web e dintorni.
                              Passione che ho capito potesse essere un lavoro solo nel 2022 quando ho conseguito il master di
                              Boolean Careers.
                              Da lì ho capito che lo sviluppo web (prediligo il backend ma non disdegno sporcarmi le mani
                              anche nel frontend) sarebbe stato parte della mia vita. <br>
                              Quando non sono immerso nel codice, mi piace passare il tempo all'aria aperta, a prendermi cura
                              del mio fisico facendo sport.
                              Ovviamente non poteva mancare la passione per i videogame, film, serie tv, per la lettura e per
                              il mondo del calcio.
                              Se vi va di parlare con me di una di queste cose (ma anche di altro) non esitate a contattarmi.
                        </p>
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