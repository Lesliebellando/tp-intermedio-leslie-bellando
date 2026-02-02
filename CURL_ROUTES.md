# API Endpoints - Ejemplos de CURL

Este archivo contiene ejemplos de CURL para todos los endpoints del proyecto TP Intermedio.

**URL Base:** `http://localhost:3000`

---

## 🔐 Autenticación (Auth)

### 1. Registrar un nuevo usuario

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "SusananaDuena",
    "email": "susana@patitas.com",
    "password": "Password123!"
  }'
```

**Respuesta esperada:**

```json
{
  "message": "Usuario registrado exitosamente",
  "user": {
    "_id": "...",
    "username": "SusananaDuena",
    "email": "susana@patitas.com",
    "role": "user"
  }
}
```

---

### 2. Login (obtener token JWT)

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "susana@patitas.com",
    "password": "Password123!"
  }'
```

**Respuesta esperada:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5N2ZhNDNmZmY4YzU3YmI3MDA1NTcxNiIsInVzZXJuYW1lIjoiU3VzYW5hRHVlbmEiLCJyb2xlIjoidXNlciIsImlhdCI6MTc2OTk3MzM3MywiZXhwIjoxNzcwMDU5NzczLCJpc3MiOiJjdXJzby11dG4tYmFja2VuZCJ9.LdHmNWmLkbACCvd-j_3ujzY4cAIQlovF5lIFZN2D4oY"
}
```

> **Nota:** Guarda este token para usarlo en las siguientes peticiones. Reemplaza "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5N2ZhNDNmZmY4YzU3YmI3MDA1NTcxNiIsInVzZXJuYW1lIjoiU3VzYW5hRHVlbmEiLCJyb2xlIjoidXNlciIsImlhdCI6MTc3MDAzNzM5NywiZXhwIjoxNzcwMTIzNzk3LCJpc3MiOiJjdXJzby11dG4tYmFja2VuZCJ9.rzTrPLzqi91eWUHo0OREIejgFKbcxb0kbMjPhWyUxUg" con el token recibido.

---

## 🐾 Mascotas (Pets)

### 3. Obtener todas las mascotas (requiere autenticación)

```bash
curl -X GET http://localhost:3000/api/pets \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Notas:**

- Accesible por: Dueños y Admins
- Retorna todas las mascotas registradas en el sistema

---

### 4. Obtener una mascota por ID (requiere autenticación)

```bash
curl -X GET http://localhost:3000/api/pets/PET_ID \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Ejemplo con ID real:**

```bash
curl -X GET http://localhost:3000/api/pets/697fa43fff8c57bb70055716 \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Notas:**

- Accesible por: Dueños y Admins
- Retorna los detalles de una mascota específica

---

### 5. Crear una nueva mascota (requiere autenticación y rol ADMIN)

```bash
curl -X POST http://localhost:3000/api/pets \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "nombre": "Firulais",
    "especie": "Perro",
    "raza": "Mestizo",
    "fechaNacimiento": "2020-05-20"
  }'
```

**Ejemplo completo:**

```bash
curl -X POST http://localhost:3000/api/pets \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5N2ZhNDNmZmY4YzU3YmI3MDA1NTcxNiIsInVzZXJuYW1lIjoiU3VzYW5hRHVlbmEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3Njk5NzMzNzMsImV4cCI6MTc3MDA1OTc3MywiaXNzIjoiY3Vyc28tdXRuLWJhY2tlbmQifQ.token" \
  -d '{
    "nombre": "Misu",
    "especie": "Gato",
    "raza": "Persa",
    "fechaNacimiento": "2021-03-15"
  }'
```

**Parámetros requeridos:**

- `nombre`: string - Nombre de la mascota
- `especie`: string - Especie (Perro, Gato, etc.)
- `raza`: string - Raza de la mascota
- `fechaNacimiento`: date (YYYY-MM-DD) - Fecha de nacimiento

---

### 6. Actualizar una mascota (requiere autenticación y rol ADMIN)

```bash
curl -X PUT http://localhost:3000/api/pets/PET_ID \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "nombre": "Firulais Actualizado",
    "especie": "Perro",
    "raza": "Labrador",
    "fechaNacimiento": "2020-05-20"
  }'
```

**Ejemplo con ID real:**

```bash
curl -X PUT http://localhost:3000/api/pets/697fa43fff8c57bb70055716 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "nombre": "Max",
    "especie": "Perro",
    "raza": "Labrador",
    "fechaNacimiento": "2020-05-20"
  }'
```

**Notas:**

- Solo ADMINS pueden actualizar
- Todos los campos son actualizables

---

### 7. Eliminar una mascota (requiere autenticación y rol ADMIN)

```bash
curl -X DELETE http://localhost:3000/api/pets/PET_ID \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Ejemplo con ID real:**

```bash
curl -X DELETE http://localhost:3000/api/pets/697fa43fff8c57bb70055716 \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Notas:**

