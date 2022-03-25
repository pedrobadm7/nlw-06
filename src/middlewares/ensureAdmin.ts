import { NextFunction, Request, Response } from 'express';

export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  // Verificar se usuário é admin
  const isUserAdmin = true;

  if (isUserAdmin) {
    return next();
  }

  return response.status(401).json({
    error: 'Unauthorized',
  });
}
