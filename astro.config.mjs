// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Esto es vital para SEO y sitemap
  
  site: 'https://mariaesperanzagallegos.com', 

  vite: {
    plugins: [tailwindcss()]
  }
});