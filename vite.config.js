import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { dirname } from 'path'
import sass from 'node-sass'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path' 
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)),
      './src/i18n/locales/**'),
    })
  ],
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
