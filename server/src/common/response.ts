import type { Response } from 'express';
import type { ApiResponse } from '../types/api.types.js';

export const sendSuccess = <T>(res: Response, statusCode: number, message: string, data?: T): void => {
  const responseBody: ApiResponse<T> = {
    success: true,
    message,
    ...(data !== undefined && { data }),
  };
  res.status(statusCode).json(responseBody);
};