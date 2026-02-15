import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 关键：添加这一行。确保打包后的资源路径是相对路径 (./)，
  // 避免 Netlify 在二级路径下找不到图片或 JS/CSS 文件。
  base: './', 
  server: {
    port: 3000,
    open: true
  }
})