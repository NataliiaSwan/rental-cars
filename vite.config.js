// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     sourcemap: true,
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

export default defineConfig({
  plugins: [
    react(),
    createSvgSpritePlugin({
      symbolId: 'icon-[name]',
    }),
  ],
});
