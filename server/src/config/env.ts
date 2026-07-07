import dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config();

const envSchema = z.object({
    PORT:z.coerce.number().default(3000),
    NODE_ENV:z.enum(['dev','prod','stag','test']).default('dev'),
    DATABASE_URL: z.url({ error: 'DATABASE_URL must be a valid connection string' }),

});

const parsedEnv = envSchema.safeParse(process.env);

if(!parsedEnv.success){
    const formattedErrors = z.treeifyError(parsedEnv.error);
    console.error('Invalid env config:',formattedErrors);
    process.exit(1);
}

export const env = parsedEnv.data;