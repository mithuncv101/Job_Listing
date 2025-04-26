<template>
  <header class="flex items-center justify-between p-4 rounded-lg shadow-job-card hover:shadow-job-card-hover bg-gradient-to-r from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-all flex-wrap sm:flex-nowrap">
    <div class="flex items-center mb-4 sm:mb-0">
      <div class="w-10 h-10 bg-blue-500 text-white flex justify-center items-center rounded-full mr-2">
        <i class="fas fa-briefcase text-xl"></i>
      </div>
      <span class="text-2xl font-bold text-gray-800 dark:text-white">Job Listing</span>
    </div>

    <div class="flex items-center gap-4 sm:gap-6">
      <button
        @click="toggleTheme"
        class="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition"
      >
        Toggle Theme
      </button>

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

const emit = defineEmits(['toggleTheme'])
const router = useRouter()

const toggleTheme = () => {
  emit('toggleTheme')
}

const logout = () => {
  router.push('/login')
}
</script>