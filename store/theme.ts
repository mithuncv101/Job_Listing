import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: false,  // Default theme is light
  }),

  actions: {
    // Toggle theme between light and dark
    toggleTheme() {
      this.isDark = !this.isDark
      this.applyTheme()
    },

    // Apply the current theme to the document
    applyTheme() {
      if (this.isDark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    },

    // Initialize the theme based on localStorage or default to 'light'
    initializeTheme() {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        this.isDark = savedTheme === 'dark'
        this.applyTheme()
      } else {
        this.isDark = false // Default to light theme
      }
    }
  }
})
