<template>
  <div class="text-black p-4 rounded-lg text-center">
    <h2 v-if="show" class="text-xl font-bold mb-2">1st component</h2>
    <h1 class="text-xl font-bold mb-2" v-else>Hello, Vue.js with Tailwind CSS!</h1>
    <button class="bg-green-500 px-4 py-2 rounded" v-on:click="show = !show">Click Me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    }
  },
}
</script>
