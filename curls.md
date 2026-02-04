# 🐾 CURLS - TP Intermedio API

Aquí están todos los curls para probar la API. Copia y pega directamente en tu terminal.

---

## 🔐 AUTENTICACIÓN

### 1️⃣ Registrar usuario

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "DrHouse",
    "email": "house@vet.com",
    "password": "Password123!"
  }'
```

### 2️⃣ Login (obtener TOKEN)

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "house@vet.com",
    "password": "Password123!"
  }'
```

**💾 COPIA EL TOKEN DE LA RESPUESTA Y ÚSALO EN LOS SIGUIENTES CURLS**

---

## 🐶 MASCOTAS

### 3️⃣ Ver todas las mascotas

```bash
curl -X GET http://localhost:3000/api/pets \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODI1YjhhZjVmM2Y2YzU2NjAzZTJkOCIsInVzZXJuYW1lIjoiRHJIb3VzZSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzcwMTUxMDcxLCJleHAiOjE3NzAyMzc0NzEsImlzcyI6ImN1cnNvLXV0bi1iYWNrZW5kIn0.ZwQFUmBLFjyNHIG1Sf53iqdDHIvpyjAdEmKnAFiIrJQ"
```

### 4️⃣ Ver mascota por ID

```bash
curl -X GET http://localhost:3000/api/pets/697fa43fff8c57bb70055716 \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODI1YjhhZjVmM2Y2YzU2NjAzZTJkOCIsInVzZXJuYW1lIjoiRHJIb3VzZSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzcwMTUxMDcxLCJleHAiOjE3NzAyMzc0NzEsImlzcyI6ImN1cnNvLXV0bi1iYWNrZW5kIn0.ZwQFUmBLFjyNHIG1Sf53iqdDHIvpyjAdEmKnAFiIrJQ"
```

### 5️⃣ Crear mascota

```bash
curl -X POST http://localhost:3000/api/pets \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODI1YjhhZjVmM2Y2YzU2NjAzZTJkOCIsInVzZXJuYW1lIjoiRHJIb3VzZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3MDE1MTAwMCwiZXhwIjoxNzcwMjM3NDAwLCJpc3MiOiJjdXJzby11dG4tYmFja2VuZCJ9.ZwQFUmBLFjyNHIG1Sf53iqdDHIvpyjAdEmKnAFiIrJQ" \
  -d '{
    "nombre": "Firulais",
    "especie": "Perro",
    "raza": "Mestizo",
    "fechaNacimiento": "2020-05-20"
  }'
```

### 6️⃣ Actualizar mascota

```bash
curl -X PUT http://localhost:3000/api/pets/697fa43fff8c57bb70055716 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODI1YjhhZjVmM2Y2YzU2NjAzZTJkOCIsInVzZXJuYW1lIjoiRHJIb3VzZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3MDE1MTAwMCwiZXhwIjoxNzcwMjM3NDAwLCJpc3MiOiJjdXJzby11dG4tYmFja2VuZCJ9.ZwQFUmBLFjyNHIG1Sf53iqdDHIvpyjAdEmKnAFiIrJQ" \
  -d '{
    "nombre": "Max",
    "especie": "Perro",
    "raza": "Labrador",
    "fechaNacimiento": "2020-05-20"
  }'
```

### 7️⃣ Eliminar mascota (requiere ADMIN)

```bash
curl -X DELETE http://localhost:3000/api/pets/697fa43fff8c57bb70055716 \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODI1YjhhZjVmM2Y2YzU2NjAzZTJkOCIsInVzZXJuYW1lIjoiRHJIb3VzZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3MDE1MTAwMCwiZXhwIjoxNzcwMjM3NDAwLCJpc3MiOiJjdXJzby11dG4tYmFja2VuZCJ9.ZwQFUmBLFjyNHIG1Sf53iqdDHIvpyjAdEmKnAFiIrJQ"
```

---

## 📋 REGISTROS MÉDICOS

### 8️⃣ Ver registros de una mascota

