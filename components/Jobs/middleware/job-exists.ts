import { defineNuxtRouteMiddleware, navigateTo, useRoute } from 'nuxt/app'
import { useJobsStore } from '~/store/jobs'

export default defineNuxtRouteMiddleware(async () => {
  const route = useRoute()
  const jobsStore = useJobsStore()

  const isJobPage = route.path.startsWith('/jobs/') && route.params.id

  if (!isJobPage) return

  const jobId = parseInt(route.params.id as string)
  if (!jobsStore.jobs.length) {
    await jobsStore.fetchJobs()
  }

  const jobExists = jobsStore.getById(jobId)

  if (!jobExists) {
    return navigateTo('/jobs')
  }
})
