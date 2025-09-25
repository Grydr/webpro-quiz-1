import { defineConfig } from "vite"
import { resolve } from "path"

export default {
    root: resolve(__dirname, 'src'),
    publicDir: "../assets",
    build: {
        outDir: '../build'
    },
    server: {
        port: 8080
    },
    css: {
        preprocessorOptions: {
           scss: {
             silenceDeprecations: [
               'import',
               'mixed-decls',
               'color-functions',
               'global-builtin',
             ],
           },
        },
     },
}