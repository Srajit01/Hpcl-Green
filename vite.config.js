import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@emotion/react': path.resolve('node_modules/@emotion/react'),
      '@emotion/styled': path.resolve('node_modules/@emotion/styled'),
    },
  },
  define: {
    __WS_TOKEN__: JSON.stringify(process.env.WS_TOKEN || ''),
  },
})
