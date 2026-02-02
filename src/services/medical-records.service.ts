import * as medicalModel from '../models/medical-records.model';

// CRUD

// Create
export const createMedicalRecord = async (
  data: Omit<medicalModel.MedicalRecordData, 'id' | 'fecha'>
) => {
  return await medicalModel.createMedicalRecord(data);
};

// Read all by Pet
export const getMedicalRecordsByPet = async (petId: string) => {
  return await medicalModel.findMedicalRecordsByPet(petId);
};

// Read by ID
export const getMedicalRecordById = async (id: string) => {
  return await medicalModel.findMedicalRecordById(id);
};

// Update
export const updateMedicalRecord = async (
  id: string,
  data: Partial<medicalModel.MedicalRecordData>
) => {
  return await medicalModel.updateMedicalRecord(id, data);
};

// Delete
export const deleteMedicalRecord = async (id: string) => {
  return await medicalModel.deleteMedicalRecord(id);
};
