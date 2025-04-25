<template>
  <div class="p-8 mx-auto ">
    <!-- Main Content -->
    <h1 class="text-3xl font-bold mb-6 text-center dark:text-white">Available Jobs</h1>

    <!-- Category Filter -->
    <div class="flex justify-center mb-6 gap-4 flex-wrap ">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="selectedCategory = cat"
        :class="[
          'px-4 py-2 rounded-full text-sm font-medium transition shadow-job-card hover:shadow-job-card-hover transition-all cursor-pointer',
          selectedCategory === cat
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 shadow-job-card hover:shadow-job-card-hover transition-all cursor-pointer',
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Loading, Error, or Jobs Grid -->
    <div v-if="jobsStore.loading" class="text-center text-gray-500">
      Loading jobs...
    </div>
    <div v-else-if="jobsStore.error" class="text-center text-red-500">
      {{ jobsStore.error }}
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <JobCard v-for="job in filteredJobs" :key="job.id" :job="job" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useJobsStore } from "../store/jobs.ts";
import { navigateTo } from "nuxt/app";
import JobCard from "./jobCard.vue";

const jobsStore = useJobsStore();

const categories = ["All", "Frontend", "Backend", "Full Stack"];
const selectedCategory = ref("All");

const filteredJobs = computed(() => {
  return jobsStore.getJobsByCategory(selectedCategory.value);
});

onMounted(() => {
  jobsStore.fetchJobs();
  console.log("Mounted");
});
</script>
