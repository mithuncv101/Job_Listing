import { defineStore } from 'pinia'

interface Job {
  id: number
  title: string
  company: string
  category: string
  salary: string
  description: string
}

export const useJobsStore = defineStore('jobs', {
  state: () => ({
    jobs: [] as Job[],
    loading: false,
    error: ''
  }),

  getters: {
    getJobsByCategory: (state) => {
      return (category: string) => {
        if (category === 'All') return state.jobs
        return state.jobs.filter(job => job.category === category)
      }
    },
    getById: (state) => {
      return (id: number) => state.jobs.find(job => job.id === id)
    }
  },

  actions: {
    async fetchJobs() {
      this.loading = true
      this.error = ''
      try {
        const res = await fetch('/jobs.json')
        if (!res.ok) throw new Error('Failed to fetch jobs')
        const data = await res.json()
        this.jobs = data.jobs
      } catch (err: any) {
        this.error = err.message || 'Error fetching jobs'
      } finally {
        this.loading = false
      }
    }
  }
})
