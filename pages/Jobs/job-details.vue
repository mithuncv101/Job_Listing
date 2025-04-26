<template>
    <div class="p-8 mx-auto max-w-3xl">
      <div class="border rounded-lg p-6 shadow bg-white">
        <h2 class="text-3xl font-bold text-gray-800">{{ job.title }}</h2>
        <p class="text-gray-600 mt-2">{{ job.company }}</p>
        <p class="text-gray-700 mt-4">{{ job.description }}</p>
        <p class="text-gray-700 mt-2 font-semibold">Salary: {{ job.salary }}</p>
        <span class="inline-block mt-2 px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
          {{ job.category }}
        </span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from "vue-router";
  import { ref, onMounted } from "vue";
  const job = ref(null);
  const route = useRoute();
  onMounted(() => {
    const jobId = parseInt(route.params.id);
    job.value = jobs.find(j => j.id === jobId);
  });
  </script>
  