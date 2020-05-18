<template>
  <section class="contact bg-main-dark" id="contact">
    <div class="py-20">
      <h1 class="relative text-center text-white text-3xl font-semibold">CONTACT</h1>
      <p class="text-main-blue text-center text-sm mt-5">Have a question or want to work together?</p>
      <form class="mt-5" @submit.prevent="sendEmail">
        <div class="max-w-lg mx-auto px-5">
          <label class="text-white opacity-75 block my-1 cursor-pointer" for="name">Name:</label>
          <input
            class="block w-full px-2 py-1 text-white bg-main-darkest text-sm"
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            v-model="name"
          />
          <label class="text-white opacity-75 block my-1 cursor-pointer" for="email">Email:</label>
          <input
            class="block w-full my-1 px-2 py-1 text-white bg-main-darkest text-sm"
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            v-model="email"
          />
          <label class="text-white opacity-75 block my-1 cursor-pointer" for="message">Message:</label>
          <textarea
            class="w-full px-2 py-1 text-white bg-main-darkest text-sm"
            name="message"
            placeholder="Your message"
            id="message"
            v-model="message"
          ></textarea>
          <div class="flex items-center justify-between">
            <a
              class="text-sm text-white font-semibold hover:text-main-blue focus:text-main-blue transition-colors transition-500"
              href="mailto:anestisg.f@gmail.com"
            >anestisg.f@gmail.com</a>
            <button
              class="text-white text-xs mt-2 px-2 py-1 uppercase font-semibold border-white border-2 hover:border-main-blue hover:bg-main-blue focus:border-main-blue focus:bg-main-blue transition-colors transition-500"
              type="submit"
            >Submit</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail() {
      if (this.name.trim() && this.email.trim() && this.message.trim()) {
        this.$axios
          .post(
            'https://bokismoki.herokuapp.com/email',
            {
              name: this.name.trim(),
              email: this.email.trim(),
              message: this.message.trim()
            },
            {
              headers: {
                'content-type': 'application/json'
              }
            }
          )
          .then(response => {
            if (response.data.success) {
              this.$emit('emailResponse', {
                success: true,
                msg: 'Email successfully sent!'
              })
              this.name = ''
              this.email = ''
              this.message = ''
            } else {
              this.$emit('emailResponse', {
                success: false,
                msg:
                  'Something went wrong, please use the email from under the form.'
              })
            }
          })
          .catch(err => {
            this.$emit('emailResponse', {
              success: false,
              msg:
                'Something went wrong, please use the email from under the form.'
            })
          })
      }
    }
  }
}
</script>

<style scoped>
@media (min-width: 640px) {
  .contact {
    clip-path: polygon(50% 7%, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 0);
  }
}
.contact > div > h1::after {
  @apply absolute;
  @apply bg-white;
  @apply bottom-0;
  @apply w-24;
  @apply h-1;
  content: '';
  left: calc(50% - 45px);
}
textarea {
  min-height: 150px !important;
  max-height: 200px !important;
}
</style>