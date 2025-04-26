<template>
  <div class="flex flex-col min-h-screen p-8 bg-gray-100 dark:bg-gray-800">
    <h1 class="text-3xl font-bold mb-6 text-center dark:text-white">Available Jobs</h1>
    <div class="flex justify-center mb-6 gap-4 flex-wrap">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="changeCategory(cat)"
        :class="[
          'px-4 py-2 rounded-full text-sm font-medium shadow-job-card hover:shadow-job-card-hover transition-all cursor-pointer',
          selectedCategory === cat
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white',
        ]"
      >
        {{ cat }}
      </button>
    </div>
    <div v-if="jobsStore.loading" class="text-center text-gray-500 dark:text-gray-300">
      Loading jobs...
    </div>
    <div v-else-if="jobsStore.error" class="text-center text-red-500">
      {{ jobsStore.error }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <JobCard
        v-for="job in visibleJobs"
        :key="job.id"
        :job="job"
      />
    </div>
    <div class="mt-8 text-center" v-if="canLoadMore">
      <button
        @click="loadMore"
        class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition"
      >
        Load More
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useJobsStore } from '../store/jobs'
import JobCard from './jobCard.vue'

const jobsStore = useJobsStore()
const categories = ['All', 'Frontend', 'Backend', 'Full Stack']
const selectedCategory = ref('All')

const jobsPerPage = 8
const currentPage = ref(1)

const filteredJobs = computed(() =>
  jobsStore.getJobsByCategory(selectedCategory.value)
)

const visibleJobs = computed(() =>
  filteredJobs.value.slice(0, currentPage.value * jobsPerPage)
)

const canLoadMore = computed(() =>
  visibleJobs.value.length < filteredJobs.value.length
)

const loadMore = () => {
  currentPage.value++
}

const changeCategory = (cat) => {
  selectedCategory.value = cat
  currentPage.value = 1 
}

onMounted(() => {
  jobsStore.fetchJobs()
})
</script>
