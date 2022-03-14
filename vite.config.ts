/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const svgrPlugin = require('vite-plugin-svgr')

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true
      }
    })
  ],
  server: {
    open: true
  },
  build: {
    outDir: './build'
  }
})
