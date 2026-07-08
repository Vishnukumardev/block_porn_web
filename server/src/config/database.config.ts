import {Pool} from 'pg'
import {env} from './env.config.js'


export const pool = new Pool({
    connectionString: env.DATABASE_URL,ssl:env.NODE_ENV === 'prod'?{rejectUnauthorized:false}:false,
});

export const connectDB = async(): Promise<void> =>{

  
    try{
        const client = await pool.connect();
        console.log(`Database Connected successfully`);
        client.release();
    }catch(e){
        console.error(`Database connection failed:`,e);
        process.exit(1);
    }
};