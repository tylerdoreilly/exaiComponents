import { fileURLToPath, URL } from 'node:url'
import * as path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "exai-components",
      fileName: "exai-components"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:`
        @use '@/styles/_variables' as *;
        @use '@/styles/_mixins' as *;
        `
      }
    }
  }
})
