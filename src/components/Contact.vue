<script>
import scrollreveal from 'scrollreveal';

export default {
      name: 'Contact',
      mounted() {
            scrollreveal({
                  reset: true,
                  distance: '80px',
                  duration: 2000,
                  delay: 200
            })
            scrollreveal().reveal(this.$refs.bottom, { origin: 'bottom' });
            scrollreveal().reveal(this.$refs.top, { origin: 'top' });
            scrollreveal().reveal(this.$refs.left1, { origin: 'left' });
            scrollreveal().reveal(this.$refs.left2, { origin: 'left' });
            scrollreveal().reveal(this.$refs.right, { origin: 'right' });
      }
}
</script>

<template>
      <section id="contact" class="container mx-auto">

            <div class="border-2 border-white">
                  <h2 ref="top" class="sm text-orange-very text-lg mt-28 mb-8 text-center">Contact <span
                              class="text-orange">Me!</span>
                  </h2>

                  <form action="#" method="post" class="w-full flex flex-col items-center">
                        <div ref="left1" class="sm w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-center">
                              <input type="text" name="fullname" id="fullname" placeholder="Full Name"
                                    class="w-11/12 md:w-1/2 m-1 px-4 py-2 bg-grey border-2 border-orange-light rounded-lg text-orange-very placeholder:text-orange-very placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:border-orange-very">

                              <input type="email" name="email" id="email" placeholder="Email Address"
                                    class="w-11/12 md:w-1/2 m-1 px-4 py-2 bg-grey border-2 border-orange-light rounded-lg text-orange-very placeholder:text-orange-very placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:border-orange-very">
                        </div>

                        <div ref="left2" class="sm w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-center">
                              <input type="tel" name="phone" id="phone" placeholder="Mobile Number"
                                    class="w-11/12 md:w-1/2 m-1 px-4 py-2 bg-grey border-2 border-orange-light rounded-lg text-orange-very placeholder:text-orange-very placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:border-orange-very">

                              <input type="text" name="email_subject" id="email_subject" placeholder="Email Subject"
                                    class="w-11/12 md:w-1/2 m-1 px-4 py-2 bg-grey border-2 border-orange-light rounded-lg text-orange-very placeholder:text-orange-very placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:border-orange-very">
                        </div>

                        <div ref="right" class="sm w-full flex justify-center md:w-3/4 lg:w-2/3">
                              <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"
                                    class="w-11/12 md:w-full m-1 px-4 py-2 bg-grey border-2 border-orange-light rounded-lg text-orange-very placeholder:text-orange-very placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:border-orange-very"></textarea>
                        </div>

                        <input ref="bottom" type="submit" value="Send Message"
                              class="sm block mt-3 mb-8 md:mt-6 px-3 py-2 md:px-6 md:py-3 font-bold md:text-lg rounded-3xl text-bblack bg-orange-light shadow-o hover:shadow-none tracking-wider transition-shadow duration-500">
                  </form>
            </div>

      </section>
</template>

<style scoped>
h2 {
      font-size: clamp(2rem, 9vw, 3.5rem);
}
</style>