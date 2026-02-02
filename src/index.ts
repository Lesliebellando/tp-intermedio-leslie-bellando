import express, { Request, Response } from 'express';
import path from 'path';

import 'dotenv/config';

import authRoutes from './routes/auth.routes';
import petRoutes from './routes/pet.routes';
import medicalrecordsRoutes from './routes/medical-records.routes';

import { connectDB } from './config/database';
import { errorHandler } from './middlewares/error.middleware';


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, '..', 'public')));

// app.use('/auth', authRoutes);

// app.get('/public', (req: Request, res: Response) => {
//   res.json({
//     message: 'Cualquiera puede entrar!',
//   });
// });

// app.get('/protected', authenticate, (req, res) => {
//   res.json({
//     message: 'Acceso permitido',
//   });
// });

// // Ruta de administrador (requiere autenticación y rol admin)
// app.get('/admin', authenticate, authorize(['admin']), (req, res) => {
//   res.json({
//     message: 'Acceso de administrador permitido',
//   });
// });

// app.get('/api/saludo', (req: Request, res: Response) => {
//   res.json({ mensaje: 'Hola desde la API 🚀' });
// });

// app.use('/api/categoria', categoriesRoutes);
// app.use('/api/producto', productsRoutes);

// === RUTAS ===
app.use('/api/auth', authRoutes);
app.use('/api/pets', petRoutes);            // <--- Nueva ruta
app.use('/api/medical-records', medicalrecordsRoutes);

// Middleware de manejo de errores global (debe ser el último)
app.use(errorHandler);


// Conectar a MongoDB y luego iniciar el servidor HTTP
//esto sirve para que primero se conecte a la base de datos y luego inicie el servidor
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT} 🚀`);
  });
});
