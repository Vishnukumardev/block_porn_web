import express from 'express';
import { asyncHandler } from '../middleware/asyncHandler.js';

const app = express();

app.use(express.json());

app.use(asyncHandler);

export default app;