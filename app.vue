<template>
  <div :class="themeClass" class="dark:bg-gray-800">
    <Header @toggleTheme="changeTheme" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from '~/components/Header/header.vue'

const themeClass = ref('light')  // Default to light mode

// Change theme based on toggle
const changeTheme = () => {
  themeClass.value = themeClass.value === 'light' ? 'dark' : 'light'
  applyTheme()
}

// Apply theme to the body or root element
const applyTheme = () => {
  if (themeClass.value === 'dark') {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

// Check and apply the theme from localStorage when the app loads
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    themeClass.value = savedTheme
    applyTheme()
  }
})
</script>

<style scoped>
/* You can style your app's background color or other properties here */
</style>
