<template>
  <h3 ref="user" class="text-center font-medium text-blue-600 mb-6">User Component</h3>
</template>
<script>
export default {
  name: 'Unmount',
  beforeUnmount() {
    console.log('beforeUnmount', this.$refs['user'])
  },
  unmounted() {
    console.log('unmounted', this.$refs['user'])
  },
}
</script>
