import { Request, Response } from 'express';
import * as petService from '../services/pet.service';

//Crear mascota createPet
export const createPet = async (req: Request, res: Response) => {
  try {
 const newPet = await petService.createPet(req.body);
    return res.status(201).json(newPet);
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Error al crear mascota' });
  }
};

//Traer todas las mascotas getAllPets
export const getAllPets = async (req: Request, res: Response) => {
  try {
    const pets = await petService.getAllPets();
    return res.status(200).json(pets);
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Error al obtener mascotas' });
  }
};
//Traer mascota por id  getPetById
export const getPetById = async (req: Request, res: Response) => {
  try {
    const pet = await petService.getPetById(req.params.id);

    if (!pet) {
      return res.status(404).json({ error: 'Mascota no encontrada' });
    }

    return res.status(200).json(pet);
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Error al obtener mascota' });
  }
};


//Actualizar mascota updatePet
export const updatePet = async (req: Request, res: Response) => {
  try {
    const update = await petService.updatePet(req.params.id, req.body);

    if (!update) {
      return res.status(404).json({ error: 'Mascota no encontrada' });
    }

    return res.status(200).json(update);
  } catch (error: any) {
    return res.status(400).json({ error: error.message || 'Error al actualizar mascota' });
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
