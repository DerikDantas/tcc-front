import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { EsLinter, linterPlugin } from 'vite-plugin-linter';
import svgrPlugin from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })]
    }),
    svgrPlugin()
  ]
}));
