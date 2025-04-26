import { useJobsStore } from '@/store/jobs'

export default defineNuxtRouteMiddleware((to) => {
  const jobsStore = useJobsStore()

  const idParam = Array.isArray(to.params.id) ? to.params.id[0] : to.params.id
  const jobId = parseInt(idParam)

  const job = jobsStore.getById(jobId)
  if (!job) {
    return navigateTo('/jobs')
  }
})
