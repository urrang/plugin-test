import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: 'src/main.ts',
      fileName: 'plugin',
      formats: ['es']
    }
    // rollupOptions: {
    //   output: {
    //     manualChunks: false
    //   }
    // }
  }
})
