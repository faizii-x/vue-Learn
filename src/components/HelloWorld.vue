<template>
  <div class="text-black p-4 rounded-lg text-center">
    <h2 v-if="show" class="text-xl font-bold mb-2">1st component</h2>
    <h1 class="text-xl font-bold mb-2" v-else>Hello, Vue.js with Tailwind CSS!</h1>
    <button class="bg-green-500 px-4 py-2 rounded" v-on:click="show = !show">Click Me</button>
  </div>
  <h3 class="text-2xl font-bold mb-2 text-center">Computed Properties</h3>
  <h4 class="text-center">Final value: {{ getResult }}</h4>
  <h4 class="text-center">Final value: {{ getResult }}</h4>
  <h4 class="text-center">Final value: {{ getResult }}</h4>

  <h3 class="text-2xl font-bold mb-2 text-center mt-5">Watchers</h3>
  <h4 class="text-center text-xl mb-3">{{ count }}</h4>
  <div class="flex justify-center items-center gap-3">
    <button class="bg-green-500 px-4 py-2 rounded" v-on:click="count = count + 1">+</button>
    <button class="bg-green-500 px-4 py-2 rounded" v-on:click="count = count - 1">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      dollars: 200,
      rupee: 30,
      discount: 5,
      count: 0,
    }
  },
  computed: {
    getResult() {
      return this.dollars * this.rupee - this.discount
      // calculation
    },
  },
  watch: {
    count(value, old) {
      // 5tk counter execute hoga and then 0 py reverse hojae  ga
      if (value > 5 && value > old) {
        this.count = 0
      }
    },
  },
}
</script>
