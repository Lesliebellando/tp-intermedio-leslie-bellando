import mongoose, { Schema, Document } from 'mongoose';

export interface IPet extends Document {
  nombre: string;
  especie: string;
  raza: string;
  fechaNacimiento?: Date;
  ownerId: mongoose.Types.ObjectId; 
  updatedAt: Date;
}

const petSchema = new Schema<IPet>(
  {
    nombre: { type: String, required: true, trim: true },
    especie: { type: String, required: true, trim: true },
    raza: { type: String, trim: true },
    fechaNacimiento: { type: Date },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: 'User', 
      required: true,
    },
  },
  { timestamps: true }
);

petSchema.index({ nombre: 1 });
petSchema.index({ ownerId: 1 });


export const Pet = mongoose.model<IPet>('Pet', petSchema);


export interface PetData {
  id: string;
  nombre: string;
  especie: string;
  raza?: string;
  fechaNacimiento?: Date;
  ownerId: string;
}

// Crear una mascota nueva
export const createPet = async (
  data: Omit<PetData, 'id'>
): Promise<string> => {
  const newPet = new Pet({
    nombre: data.nombre,
    especie: data.especie,
    raza: data.raza,
    fechaNacimiento: data.fechaNacimiento,
    ownerId: data.ownerId,
  });
  const saved = await newPet.save();
  return saved._id.toString();
};

// Buscar todas las mascotas de un dueño 
export const findPetsByOwner = async (ownerId: string): Promise<PetData[]> => {
  const pets = await Pet.find({ ownerId }).lean();
  
  return pets.map(p => ({
    id: p._id.toString(),
    nombre: p.nombre,
    especie: p.especie,
    raza: p.raza,
    fechaNacimiento: p.fechaNacimiento,
    ownerId: p.ownerId.toString()
  }));
};