import * as medicalModel from '../models/medical-records.model';
import { IMedicalRecord, MedicalRecord } from '../models/medical-records.model';
// CRUD

// Create
export const createMedicalRecord = async (
  data: Partial<IMedicalRecord>
) => {
  const record = new MedicalRecord(data)
  return await record.save();
};

// Read all by Pet
export const getMedicalRecordsByPet = async (petId: string) => {
  return await MedicalRecord.find({ petId }).populate('vetId', 'username email').populate('petId', 'nombre especie');
};

// Read by ID
export const getMedicalRecordById = async (id: string) => {
  return await MedicalRecord.findById(id) .populate('vetId', 'username email') .populate('petId', 'nombre especie');
};

// Update
export const updateMedicalRecord = async (id: string, data: Partial<IMedicalRecord>) => {
  return await MedicalRecord.findByIdAndUpdate(id, data, { new: true });
};

// Delete
export const deleteMedicalRecord = async (id: string) => {
  return await MedicalRecord.findByIdAndDelete(id);
};