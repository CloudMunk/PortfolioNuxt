<template>
  <section
    class="hero w-full h-screen flex bg-black"
    id="hero"
    :style="{'background': `url(${heroBg}) center/cover no-repeat`}"
  >
    <div class="m-auto text-white text-center">
      <h1 class="text-2xl font-semibold sm:text-3xl lg:text-4xl xl:text-5xl">
        Welcome, I'm
        <span class="text-main-pink">Anestis Finstad</span>.
      </h1>
      <h1 class="text-lg font-semibold sm:text-xl lg:text-2xl xl:text-3xl">
        I'm
        <span class="text-main-pink">
          <span class="hidden sm:inline">
            <vue-typer
              :text="['A WEB DEVELOPER', 'A REACT & VUE ADMIRER', 'READY FOR A JOB']"
              :pre-erase-delay="3000"
              erase-style="backspace"
              :erase-delay="100"
            ></vue-typer>
          </span>
          <span class="sm:hidden">A WEB DEVELOPER</span>
        </span>.
      </h1>
      <a
        class="inline-block border-white border-2 mt-5 py-2 px-5 hover:text-main-blue focus:text-main-blue transition-colors transition-500 lg:py-3 lg:px-6 lg:text-lg relative"
        href="#projects"
      >
        View my work
        <span class="l absolute"></span>
        <span class="t absolute"></span>
        <span class="r absolute"></span>
        <span class="b absolute"></span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      heroBg: require('~/assets/img/hero_bg.jpg')
    }
  }
}
</script>

<style scoped>
</style>

<style>
.vue-typer .custom.char.typed {
  @apply text-main-pink;
}
.vue-typer .custom.char.selected {
  @apply text-main-pink;
  @apply bg-transparent;
}
.l,
.r {
  width: 2px;
  height: calc(100% + 4px);
  top: -2px;
}
.l {
  left: -2px;
}
.r {
  right: -2px;
}
.t,
.b {
  width: calc(100% + 4px);
  height: 2px;
  left: -2px;
}
.t {
  top: -2px;
}
.b {
  bottom: -2px;
}
.l::before,
.t::before,
.r::before,
.b::before {
  content: '';
  @apply bg-main-blue;
  @apply absolute;
  @apply transition-all;
  @apply duration-500;
}
.l::before,
.r::before {
  @apply w-full;
  @apply h-0;
  @apply left-0;
}
.l::before {
  @apply top-0;
}
.r::before {
  @apply bottom-0;
}
a:hover .l::before,
a:hover .r::before,
a:focus .l::before,
a:focus .r::before {
  @apply h-full;
}
.t::before,
.b::before {
  @apply h-full;
  @apply w-0;
  @apply top-0;
}
.t::before {
  @apply right-0;
}
.b::before {
  @apply left-0;
}
a:hover .t::before,
a:hover .b::before,
a:focus .t::before,
a:focus .b::before {
  @apply w-full;
}
</style>