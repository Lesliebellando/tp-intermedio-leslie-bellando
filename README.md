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

Se incluye una colección completa de peticiones para probar los endpoints del proyecto utilizando **Insomnia**. El archivo de exportación se encuentra en la raíz del repositorio. [Archivo Insomnia](Insomnia_2026-02-04.yaml)

### 📋 Cómo importar las pruebas
1. Descargar [Archivo Insomnia](Insomnia_2026-02-04.yaml) de este repositorio.
2. Abrir **Insomnia**.
3. Hacer clic en el menú de la colección o en "Create" y seleccionar **Import**.
4. Cargar el archivo JSON.

### 🔄 Flujo recomendado
Las peticiones están numeradas para seguir el orden lógico de la aplicación:

1. **Registro:** Crea un nuevo usuario en la base de datos.
2. **Login:** Autentica al usuario y genera el **Token JWT**.
3. **Rutas Protegidas:** El resto de las peticiones (Crear Mascota, Ver Usuarios, etc.) requieren el Token obtenido en el paso anterior.


## 🧪 cURLS
Para ver la lista completa de comandos curl, por favor revisa el archivo: 👉 [Ver Guía de Comandos cURL](curls.md)


