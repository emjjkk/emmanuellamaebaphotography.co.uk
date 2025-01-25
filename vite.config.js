import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets*',
          dest: '/'
        }
      ]
    })
  ],
  server: {
    allowedHosts: [
      "5173-emjjkk-emmanuellamaebap-rxj988usl8n.ws-eu117.gitpod.io"
    ]
  }
})
