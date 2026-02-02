import mongoose from "mongoose";

export interface IPet extends Document { //I de interfaz
  nombre: string;
  especie: string;
  raza: string;
  fechaNacimiento?: Date;
  ownerId: mongoose.Types.ObjectId; 
  createdAt: Date;
  updatedAt: Date;
}
