import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
base: '/mohamed-messaoudene.github.io/',
  plugins: [react()],
})
