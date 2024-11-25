<template>
  <HelloWorld />
  <BasicComp />
</template>

<script>
import BasicComp from '@/components/basicComp.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'LandingPage',
  components: {
    HelloWorld,
    BasicComp,
  },
}
</script>
