import {defineConfig} from 'drizzle-kit';
import {env} from './env.config.js';


export default defineConfig({schema: './src/models/**/*',
  out: 'migrations/',            // Generates raw SQL here
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});