// Utilities
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// Plugins
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import browserslistToEsbuild from 'browserslist-to-esbuild'

import { peerDependencies } from "./package.json";

const buildFormat = process.env.BUILD_FORMAT || 'es';
const port = process.env.PORT || 8080

const isBuildFormatESM = buildFormat === 'es'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls
      }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
    cssInjectedByJsPlugin()
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    minify: !isBuildFormatESM,
    cssMinify: true,
    target: browserslistToEsbuild(),
    lib: {
      entry: isBuildFormatESM ? 'src/entry.esm.js' : 'src/entry.js',
      formats: [buildFormat],
      name: 'SweetAlertVuetify',
      fileName: (format) => `sweet-alert-vuetify.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        compact: true,
        exports: isBuildFormatESM ? 'named' : 'auto',
        globals: {
          vue: 'Vue',
          vuetify: 'Vuetify'
        }
      },
    },
  },
});
