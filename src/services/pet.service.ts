
import { MedicalRecord } from '../models/medical-records.model';
import { IPet, Pet } from '../models/pet.model';



//CRUD
// Create
export const createPet = async (data: Partial<IPet>) => {
  const newPet = new Pet(data);
  return await newPet.save();
};

// Get all
export const getAllPets = async () => {
  return await Pet.find();
};



// Get by ID
export const getPetById = async (id: string) => {
  return await Pet.findById(id);
};

// Update
export const updatePet = async (id: string, data: Partial<IPet>) => {
  return await Pet.findByIdAndUpdate(id, data, { new: true });
};

// Delete
export const deletePet = async (id: string) => {
  const deletedPet = await Pet.findByIdAndDelete(id);
  
  if (deletedPet) {
    await MedicalRecord.deleteMany({ petId: id });
  }
  
  return deletedPet;
};