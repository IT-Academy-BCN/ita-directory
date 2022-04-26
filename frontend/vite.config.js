import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
    base: "/",
    server: {
        port: 3000,
    },
    publicDir: './public',
    define: {
        "process.env.VITE_NAME": `"${process.env.VITE_NAME}"`,
    },
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11']
        }),
        react(),

    ],

});
