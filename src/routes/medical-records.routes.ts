import { Router } from 'express';
import {
  createMedicalRecord,
  getMedicalRecordsByPet,
  getMedicalRecordById,
  updateMedicalRecord,
  deleteMedicalRecord
} from '../controllers/medical-record.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware'; // Autenticación y Autorización
import { medicalRecordValidator } from '../validators/medical-records.validator';
import validateDto from '../middlewares/dto.middleware';
import { UserRole } from '../types/auth';

const router = Router();

// Middleware de autenticación para todas las rutas de este router
router.use(authenticate);

// Read (Vets y Dueños) 
// El controlador se encarga de verificar que la mascota pertenezca al dueño o que el usuario sea veterinario
router.get('/pet/:petId', getMedicalRecordsByPet);
router.get('/:id', getMedicalRecordById);


//authorize([UserRole.ADMIN]) sirve para bloquear a usuarios que no sean admin
//Create (Admin)
router.post(
  '/', 
  authorize([UserRole.ADMIN]), // Solo Admin
  medicalRecordValidator,      // Validar datos
  validateDto,                 // Chequear errores
  createMedicalRecord
);

//Update (Admin)
router.put(
  '/:id', 
  authorize([UserRole.ADMIN]), 
  medicalRecordValidator,      // Validar los datos nuevos
  validateDto, 
  updateMedicalRecord
);

//Delete (Admin)
router.delete(
  '/:id', 
  authorize([UserRole.ADMIN]), 
  deleteMedicalRecord
);

export default router;