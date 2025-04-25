<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 px-4 dark:bg-gray-800">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
      <h2 class="text-center text-2xl font-semibold text-gray-800 mb-6">Login</h2>

      <div class="mb-4">
        <label for="username" class="block text-sm text-gray-600 mb-2">Username</label>
        <input
          id="username"
          v-model="username"
          type="text"
          placeholder="Enter username"
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div class="mb-6">
        <label for="password" class="block text-sm text-gray-600 mb-2">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Enter password"
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <button
        @click="login"
        class="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
      >
        Login
      </button>

      <p v-if="error" class="text-red-500 text-center mt-4 text-sm">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { navigateTo } from 'nuxt/app' // Import Nuxt's navigateTo function

const username = ref('')
const password = ref('')
const error = ref('')

const login = () => {
  if (username.value === 'admin' && password.value === '1234') {
    // Success! Redirect to /jobs
    navigateTo('/jobs')
    error.value = '' // Clear any previous error message
  } else {
    // Failed login attempt
    error.value = 'Invalid username or password'
  }
}
</script>
