# Seeker.img 🔍

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple?logo=bootstrap)
![Axios](https://img.shields.io/badge/Axios-HTTP%20Client-blue)
![API](https://img.shields.io/badge/API-Pixabay-green)
![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify)

**Seeker.img** es una aplicación web que permite buscar imágenes de forma rápida e intuitiva para inspiración, diseño o desarrollo de proyectos.  
La aplicación consume la **API de Pixabay** para obtener resultados en tiempo real y mostrar imágenes relevantes según el término de búsqueda ingresado por el usuario.

Está diseñada con un enfoque en **simplicidad, rendimiento y experiencia de usuario**, permitiendo explorar contenido visual de forma fluida.

---

## 🌐 Demo

Puedes ver el proyecto en vivo aquí:

🔗 https://seeker-img.netlify.app/

---

## ✨ Features

- 🔎 Búsqueda de imágenes en tiempo real  
- 🌍 Consumo de API externa (Pixabay)  
- ⚡ Interfaz rápida y responsiva  
- 📱 Diseño adaptable para distintos dispositivos  
- 🧠 Manejo de estado con React Hooks  
- 🔄 Renderizado dinámico de resultados  

---

## 🛠 Tecnologías utilizadas

- React JS  
- JavaScript (ES6+)  
- HTML5  
- CSS3  
- Bootstrap  
- Axios  
- Pixabay API  

---

## ⚙️ Cómo funciona

1. El usuario ingresa una palabra clave en la barra de búsqueda.  
2. La aplicación envía una solicitud HTTP a la **API de Pixabay** utilizando **Axios**.  
3. La API devuelve un conjunto de imágenes relacionadas con el término ingresado.  
4. Los resultados se renderizan dinámicamente en la interfaz mediante **React Hooks**.  

Este enfoque permite crear una experiencia rápida y eficiente para explorar imágenes.

---

## 📂 Instalación local

Si quieres ejecutar el proyecto localmente:

```bash
git clone https://github.com/CamiSerantoni/seeker.git
cd seeker
npm install
npm start
```

La aplicación se ejecutará en:

```bash
http://localhost:3000
```

---

## 🏗 Arquitectura del proyecto

La aplicación sigue una estructura basada en **componentes reutilizables de React**, donde cada parte de la interfaz está separada en componentes independientes para mejorar la mantenibilidad y escalabilidad.

### Principales aspectos de la arquitectura

- Uso de **React Hooks** para manejo de estado y ciclo de vida.
- Separación clara entre **lógica de datos y presentación**.
- Consumo de API mediante **Axios**.
- Renderizado dinámico de resultados basado en la respuesta de la API.
- Componentes reutilizables para mejorar la **modularidad del proyecto**.

---

## 📚 Lessons Learned

Durante el desarrollo de este proyecto se fortalecieron habilidades clave en desarrollo frontend:

- Integración de **APIs externas** dentro de aplicaciones React.
- Manejo de **estado y efectos secundarios** utilizando React Hooks.
- Construcción de **interfaces responsivas** con Bootstrap.
- Manejo de **peticiones HTTP asincrónicas** con Axios.
- Organización de componentes para mejorar la **escalabilidad del código**.

---

## 🚀 Posibles mejoras futuras

- Implementar **paginación o infinite scroll** para mejorar la navegación entre resultados.
- Agregar **filtros avanzados de búsqueda** (tipo de imagen, orientación, colores, categorías).
- Permitir **guardar imágenes favoritas** usando LocalStorage o una base de datos.
- Implementar **lazy loading** para optimizar la carga de imágenes y mejorar el rendimiento.
- Mejorar el **manejo de errores y estados de carga** para una experiencia de usuario más clara.
- Añadir **modo oscuro (dark mode)** para mejorar la accesibilidad visual.
- Incorporar **mejoras de accesibilidad (a11y)** para usuarios con tecnologías asistivas.

## ⭐ Otros proyectos destacados

Aquí puedes ver otros proyectos de mi portfolio:

- 🔗 **Dashboard Next.js**  
  https://github.com/CamiSerantoni/dashboardNext

- 🔗 **Weather App**  
  https://github.com/CamiSerantoni/weather-app

- 🔗 **Amiibos Store**  
  https://github.com/CamiSerantoni/amiibos-store

## 👩‍💻 Autora

**Camila Serantoni Rojas**  
Frontend Developer

🔗 GitHub: https://github.com/CamiSerantoni
