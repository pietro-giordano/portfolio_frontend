<script>
import axios from 'axios';
import scrollreveal from 'scrollreveal';

export default {
      name: 'Contact',
      data() {
            return {
                  message: {
                        name: "",
                        email: "",
                        mobile: "",
                        object: "",
                        message: ""
                  }
            }
      },
      mounted() {
            scrollreveal({
                  reset: false,
                  distance: '80px',
                  duration: 2000,
                  delay: 200
            })
            scrollreveal().reveal(this.$refs.bottom, { origin: 'bottom' });
            scrollreveal().reveal(this.$refs.top, { origin: 'top' });
            scrollreveal().reveal(this.$refs.left1, { origin: 'left' });
            scrollreveal().reveal(this.$refs.left2, { origin: 'left' });
            scrollreveal().reveal(this.$refs.left3, { origin: 'left' });
      },
      methods: {
            // alert di sweetAlert2
            sweetAlert(text, state) {
                  return this.$swal({
                        html: text,
                        icon: state,
                        confirmButtonText: 'Close',
                        background: '#ffe6c7',
                        confirmButtonColor: '#ff6000'
                  });
            },

            messagePost() {
                  axios
                        .post('/public/api/messages', {
                              name: this.message.name,
                              email: this.message.email,
                              mobile: this.message.mobile,
                              email_object: this.message.object,
                              message: this.message.message
                        })
                        .then(response => {
                              console.log(response.data);
                              this.sweetAlert('Message sent, you will receive reply soon', 'success');
                        })
                        .catch(error => {
                              console.log(error);
                              this.sweetAlert(error.response.data.message, 'error');
                        });
            }
      }
}
</script>

<template>
      <section id="contact" class="container pt-24 pb-24 md:pt-24 md:pb-20 lg:pt-28">

            <div>
                  <h2 ref="top" class="sr text-orange-very text-lg mb-8 text-center">Contact <span
                              class="text-orange">Me!</span>
                  </h2>

                  <form @submit.prevent action="" method="post" class="w-full flex flex-col items-center">
                        <div ref="left1" class="sr w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-center">
                              <input v-model="message.name" type="text" name="fullname" id="fullname"
                                    placeholder="Full Name (required)" required
                                    class="w-11/12 md:w-1/2 m-1 px-4 py-2 bg-grey border-2 border-orange-light rounded-lg text-orange-very placeholder:text-orange-very placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:border-orange-very">

                              <input v-model="message.email" type="email" name="email" id="email"
                                    placeholder="Email Address (required)" required
                                    class="w-11/12 md:w-1/2 m-1 px-4 py-2 bg-grey border-2 border-orange-light rounded-lg text-orange-very placeholder:text-orange-very placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:border-orange-very">
                        </div>

                        <div ref="left2" class="sr w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-center">
                              <input v-model="message.mobile" type="tel" name="phone" id="phone" placeholder="Mobile Number"
                                    class="w-11/12 md:w-1/2 m-1 px-4 py-2 bg-grey border-2 border-orange-light rounded-lg text-orange-very placeholder:text-orange-very placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:border-orange-very">

                              <input v-model="message.object" type="text" name="email_subject" id="email_subject"
                                    placeholder="Email Subject"
                                    class="w-11/12 md:w-1/2 m-1 px-4 py-2 bg-grey border-2 border-orange-light rounded-lg text-orange-very placeholder:text-orange-very placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:border-orange-very">
                        </div>

                        <div ref="left3" class="sr w-full flex justify-center md:w-3/4 lg:w-2/3">
                              <textarea v-model="message.message" name="message" id="message" cols="30" rows="10"
                                    placeholder="Your Message (required)" required
                                    class="w-11/12 md:w-full m-1 px-4 py-2 bg-grey border-2 border-orange-light rounded-lg text-orange-very placeholder:text-orange-very placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:border-orange-very"></textarea>
                        </div>

                        <input ref="bottom" @click="messagePost()" type="submit" value="Send Message"
                              class="sr block mt-3 md:mt-6 px-3 py-2 md:px-6 md:py-3 font-bold md:text-lg rounded-3xl text-bblack bg-orange-light shadow-o hover:shadow-none tracking-wider transition-shadow duration-500">
                  </form>
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