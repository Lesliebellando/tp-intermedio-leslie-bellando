import { Request, Response } from 'express';
import * as petService from '../services/pet.service';
import { PetData } from '../models/pet.model';

//Traer todas las mascotas getAllPets
export const getAllPets = async (req: Request, res: Response) => {
  try {
    const userId = req.user!.id;
    const role = req.user!.role;

    const pets = await petService.getAllPets(userId, role);
    return res.status(200).json(pets);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener mascotas' });
  }
};

//Traer mascota por id  getPetById
export const getPetById = async (req: Request, res: Response) => {
  try {
    const userId = req.user!.id;
    const role = req.user!.role;
    const pet = await petService.getPetById(req.params.id, userId, role);

    if (!pet) {
      return res.status(404).json({ error: 'Mascota no encontrada' });
    }

    return res.status(200).json(pet);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener mascota' });
  }
};

//Crear mascota createPet
export const createPet = async (req: Request, res: Response) => {
  try {
    const petData: Omit<PetData, 'id'> = req.body;
    const petId = await petService.createPet(petData);
    return res.status(201).json({ id: petId });
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear mascota' });
  }
};

//Actualizar mascota updatePet
export const updatePet = async (req: Request, res: Response) => {
  try {
    const pet = await petService.updatePet(req.params.id, req.body);

    if (!pet) {
      return res.status(404).json({ error: 'Mascota no encontrada' });
    }

    return res.status(200).json(pet);
  } catch (error) {
    return res.status(400).json({ error: 'Error al actualizar mascota' });
  }
};

//Eliminar mascota deletePet
export const deletePet = async (req: Request, res: Response) => {
  try {
    const deleted = await petService.deletePet(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: 'Mascota no encontrada' });
    }

    return res.status(200).json({ message: 'Mascota eliminada' });
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar mascota' });
  }
};
