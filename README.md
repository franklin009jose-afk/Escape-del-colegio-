# Escape del Colegio (PWA)

Juego educativo en HTML, CSS y JavaScript puro convertido en **Progressive Web App (PWA)**.

Se puede instalar en el celular o computadora, funciona sin internet y recibe actualizaciones fácilmente.

## Archivos
- `index.html` — estructura principal
- `estilos.css` — estilos
- `juego.js` — lógica del juego y preguntas
- `manifest.json` — permite instalar la app
- `service-worker.js` — permite modo offline y actualizaciones
- `icons/` — iconos de la aplicación

## Cómo usarla localmente
1. Abre la carpeta en Visual Studio Code.
2. Usa la extensión **Live Server** o abre `index.html` directamente.
3. Para probar la PWA completa (instalación + offline) es mejor subirla a un servidor HTTPS (Netlify, Vercel o GitHub Pages).

## Cómo publicarla y que dure años

### Opción recomendada: Netlify o Vercel (gratis)
1. Crea una cuenta en [netlify.com](https://netlify.com) o [vercel.com](https://vercel.com).
2. Arrastra esta carpeta completa al sitio (o conecta un repositorio de GitHub).
3. La app quedará online con HTTPS automáticamente.
4. Los usuarios podrán instalarla desde el navegador (“Agregar a pantalla de inicio”).

### GitHub Pages
1. Sube todos los archivos a un repositorio de GitHub (en la raíz).
2. Ve a Settings → Pages → Deploy from branch → `main` → `/ (root)`.
3. Espera unos minutos y tendrás la URL.

## Cómo actualizar el juego
1. Haz los cambios en los archivos.
2. Abre `service-worker.js` y cambia el nombre de la caché:
   ```js
   const CACHE_NAME = "escape-colegio-v2";  // aumenta el número
   ```
3. Sube los archivos de nuevo a Netlify/Vercel/GitHub Pages.
4. Los usuarios que ya tengan la app instalada recibirán la actualización automáticamente.

## Controles
- PC: flechas o WASD + Enter para interactuar.
- Móvil: flechas táctiles + botón Interactuar.
- También puedes tocar un salón en el mapa.

## Contenido
20 preguntas por materia × 4 materias × 3 grados = 240 preguntas.  
Se necesitan al menos 3 respuestas correctas de 5 para conseguir cada llave.

---
**Consejo para que dure muchos años:**  
Guarda siempre una copia del código en GitHub. Cada vez que quieras agregar preguntas nuevas o mejorar algo, solo cambias el número de versión del Service Worker y vuelves a publicar.
