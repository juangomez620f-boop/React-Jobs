import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server:{
    port: 3000,
    // json-server escribe en jobs.json al añadir/borrar; si Vite lo vigila,
    // recarga la página entera y se pierde el toast
    watch: {
      ignored: ['**/jobs.json'],
    },
    proxy:{
      '/api':{
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
