import { defineConfig } from "vite"
import { resolve } from "path"

export default {
    base: "/webpro-quiz-1/",
    root: resolve(__dirname, 'src'),
    publicDir: "../assets",
    build: {
        outDir: '../build',
        rollupOptions: {
            input: {
              main:     resolve(__dirname, "index.html"),
              hometown:  resolve(__dirname, "src/hometown.html"),
              food:      resolve(__dirname, "src/food.html"),
              tourist:   resolve(__dirname, "src/tourist.html"),
              profile:   resolve(__dirname, "src/profile.html"),
            }
        },
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