# 🗓️ Timeloop App

Una aplicación para gestionar los horarios semanales de los trabajadores de forma visual y eficiente. El objetivo es dejar atrás las hojas de Excel y permitir una planificación más clara, rápida y centralizada.

## 🚀 ¿Qué hace esta app?

- Muestra la semana (lunes a domingo) en una vista de calendario.
- Lista todos los trabajadores con su contador de horas semanales configurables.
- Permite arrastrar trabajadores a los días para asignarles turnos.
- Calcula automáticamente las horas restantes por trabajador.
- Soporta jornadas partidas (puedes asignar más de una vez al mismo día).
- Las semanas pueden guardarse y programarse por adelantado.
- Soporte multiidioma (desactivado temporalmente).
- Diseño adaptado a escritorio por ahora.

## 🧱 Tech stack

- Next.js 14 App Router (TypeScript)
- TailwindCSS
- Drag & Drop nativo
- `next-intl` (desactivado de momento)

## 🛠️ Estado actual

- [x] Estructura inicial del proyecto
- [x] Diseño base de la vista semanal y trabajadores
- [x] Drag & Drop funcional
- [ ] Cálculo de horas restantes por trabajador
- [ ] Guardado por semana (temporalmente en JSON)
- [ ] Backend para persistencia
- [ ] Warnings y validaciones
- [ ] Modo responsive

## 🧑‍💻 Instalación local

```bash
npm install
npm dev
```

## ✨ Próximos pasos

- Mejora visual del calendario

- Soporte de edición por día y hora

- Exportación / impresión

- Roles de usuario

- Panel de administrador

