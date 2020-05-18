<template>
  <footer class="footer relative py-10 bg-main-darker">
    <a href="#hero">
      <div class="absolute bg-main-pink w-12 h-12" style="left: calc(50% - 1rem); top: -1.5rem;">
        <img
          class="absolute"
          style="bottom: 5px;"
          src="~/assets/img/chevron_up.svg"
          alt="Chevron Up"
        />
        <img
          class="absolute"
          style="bottom: -5px;"
          src="~/assets/img/chevron_up.svg"
          alt="Chevron Up"
        />
      </div>
    </a>
    <div class="flex justify-center items-center pt-20">
      <a
        class="mx-3 bg-gray-800 hover:bg-main-blue focus:bg-main-blue transition-colors transition-500"
        href="https://www.linkedin.com/in/anestis-finstad-2b263631/"
        target="_blank"
        rel="noopener"
      >
        <div class="w-10 h-10 flex lg:h-12 lg:w-12">
          <img class="p-2" src="~/assets/img/linkedin.svg" alt="LinkedIn Logo" />
        </div>
      </a>
      <a
        class="mx-3 bg-gray-800 hover:bg-main-blue focus:bg-main-blue transition-colors transition-500"
        href="https://github.com/CloudMunk"
        target="_blank"
        rel="noopener"
      >
        <div class="w-10 h-10 flex lg:h-12 lg:w-12">
          <img class="p-2" src="~/assets/img/github.svg" alt="Github Logo" />
        </div>
      </a>
      <a
        class="mx-3 bg-gray-800 hover:bg-main-blue focus:bg-main-blue transition-colors transition-500"
        href="https://twitter.com/JSDevlife"
        target="_blank"
        rel="noopener"
      >
        <div class="w-10 h-10 flex lg:h-12 lg:w-12">
          <img class="p-2" src="~/assets/img/twitter.svg" alt="Twitter Logo" />
        </div>
      </a>
      <a
        class="mx-3 bg-gray-800 hover:bg-main-blue focus:bg-main-blue transition-colors transition-500"
        href="https://www.twitch.tv/cloudonemonk"
        target="_blank"
        rel="noopener"
      >
        <div class="w-10 h-10 flex lg:h-12 lg:w-12">
          <img class="p-2" src="~/assets/img/twitch-icon.svg" alt="Codepen Logo" />
        </div>
      </a>
    </div>
    <div class="text-center mt-5">
      <span class="uppercase text-white text-xs tracking-wider opacity-50">Anestis Finstad</span>
      <span class="text-main-pink text-sm">&copy; {{year}}</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
</style>