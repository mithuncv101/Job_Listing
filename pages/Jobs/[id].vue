<template>
    <div class="flex items-center justify-center min-h-screen p-6">
      <div v-if="job" class="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h1 class="text-4xl font-bold text-gray-800 mb-6 text-center">{{ job.title }}</h1>
  
        <div class="space-y-4">
          <div>
            <span class="block text-sm text-gray-500">Company</span>
            <p class="text-lg font-semibold text-gray-700">{{ job.company }}</p>
          </div>
  
          <div>
            <span class="block text-sm text-gray-500">Category</span>
            <p class="text-lg font-semibold text-gray-700">{{ job.category }}</p>
          </div>
  
          <div>
            <span class="block text-sm text-gray-500">Salary</span>
            <p class="text-lg font-semibold text-gray-700">{{ job.salary }}</p>
          </div>
  
          <div>
            <span class="block text-sm text-gray-500">Description</span>
            <p class="text-base text-gray-600 leading-relaxed">{{ job.description }}</p>
          </div>
        </div>
  
        <div class="mt-8 text-center">
          <NuxtLink
            to="/jobs"
            class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition"
          >
            ← Back to Jobs
          </NuxtLink>
        </div>
      </div>
  
      <div v-else class="text-center text-gray-500 mt-10">
        <p class="text-xl">Job not found.</p>
        <NuxtLink
          to="/jobs"
          class="inline-block mt-4 text-blue-600 hover:underline"
        >
          ← Go back to jobs
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  import { useRoute } from 'vue-router'
  import { useJobsStore } from '@/store/jobs'
  
  const route = useRoute()
  const jobsStore = useJobsStore()
  
  const jobId = parseInt(route.params.id)
  const job = jobsStore.getById(jobId)

  </script>
  