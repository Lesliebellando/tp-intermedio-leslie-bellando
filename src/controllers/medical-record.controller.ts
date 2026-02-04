import { Request, Response } from 'express';
import * as medicalService from '../services/medical-records.service';

// CREATE
export const createMedicalRecord = async (req: Request, res: Response) => {
  try {
    const recordData = req.body;
    recordData.vetId = req.user!.id; // asignar el ID del veterinario desde el token
    const newRecord = await medicalService.createMedicalRecord(recordData);
    return res.status(201).json(newRecord);
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Error al crear historia clínica' });
  }
};

// Ver el historial médico de una mascota READ all by Pet
export const getMedicalRecordsByPet = async (req: Request, res: Response) => {
  try {
    const { petId } = req.params;
  
    const records = await medicalService.getMedicalRecordsByPet(
    petId
    );
    return res.status(200).json(records);
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({
      error: error.message || 'Error al obtener historias clínicas',
    });
  }
};

// READ by ID leer historia clínica por id
export const getMedicalRecordById = async (req: Request, res: Response) => {
  try {
  
    const record = await medicalService.getMedicalRecordById(req.params.id);
if (!record) {
      return res.status(404).json({ error: 'Historia clínica no encontrada' });
    }

    return res.status(200).json(record);
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Error al obtener historia clínica' });
  }
};

// UPDATE
export const updateMedicalRecord = async (req: Request, res: Response) => {
  try {
    const updated = await medicalService.updateMedicalRecord(
      req.params.id,
      req.body
    );

    if (!updated) {
      return res.status(404).json({ error: 'Historia clínica no encontrada' });
    }

    return res.status(200).json(updated);
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Error al actualizar historia clínica' });
  }
};

// DELETE
export const deleteMedicalRecord = async (req: Request, res: Response) => {
  try {
    const deleted = await medicalService.deleteMedicalRecord(req.params.id);
    
    if (!deleted) {
       return res.status(404).json({ error: 'Historia clínica no encontrada' });
    }
    return res.status(200).json({ message: 'Historia clínica eliminada' });
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({
      error: error.message || 'Error al eliminar historia clínica',
    });
  }
};
