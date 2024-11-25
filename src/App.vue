<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <router-view />
    </main>

    <footer>
      <p class="text-green-500 text-center mt-8">&copy; 2024 CodeNdCoffee. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import './assets/main.css'

export default {
  name: 'App',
  components: {
    Navbar,
  },
}
</script>
