
import * as petModel from '../models/pet.model';
import { UserRole } from '../types/auth';


//CRUD
// Create
export const createPet = async (
    data: Omit<petModel.PetData, 'id'>): Promise<string> => {
  return await petModel.createPet(data);
};

// Read All
export const getAllPets = async (userId: string, role: UserRole) => {
  if (role === UserRole.ADMIN) {
    return await petModel.findAllPets();
  }

  return await petModel.findPetsByOwner(userId);
};



// Read by ID
export const getPetById = async (id: string, userId: string, role: UserRole) => {
  const pet = await petModel.findPetById(id);
  if (!pet) return null;

  if (role === UserRole.ADMIN || pet.ownerId === userId) {
    return pet;
  }

  return null;
};

// Read by Owner
export const getPetsByOwner = async (ownerId: string) => {
  return await petModel.findPetsByOwner(ownerId);
};
// Update 
export const updatePet = async (
  id: string,
  data: Partial<petModel.PetData>
) => {
  return await petModel.updatePet(id, data);
};

// Delete
export const deletePet = async (id: string) => {
  const deleted = await petModel.deletePet(id);
  return deleted;
};