# 🐾 Sistema de Gestión Veterinaria - Backend

Trabajo Práctico Intermedio 
**Alumna:** Leslie Gricel Bellando


## 📝 Descripción
API RESTful construida con **Node.js, Express, TypeScript y MongoDB**. Implementa autenticación segura con JWT, arquitectura MVC, validación de datos y manejo de errores.

Permite la gestión de:
- **Autenticación:** Registro y Login de veterinarios (Usuarios).
- **Mascotas:** CRUD completo.
- **Historias Clínicas:** Registro de consultas médicas asociadas a mascotas.

- Aclaración:
Inicialmente intenté implementar dos tipos de usuarios con roles diferenciados. Sin embargo, no me fue posible concretarlo,
por lo que se decidi simplificar a un único rol: veterinario, el cual posee permisos completos para realizar todas las operaciones CRUD del sistema.

## 🛠️ Tecnologías
- Node.js & Express
- TypeScript
- MongoDB & Mongoose
- JSON Web Tokens (JWT)
- Express Validator

## 🚀 Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Lesliebellando/tp-intermedio-leslie-bellando.git
   cd tp-intermedio-leslie-bellando
   ```
2. **Instalar dependencias:**

```bash
npm install
```
3. **Configurar variables de entorno:**
```bash
cp .env.example .env
```
Abre el archivo .env y configura MONGO_URI y JWT_SECRET.

4. **Iniciar el servidor:**

```bash

npm run dev
```
## 📡 Ejemplos de Requests

Ejemplo de cómo se estructura una petición para **Crear una Mascota** (Endpoint protegido).

**POST** `/api/pets`

**Headers:**
```json
{
  "Content-Type": "application/json",
  "Authorization": "Bearer <TU_TOKEN_JWT>"
}
```
**Body(JSON):**
```json
{
  "nombre": "Firulais",
  "especie": "Perro",
  "raza": "Mestizo",
  "nombreDueno": "Juan Perez",
  "telefonoDueno": "3794123456"
}
```
---
## 🧪 cURLS
Para ver la lista completa de comandos curl, por favor revisa el archivo: 👉 [Ver Guía de Comandos cURL](curls.md)


