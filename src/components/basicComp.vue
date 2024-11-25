<template>
  <div class="p-6">
    <h3 class="text-center text-3xl font-bold text-gray-800 mb-6">User List of Mock API Call</h3>

    <table class="table-auto w-full border border-gray-300">
      <thead>
        <tr class="bg-gray-200 text-left">
          <th class="border border-gray-300 px-4 py-2">ID</th>
          <th class="border border-gray-300 px-4 py-2">Name</th>
          <th class="border border-gray-300 px-4 py-2">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="hover:bg-gray-100 text-gray-700">
          <td class="border border-gray-300 px-4 py-2">{{ user.id }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ user.name }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserList',
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
    getUser() {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          this.users = response.data
        })
        .catch((error) => {
          console.error('Error fetching users:', error)
        })
    },
  },
}
</script>
