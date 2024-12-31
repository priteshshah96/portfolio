import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Use '/' for custom domains
  plugins: [react()],
  build: {
    outDir: 'docs', // Output to a 'docs' folder for GitHub Pages
    assetsDir: 'assets', // Organize assets in an 'assets' folder
    emptyOutDir: false, // Prevent deleting the folder (e.g., CNAME file)
  },
});