- Solo ADMINS pueden eliminar
- La eliminación es permanente

---

## 📋 Registros Médicos (Medical Records)

### 8. Obtener registros médicos de una mascota (requiere autenticación)

```bash
curl -X GET http://localhost:3000/api/medical-records/pet/PET_ID \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Ejemplo con ID real:**

```bash
curl -X GET http://localhost:3000/api/medical-records/pet/697fa43fff8c57bb70055716 \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Notas:**

- Accesible por: Veterinarios, Dueños de la mascota y Admins
- Retorna todos los registros médicos de una mascota

---

### 9. Obtener un registro médico por ID (requiere autenticación)

```bash
curl -X GET http://localhost:3000/api/medical-records/RECORD_ID \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Ejemplo con ID real:**

```bash
curl -X GET http://localhost:3000/api/medical-records/697fa43fff8c57bb70055717 \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Notas:**

- Accesible por: Veterinarios, Dueños de la mascota y Admins
- Retorna los detalles de un registro médico específico

---

### 10. Crear un nuevo registro médico (requiere autenticación y rol ADMIN)

```bash
curl -X POST http://localhost:3000/api/medical-records \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "petId": "PET_ID",
    "fecha": "2026-02-02",
    "tipo": "Vacunación",
    "descripcion": "Vacuna anti-rabia",
    "veterinario": "Dr. García"
  }'
```

**Ejemplo completo:**

```bash
curl -X POST http://localhost:3000/api/medical-records \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "petId": "697fa43fff8c57bb70055716",
    "fecha": "2026-02-02",
    "tipo": "Vacunación",
    "descripcion": "Vacuna anti-rabia anual",
    "veterinario": "Dr. García"
  }'
```

**Parámetros requeridos:**

- `petId`: string (ObjectId) - ID de la mascota
- `fecha`: date (YYYY-MM-DD) - Fecha del registro
- `tipo`: string - Tipo de registro (Vacunación, Chequeo, etc.)
- `descripcion`: string - Descripción del registro
- `veterinario`: string - Nombre del veterinario

---

### 11. Actualizar un registro médico (requiere autenticación y rol ADMIN)

```bash
curl -X PUT http://localhost:3000/api/medical-records/RECORD_ID \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "petId": "PET_ID",
    "fecha": "2026-02-02",
    "tipo": "Chequeo General",
    "descripcion": "Chequeo de rutina completo",
    "veterinario": "Dra. López"
  }'
```

**Notas:**

- Solo ADMINS pueden actualizar
- Todos los campos son actualizables

---

### 12. Eliminar un registro médico (requiere autenticación y rol ADMIN)

```bash
curl -X DELETE http://localhost:3000/api/medical-records/RECORD_ID \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Notas:**

- Solo ADMINS pueden eliminar
- La eliminación es permanente

---

## 📝 Notas Importantes

### Reemplazos necesarios:

- **`YOUR_TOKEN_HERE`**: Reemplaza con el token JWT obtenido en la petición de login
- **`PET_ID`**: Reemplaza con el ID de una mascota existente (MongoDB ObjectId)
- **`RECORD_ID`**: Reemplaza con el ID de un registro médico existente (MongoDB ObjectId)

### Niveles de acceso:

- **Públicas**: Registro y Login
- **Autenticadas**: GET de Mascotas y Registros Médicos (cualquier rol)
- **Admin**: POST, PUT, DELETE de Mascotas y Registros Médicos

### Headers requeridos:

- **Autenticación**: `Authorization: Bearer <TOKEN_JWT>`
- **Content-Type**: `Content-Type: application/json` (para POST y PUT)

---

## 🧪 Ejemplo de flujo completo

### 1. Registrar usuario admin:

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@patitas.com",
    "password": "AdminPass123!"
  }'
```

### 2. Login y obtener token:

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@patitas.com",
    "password": "AdminPass123!"
  }'
```

### 3. Crear una mascota (reemplaza TOKEN con el obtenido):

```bash
curl -X POST http://localhost:3000/api/pets \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{
    "nombre": "Firulais",
    "especie": "Perro",
    "raza": "Golden Retriever",
    "fechaNacimiento": "2020-05-20"
  }'
```

### 4. Obtener todas las mascotas:

```bash
curl -X GET http://localhost:3000/api/pets \
  -H "Authorization: Bearer TOKEN"
```

### 5. Crear un registro médico (reemplaza PET_ID):

```bash
curl -X POST http://localhost:3000/api/medical-records \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{
    "petId": "PET_ID",
    "fecha": "2026-02-02",
    "tipo": "Vacunación",
    "descripcion": "Primera dosis de vacuna anti-rabia",
    "veterinario": "Dr. García"
  }'
```

### 6. Obtener registros de una mascota:

```bash
curl -X GET http://localhost:3000/api/medical-records/pet/PET_ID \
  -H "Authorization: Bearer TOKEN"
```
