import { body, ValidationChain } from 'express-validator';

export const petValidator: ValidationChain[] = [
  body('nombre')
    .notEmpty()
    .withMessage('El nombre de la mascota es obligatorio')
    .isString()
    .trim()
    .isLength({ min: 2 })
    .withMessage('El nombre debe tener al menos 2 letras'),

  body('especie')
    .notEmpty()
    .withMessage('La especie es obligatoria (ej: perro, gato)')
    .isString()
    .trim(),

  body('raza')
    .optional()
    .isString()
    .trim(),

  body('fechaNacimiento')
    .optional()
    .isISO8601()
    .withMessage('La fecha debe tener formato YYYY-MM-DD')
    .toDate(),
];