<template>
  <div
    @click="goToJobDetails"
    class="bg-job-card-gradient border rounded-xl p-6 shadow-job-card hover:shadow-job-card-hover transition-all cursor-pointer 
      dark:hover:bg-opacity-80 dark:hover:border-gray-500"
  >
    <h2 class="text-xl font-bold text-gray-800">{{ job.title }}</h2>
    <p class="text-gray-600 mt-1">{{ job.company }}</p>
    <span class="inline-block mt-2 px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
      {{ job.category }}
    </span>
    <p class="text-gray-700 mt-2 font-semibold">Salary: {{ job.salary }}</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
})

const router = useRouter()

const goToJobDetails = () => {
  router.push(`/jobs/${props.job.id}`)
}
</script>
