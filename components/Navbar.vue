<template>
  <nav class="navbar bg-main-darker py-3 border-main-blue border-b-4 sticky top-0 z-50">
    <div class="w-5/6 mx-auto flex justify-end sm:justify-start">
      <ul class="mt-10 w-full sm:mt-0 sm:flex sm:items-center" :class="{'hidden': !isMenuOpen}">
        <li class="mb-3 sm:mb-0">
          <a
            class="text-white text-lg block p-2 text-main-pink sm:text-sm hover:text-main-pink focus:text-main-pink transition-color transition-500"
            href="#hero"
          >HOME</a>
        </li>
        <li class="mb-3 sm:mb-0">
          <a
            class="text-white text-lg block p-2 hover:text-main-pink focus:text-main-pink transition-color transition-500"
            href="#projects"
          >PORTFOLIO</a>
        </li>
        <li class="mb-3 sm:mb-0">
          <a
            class="text-white text-lg block p-2 hover:text-main-pink focus:text-main-pink transition-color transition-500"
            href="#about"
          >ABOUT</a>
        </li>
        <li class="mb-3 sm:mb-0">
          <a
            class="text-white text-lg block p-2 hover:text-main-pink focus:text-main-pink transition-color transition-500"
            href="#contact"
          >CONTACT</a>
        </li>
      </ul>
      <div
        class="hamburger_menu cursor-pointer inline-block sm:hidden"
        @click="isMenuOpen = !isMenuOpen"
      >
        <div class="line bg-white" :class="{'top_active': isMenuOpen}"></div>
        <div class="line bg-white" :class="{'opacity-0': isMenuOpen}"></div>
        <div class="line bg-white" :class="{'bottom_active': isMenuOpen}"></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false
    }
  }
}
</script>

<style scoped>
.hamburger_menu .line {
  @apply relative;
  @apply w-8;
  @apply my-1;
  @apply transition-all;
  @apply duration-500;
  height: 0.4rem;
}
.hamburger_menu .line:first-of-type {
  @apply top-0;
}
.hamburger_menu .line:last-of-type {
  @apply bottom-0;
}
.hamburger_menu .line.top_active {
  top: 11px;
  transform: rotate(45deg);
}
.hamburger_menu .line.bottom_active {
  bottom: 10px;
  transform: rotate(-45deg);
}
</style>