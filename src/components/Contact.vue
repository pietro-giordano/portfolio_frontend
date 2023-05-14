<script>
export default {
      name: 'Contact',
}
</script>

<template>
      <section id="contact" class="container mx-auto">

            <div class="border-2 border-white min-h-screen text-center">
                  <h2 class="text-orange-very text-lg mt-28 mb-8">Contact <span class="text-orange">Me!</span></h2>

                  <form action="#" method="post">
                        <div class="">
                              <input type="text" name="fullname" id="fullname" placeholder="Full Name"
                                    class="m-1 px-4 py-2 bg-grey border-2 border-orange-light rounded-lg placeholder:text-orange-very">

                              <input type="email" name="email" id="email" placeholder="Email Address"
                                    class="m-1 px-4 py-2 bg-grey border-2 border-orange-light rounded-lg placeholder:text-orange-very">
                        </div>

                        <div class="">
                              <input type="tel" name="phone" id="phone" placeholder="Mobile Number"
                                    class="m-1 px-4 py-2 bg-grey border-2 border-orange-light rounded-lg placeholder:text-orange-very">

                              <input type="text" name="email_subject" id="email_subject" placeholder="Email Subject"
                                    class="m-1 px-4 py-2 bg-grey border-2 border-orange-light rounded-lg placeholder:text-orange-very">
                        </div>

                        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"
                              class="m-1 px-4 py-2 bg-grey border-2 border-orange-light rounded-lg placeholder:text-orange-very"></textarea>

                        <input type="submit" value="Send Message"
                              class="block px-3 py-2 md:px-6 md:py-3 font-bold md:text-lg rounded-3xl text-bblack bg-orange-light shadow-o hover:shadow-none tracking-wider transition-shadow duration-500">
                  </form>
            </div>

      </section>
</template>

<style scoped>
h2 {
      font-size: clamp(2rem, 9vw, 3.5rem);
}
</style>