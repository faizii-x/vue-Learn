<template>
  <h5 class="text-3xl text-center">Hello BeforeCreatedddd and Created!!!!</h5>
  <h4 class="text-3xl text-center">
    Hello Before Mount and mounted!!! <span class="font-bold text-red-500">{{ name }}</span>
  </h4>
</template>

<script>
export default {
  name: 'Lifecycles',
  data() {
    return {
      name: 'Faizan',
      // console.log(
      //   'jb elemnt ya comp create ho jae ga tb data show hoga. and jo b changing ya update krni hongi vo created me hi execute hongi',
      // )
    }
  },

  beforeCreate() {
    alert('hello BeforeCreatedddd! ')
  },
  created() {
    alert('Now created! component ya element create ho chuka hy.')
  },
  beforeMount() {
    console.log('beforeMount', this.$el)
  },
  mounted() {
    console.log('mountedd', this.$el)
  },
}
</script>
