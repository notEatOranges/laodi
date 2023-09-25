/*
 * @Description: 
 * @Date: 2023-09-25 10:32:05
 * @LastEditors: huangly
 * @LastEditTime: 2023-09-25 15:12:29
 * @FilePath: /A-work/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { LaoResolver } from '@laodi/resolver'
// <https://vitejs.dev/config/>
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        LaoResolver()
      ]
    }),
    AutoImport({
      resolvers: [
        LaoResolver()
      ]
    })
  ]
})