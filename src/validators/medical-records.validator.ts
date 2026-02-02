import { body, ValidationChain } from 'express-validator';

export const medicalRecordValidator: ValidationChain[] = [
  body('descripcion')
    .notEmpty()
    .withMessage('La descripción es obligatoria')
    .isLength({ min: 10 })
    .withMessage('La descripción debe tener al menos 10 caracteres'),

  body('petId')
    .notEmpty()
    .withMessage('Debes especificar el ID de la mascota')
    .isMongoId()
    .withMessage('El ID de la mascota no es válido'),
    
  body('fecha')
    .optional()
    .isISO8601()
    .toDate(),
];