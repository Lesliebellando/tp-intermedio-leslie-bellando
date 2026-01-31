import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction, RequestHandler } from 'express';


const handleInputErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      message: 'Error en los datos enviados',
      errors: errors.array() 
    });
  }
  next();
};


export const validatePassword = [
  body('password')
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres')
    .matches(/\d/)
    .withMessage('La contraseña debe contener al menos un número')
    .matches(/[A-Z]/)
    .withMessage('La contraseña debe contener al menos una mayúscula')
    .matches(/[^A-Za-z0-9]/)
    .withMessage('La contraseña debe contener al menos un carácter especial (ej: @, #, $, !)'),
];

export const validateEmail = [
  body('email')
    .isEmail()
    .withMessage('Debe ser un email válido')
    .normalizeEmail(),
];


export const registerValidator = [
  ...validateEmail,
  ...validatePassword,
  body('username')
    .isLength({ min: 3 })
    .withMessage('Username debe tener al menos 3 caracteres')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username solo puede contener letras, números y guiones bajos'),
  
  handleInputErrors 
] as RequestHandler[];

// Validador para Login
export const loginValidator = [
  ...validateEmail,
  body('password')
    .notEmpty()
    .withMessage('La contraseña es requerida'),
  
  handleInputErrors 
] as RequestHandler[];