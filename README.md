# Reproductor de Música 🎵

Este es un proyecto de **Reproductor de Música** construido con [SvelteKit](https://kit.svelte.dev/). La aplicación permite a los usuarios reproducir música, gestionar listas de reproducción y disfrutar de una experiencia interactiva y moderna.

## Características ✨

- 🎶 Reproducción de pistas de audio.
- 📂 Gestión de listas de reproducción.
- ⏯️ Controles de reproducción (play, pausa, siguiente, anterior).
- 🔄 Función de autoplay.
- ⏱️ Barra de progreso interactiva.
- 🔒 Autenticación de usuarios.
- 🌐 Diseño responsivo y estilizado con [Tailwind CSS](https://tailwindcss.com/) y [DaisyUI](https://daisyui.com/).

---

## Requisitos 📋

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 16 o superior).
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/).

---

## Instalación 🚀

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/reproductor.git
   cd reproductor
   ```

2. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias (por ejemplo, claves de autenticación o URLs de APIs).

---

## Uso 🛠️

1. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   # o
   yarn dev
   ```

2. Abre tu navegador y ve a [http://localhost:5173](http://localhost:5173).

---

## Scripts Disponibles 📜

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run preview`: Previsualiza la aplicación construida.
- `npm run lint`: Ejecuta el linter para verificar errores en el código.

---

## Estructura del Proyecto 📂

```plaintext
src/
├── lib/                # Componentes reutilizables
│   ├── components/     # Componentes principales (NavBar, MusicPlayer, etc.)
│   ├── styles/         # Estilos globales
│   └── utils/          # Funciones y utilidades
├── routes/             # Rutas de la aplicación
│   ├── +layout.svelte  # Layout principal
│   ├── +page.svelte    # Página principal
│   └── login/          # Página de inicio de sesión
├── app.css             # Estilos globales
└── app.html            # Archivo HTML principal
```

---

## Tecnologías Utilizadas 🛠️

- **[SvelteKit](https://kit.svelte.dev/):** Framework para construir aplicaciones web modernas.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework de utilidades CSS para un diseño rápido y responsivo.
- **[DaisyUI](https://daisyui.com/):** Componentes estilizados para Tailwind CSS.
- **[Vite](https://vitejs.dev/):** Herramienta de construcción rápida para proyectos web.

---

## Contribuciones 🤝

¡Las contribuciones son bienvenidas! Si deseas contribuir:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Envía un pull request.

---

## Licencia 📄

Este proyecto está bajo la licencia [MIT](LICENSE).

---

## Autor 👨‍💻

Desarrollado por [Javier Varela](https://github.com/JavierVarela2000). Si tienes preguntas o sugerencias, no dudes en contactarme.

---

¡Gracias por usar este reproductor de música! 🎧
