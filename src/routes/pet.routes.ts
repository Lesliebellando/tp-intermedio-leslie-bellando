import { Router } from 'express';
import { createPet, getAllPets, getPetById, updatePet, deletePet } from '../controllers/pet.controller';
import { authenticate,authorize } from '../middlewares/auth.middleware'; // <--- El guardián
import { petValidator } from '../validators/pet.validator';    // <--- Reglas de datos
import validateDto from '../middlewares/dto.middleware';       // <--- El policía
import { UserRole } from '../types/auth';// <--- Importamos el Enum de roles
const router = Router();


// Todas las rutas de abajo requieren estar logueado
router.use(authenticate); 

// Read Ruta Protegida (Dueños y Admins)
router.get('/', getAllPets); // Obtener todas las mascotas
router.get('/:id', getPetById); // Obtener mascota por ID

// Create Ruta Solo Admin
router.post('/', authorize([UserRole.ADMIN]), petValidator, validateDto, createPet);
// Update Ruta Solo Admin
router.put(
    '/:id', 
    authorize([UserRole.ADMIN]), 
    petValidator, 
    validateDto, 
    updatePet
);
// Delete ruta Solo Admin
router.delete(
    '/:id', 
    authorize([UserRole.ADMIN]), 
    deletePet
);

export default router;