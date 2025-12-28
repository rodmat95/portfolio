# Documentación Técnica y Despliegue

Este documento contiene los detalles técnicos del proyecto y las instrucciones para su configuración y despliegue.

> **Nota**: Si buscas información general sobre el autor o el propósito del portafolio, consulta el archivo [README.md](./README.md).

## Stack Tecnológico

El portafolio está construido utilizando un stack moderno y eficiente:

- **Core**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI**: [shadcn/ui](https://ui.shadcn.com/) (basado en Radix UI)
- **Base de Datos & Auth**: [Supabase](https://supabase.com/) (PostgreSQL, Authentication, Storage)
- **Email**: [Resend](https://resend.com/)

## Estructura del Proyecto

- `/app`: Rutas de la aplicación (App Router).
  - `/admin`: Panel de administración protegido (Server Components + Client Views).
  - `/(auth)`: Rutas de autenticación (Login, Reset Password).
- `/components`: Componentes reutilizables.
- `/lib` & `/utils`: Utilidades y configuración de clientes (Supabase).
- `/i18n`: Archivos de traducción (JSON).

## Configuración Local

Para ejecutar el proyecto en tu máquina local:

1.  **Prerrequisitos**: Asegúrate de tener Node.js y pnpm instalados.

2.  **Instalar dependencias**:
    ```bash
    pnpm install
    ```

3.  **Variables de Entorno**:
    Crea un archivo `.env.local` en la raíz con las siguientes credenciales:
    ```properties
    NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=tu-anon-key
    RESEND_API_KEY=re_123456789
    ```

4.  **Servidor de Desarrollo**:
    ```bash
    pnpm dev
    ```
    El sitio estará disponible en `http://localhost:3000`.

## Despliegue (Deployment)

El proyecto está configurado para desplegarse fácilmente en **Vercel**:

1.  Sube tu código a un repositorio de GitHub.
2.  Importa el proyecto en Vercel.
3.  Configura las **Environment Variables** (las mismas que en `.env.local`).
4.  Despliega. Vercel detectará automáticamente la configuración de Next.js.

### Notas de Seguridad
- El panel de administración (`/admin`) está protegido vía Middleware (`proxy.ts`) y Supabase Auth.
- Las imágenes se alojan en un bucket de Supabase Storage llamado `portfolio`.
- La base de datos utiliza RLS (Row Level Security) para proteger los datos.