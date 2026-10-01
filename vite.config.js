import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //gitgub Repository 이름
  base: '/react-mealLight/'
})
