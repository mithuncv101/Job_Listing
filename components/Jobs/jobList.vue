<template>
  <div class="p-8 mx-auto min-h-screen bg-white dark:bg-gray-900">
    <h1 class="text-3xl font-bold mb-6 text-center dark:text-white">
      Available Jobs
    </h1>

    <div class="flex justify-center mb-6 gap-4 flex-wrap">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="changeCategory(cat)"
        :class="[
          'px-4 py-2 rounded-full text-sm font-medium shadow-job-card hover:shadow-job-card-hover transition-all cursor-pointer dark:hover:bg-opacity-80 dark:hover:border-gray-500',
          selectedCategory === cat
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white',
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <div
      v-if="jobsStore.loading"
      class="text-center text-gray-500 dark:text-gray-300"
    >
      Loading jobs...
    </div>

    <div v-else-if="jobsStore.error" class="text-center text-red-500">
      {{ jobsStore.error }}
    </div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <JobCard v-for="job in visibleJobs" :key="job.id" :job="job" />
    </div>

    <div
      v-if="visibleJobs.length < filteredJobs.length"
      class="mt-8 text-center"
    >
      <button
        @click="loadMore"
        class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Load More
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useJobsStore } from "../store/jobs.ts";
import JobCard from "./jobCard.vue";

const jobsStore = useJobsStore();
const categories = ["All", "Frontend", "Backend", "Full Stack"];
const selectedCategory = ref("All");
const visibleCount = ref(8);

const filteredJobs = computed(() => {
  return jobsStore.getJobsByCategory(selectedCategory.value);
});

const visibleJobs = computed(() => {
  return filteredJobs.value.slice(0, visibleCount.value);
});

const loadMore = () => {
  visibleCount.value += 4;
};

const changeCategory = (cat) => {
  selectedCategory.value = cat;
  visibleCount.value = 8;
};

onMounted(() => {
  jobsStore.fetchJobs();
});
</script>
