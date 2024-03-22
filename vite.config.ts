import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    // exclude: ['super-fast-md5'],
  },
  plugins: [react()],
})
