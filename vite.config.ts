import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vsharp from "vite-plugin-vsharp"
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vsharp({
        '.jpg': {
            quality: 40,
        },
    })
  ],
  build: {
    target: 'es2015',
  },
  resolve: {
      alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
      }   
  }
});
