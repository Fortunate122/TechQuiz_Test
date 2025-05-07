import { defineConfig } from 'cypress';
import customViteConfig from './vite.config';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: customViteConfig,
    },
    specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}",
    supportFile: false
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
    supportFile: false,
    experimentalFetchPolyfill: true, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
