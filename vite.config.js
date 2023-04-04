import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver,ElementPlusResolver  } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ...
    AutoImport({
      resolvers: [AntDesignVueResolver(),ElementPlusResolver()],
    }),
    Components({
      resolvers: [AntDesignVueResolver(),ElementPlusResolver()],
    }),

  ],

  resolve:{
    alias:{
      '@':path.resolve('./src')   // @代替src
    }
  },
})
