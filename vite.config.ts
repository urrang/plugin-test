import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({ emitCss: false })],
  build: {
    lib: {
      entry: 'src/main.ts',
      fileName: 'plugin',
      formats: ['es']
    }
  }
})
