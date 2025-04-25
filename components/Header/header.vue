<template>
    <header class="flex items-center justify-between p-4 bg-white shadow-md dark:bg-gray-800">
      <!-- Left side: Company Name with Icon -->
      <div class="flex items-center">
        <div class="w-10 h-10 bg-blue-500 text-white flex justify-center items-center rounded-full mr-2">
          <i class="fas fa-briefcase text-xl"></i> <!-- Use any icon here -->
        </div>
        <span class="text-2xl font-bold text-gray-800 dark:text-white">Company Name</span>
      </div>
    
      <!-- Right side: Theme Toggle and Logout -->
      <div class="flex items-center gap-4">
        <!-- Theme Toggle Button -->
        <button
          @click="toggleTheme"
          class="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition"
        >
          Toggle Theme
        </button>
    
        <!-- Logout Button -->
        <button
          @click="logout"
          class="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 focus:outline-none transition"
        >
          Logout
        </button>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  
  // Props to emit theme change to the parent component (App.vue)
  const emit = defineEmits(['toggleTheme'])
  
  const router = useRouter()
  
  // Toggle theme event to parent (App.vue)
  const toggleTheme = () => {
    emit('toggleTheme')
  }
  
  // Logout and navigate to login page
  const logout = () => {
    // Implement your logout logic here
    router.push('/login')
  }
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  