<template>
  <button
    class="bg-orange-400 p-2 rounded-lg hover:opacity-[0.9] flex justify-center items-center mx-auto"
    v-on:click="show = !show"
  >
    Toggle
  </button>
  <Unmount v-if="show" />
  <h4 class="text-center text-3xl mb-2">Hello Lifecycle Update</h4>
  <h1 class="text-center text-3xl font-bold mb-2" ref="count">{{ counter }}</h1>
  <button
    class="bg-green-400 text-white p-3 rounded-lg flex justify-center items-center mx-auto"
    v-on:click="counter = counter + 1"
  >
    Update Counter
  </button>
</template>
<script>
import Unmount from './unmount.vue'

export default {
  name: 'CycleUpdate',
  components: {
    Unmount,
  },
  data() {
    return {
      counter: 0,
      show: true,
    }
  },
  beforeUpdate() {
    console.log('Beforee Updatee', this.$refs['count'].textContent)
  },
  updated() {
    console.log('updateee', this.$refs['count'].textContent)
  },
}
</script>
