import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/graphql': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },

      '/auth': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
      '/chats': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
      '/chats/_id': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
      '/messages': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
