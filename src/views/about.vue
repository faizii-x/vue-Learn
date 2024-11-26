<template>
  <div>
    <h1 class="text-center mb-5">Welcome to the About Page</h1>
    <Lifecycles />
  </div>
</template>

<script>
import Lifecycles from '@/components/lifecycles.vue'

export default {
  name: 'AboutPage',
  components: {
    Lifecycles,
  },
}
</script>
