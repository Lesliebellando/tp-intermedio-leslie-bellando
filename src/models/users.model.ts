import mongoose, { Schema, Document } from 'mongoose';
import { UserRole } from '../types/auth';

//a diferencia de MySQL, en MongoDB no es necesario definir las tablas y sus columnas de antemano las estructuras se definen por codigo mediante esquemas. 
//en dependencia cambiar MySQL2 por mongoose
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}


const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Por favor ingresa un email válido'],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
    } as any,
  },
  {
    timestamps: true,
  }
);

userSchema.index({ email: 1 });
userSchema.index({ username: 1 });

export const User = mongoose.model<IUser>('User', userSchema);
//mongoose.model(nombreDelModelo, schema)

//userdata es lo que se devuelve al controller y luego al cliente
export interface UserData {
  id: string;
  username: string;
  email: string;
  password: string;
  role: UserRole;
}

export const findUser = async (
  email: string = '',
  username: string = ''
): Promise<UserData | null> => {
const user = await User.findOne({
  $or: [{ email }, { username }],
}).lean();


  if (!user) return null;

  return {
    id: user._id.toString(),
    username: user.username,
    email: user.email,
    password: user.password,
    role: user.role as UserRole,
  };
};

export const createUser = async (
  user: Omit<UserData, 'id'> 
): Promise<string> => {
  const newUser = new User({
    username: user.username,
    email: user.email,
    password: user.password,
    role:  user.role,
  }); //en mysql se usa un trigger para asignar el role por defecto en mongo lo asignamos directamente por defecto en el esquema

  const savedUser = await newUser.save();
  return savedUser._id.toString();
};