<template>
    <div>
      <p>Redirecting to login...</p>
    </div>
  </template>
  
  <script setup>
  import { navigateTo } from 'nuxt/app'
  
  navigateTo('/login') // Automatically redirects to the /login page
  </script>
  