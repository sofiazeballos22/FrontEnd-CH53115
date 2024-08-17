import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Asegúrate de que el directorio de salida es 'dist'
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://tu-backend-en-railway.com', // Cambia a tu URL de backend en Railway
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
