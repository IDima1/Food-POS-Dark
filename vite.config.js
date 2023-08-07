import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import sass from 'node-sass'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass
      },
    },
  },
});