```bash
curl -X GET http://localhost:3000/api/medical-records/pet/697fa43fff8c57bb70055716 \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODI1YjhhZjVmM2Y2YzU2NjAzZTJkOCIsInVzZXJuYW1lIjoiRHJIb3VzZSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzcwMTUxMDcxLCJleHAiOjE3NzAyMzc0NzEsImlzcyI6ImN1cnNvLXV0bi1iYWNrZW5kIn0.ZwQFUmBLFjyNHIG1Sf53iqdDHIvpyjAdEmKnAFiIrJQ"
```

### 9️⃣ Ver registro médico por ID

```bash
curl -X GET http://localhost:3000/api/medical-records/697fa43fff8c57bb70055717 \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODI1YjhhZjVmM2Y2YzU2NjAzZTJkOCIsInVzZXJuYW1lIjoiRHJIb3VzZSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzcwMTUxMDcxLCJleHAiOjE3NzAyMzc0NzEsImlzcyI6ImN1cnNvLXV0bi1iYWNrZW5kIn0.ZwQFUmBLFjyNHIG1Sf53iqdDHIvpyjAdEmKnAFiIrJQ"
```

### 🔟 Crear registro médico (requiere ADMIN)

```bash
curl -X POST http://localhost:3000/api/medical-records \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODI1YjhhZjVmM2Y2YzU2NjAzZTJkOCIsInVzZXJuYW1lIjoiRHJIb3VzZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3MDE1MTAwMCwiZXhwIjoxNzcwMjM3NDAwLCJpc3MiOiJjdXJzby11dG4tYmFja2VuZCJ9.ZwQFUmBLFjyNHIG1Sf53iqdDHIvpyjAdEmKnAFiIrJQ" \
  -d '{
    "petId": "697fa43fff8c57bb70055716",
    "fecha": "2026-02-03",
    "tipo": "Vacunación",
    "descripcion": "Vacuna anti-rabia anual",
    "veterinario": "Dr. García"
  }'
```

### 1️⃣1️⃣ Actualizar registro médico (requiere ADMIN)

```bash
curl -X PUT http://localhost:3000/api/medical-records/AQUI_VA_EL_ID_DEL_REGISTRO \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer AQUI_VA_TU_TOKEN" \
  -d '{
    "petId": "AQUI_VA_EL_ID_DE_LA_MASCOTA",
    "fecha": "2026-02-04",
    "tipo": "Chequeo General",
    "descripcion": "Chequeo de rutina completo",
    "veterinario": "Dra. López"
  }'
```

### 1️⃣2️⃣ Eliminar registro médico (requiere ADMIN)

```bash
curl -X DELETE http://localhost:3000/api/medical-records/697fa43fff8c57bb70055717 \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODI1YjhhZjVmM2Y2YzU2NjAzZTJkOCIsInVzZXJuYW1lIjoiRHJIb3VzZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3MDE1MTAwMCwiZXhwIjoxNzcwMjM3NDAwLCJpc3MiOiJjdXJzby11dG4tYmFja2VuZCJ9.ZwQFUmBLFjyNHIG1Sf53iqdDHIvpyjAdEmKnAFiIrJQ"
```

---

## 📝 REEMPLAZOS NECESARIOS

Antes de ejecutar los curls, reemplaza en los comandos:

| Código                     | Reemplazar por             |
| -------------------------- | -------------------------- |
| `eyJhbGciOi...`            | Tu TOKEN (obtén de login)  |
| `697fa43fff8c57bb70055716` | ID real de mascota         |
| `697fa43fff8c57bb70055717` | ID real de registro médico |

---

## ⚡ COMANDOS RÁPIDOS

**Copiar y ejecutar directamente:**

```bash
# Login
TOKEN=$(curl -s -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"house@vet.com","password":"Password123!"}' | grep -o '"token":"[^"]*' | cut -d'"' -f4)

echo "Token guardado: $TOKEN"

# Ver mascotas
curl -X GET http://localhost:3000/api/pets \
  -H "Authorization: Bearer $TOKEN"
```

---

## ✅ CHECKLIST

- [ ] Registré usuario
- [ ] Hice login (copié el token)
- [ ] Obtuve todas las mascotas
- [ ] Creé una mascota (con token de admin)
- [ ] Actualizé mascota
- [ ] Creé registro médico
- [ ] Probé eliminar (borró correctamente)

---

**Última actualización:** 3 de febrero, 2026
