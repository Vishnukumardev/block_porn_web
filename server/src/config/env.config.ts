import dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config();

const envSchema = z.object({
    PORT:z.coerce.number().default(3000),
    NODE_ENV:z.enum(['dev','prod','stag','test']).default('dev'),
    DB_HOST: z.string().default('localhost'),
    DB_PORT: z.coerce.number(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),

}).transform((data)=>({
    ...data,DATABASE_URL: `postgresql://${data.DB_USER}:${data.DB_PASSWORD}@${data.DB_HOST}:${data.DB_PORT}/${data.DB_NAME}`,
}));

const parsedEnv = envSchema.safeParse(process.env);

if(!parsedEnv.success){
    const formattedErrors = z.treeifyError(parsedEnv.error);
    console.error('Invalid env config:',formattedErrors);
    process.exit(1);
}

export const env = parsedEnv.data;