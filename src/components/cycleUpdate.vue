<template>
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
export default {
  name: 'CycleUpdate',
  data() {
    return {
      counter: 0,
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
