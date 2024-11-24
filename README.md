# Frontend Admin Panel

Este proyecto utiliza un template basado en el repositorio [admin-one-vue-tailwind](https://github.com/justboil/admin-one-vue-tailwind).

El frontend está construido con las siguientes tecnologías:

- **Vue.js 3**
- **Vite**
- **TypeScript**
- **Tailwind CSS 3** (como framework CSS)
- **Composition API** para la lógica y reactividad de componentes
- **Pinia** como manejador de estados

---

## 🚀 Requisitos

Asegúrate de contar con las siguientes herramientas instaladas en tu sistema:

- **Node.js**: v21.6.1 (o superior)
- **NPM**: v9.x o superior (incluido con Node.js)

---

## 🛠️ Instalación

### 1. Clonar el repositorio

Puedes clonar este repositorio utilizando **SSH** o **HTTPS**:

#### Clonar con SSH

```bash
git clone git@github.com:Kev-4mentores/ig2000-admin-front.git

```

#### Clonar con HTTPS

```bash
git clone https://github.com/Kev-4mentores/ig2000-admin-front.git

```
Accede al directorio del proyecto:

```bash
cp .env.example .env

```
Edita el archivo .env para configurar la URL base de tu API. Por defecto, el contenido del archivo es:

```env
VITE_API_BASE_URL=http://localhost/
```

#### Instalar dependencias

```bash
npm install
```
#### 🖥️ Comandos para desarrollo y despliegue

Hot-reloads para desarrollo

```bash
npm run dev
```

#### Generar una versión optimizada para producción

Hot-reloads para desarrollo

```bash
npm run build
```

## 📂 Estructura Modular de la Aplicación

Nuestra aplicación está diseñada de forma modular, lo que facilita la organización y el mantenimiento del código. Cada módulo se encuentra dentro de la carpeta `Modules` y cuenta con las siguientes subcarpetas:

### 📁 Subcarpetas de cada módulo

- **component:**  
  Contiene los componentes de Vue.js específicos de cada módulo.

- **composable:**  
  Aquí se definen las funciones componibles que realizan llamadas a las APIs y se utilizan en los componentes.  
  - La raíz de la URL se configura en el archivo `.env`.  
  - Esta configuración se usa en el archivo `axiosInstance.ts`.

- **router:**  
  Define las rutas de navegación para cada módulo.

- **store:**  
  Utiliza **Pinia** para gestionar el estado de la aplicación en cada módulo.

- **views:**  
  Contiene las vistas de cada módulo, que se renderizan en función de las rutas definidas en `router`.

---

## 🌐 Configuración de la URL de la API

La raíz de la URL de la API se configura en el archivo `.env`.  

En el archivo `axiosInstance.ts`, esta configuración se utiliza para realizar llamadas a la API desde los composables, asegurando una fácil integración con el backend.

