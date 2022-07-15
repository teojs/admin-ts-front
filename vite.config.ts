import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import autoRouter from './plugin/auto-router'
import autoApi from './plugin/auto-api'

interface Servers {
  [propName: string]: string
}

const servers: Servers = {
  prod: 'http://127.0.0.1:3000',
  test: 'http://127.0.0.1:3000',
}
const proxyTarget = process.env.npm_config_api || 'test'
const basePath = process.env.npm_config_base || '/'

// https://vitejs.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [
    vue(),
    eslint({
      // fix: true,
      throwOnError: true,
      throwOnWarning: true,
    }),
    autoRouter({
      pagesDir: 'src/pages',
      layoutsDir: 'src/layouts',
      routerDir: 'src/router',
    }),
    autoApi({
      serviceDir: 'src/service',
      apisDir: 'src/service/apis',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: servers[proxyTarget],
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
