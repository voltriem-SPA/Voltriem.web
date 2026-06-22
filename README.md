# VOLTRIEM SpA — Sitio web Astro

Sitio web profesional para **VOLTRIEM SpA**, empresa chilena de servicios eléctricos certificados en Concepción y Gran Concepción.

## Tecnologías

- Astro
- Tailwind CSS
- DaisyUI
- Astro Icon
- SEO local con metadatos, Open Graph y JSON-LD
- Workflow de despliegue para GitHub Pages

## Requisitos

- Node.js 22.12 o superior
- npm

## Ejecutar localmente

```bash
npm install
npm run dev
```

El sitio quedará disponible normalmente en:

```bash
http://localhost:4321
```

## Revisar build antes de subir

```bash
npm run build
npm run preview
```

El comando `npm run build` debe finalizar sin errores y generar la carpeta `dist/`.

## Subir a GitHub

1. Crea un repositorio nuevo en GitHub.
2. Sube todos los archivos de este proyecto al repositorio.
3. Si trabajas localmente, ejecuta:

```bash
npm install
npm run build
```

4. Haz commit y push a la rama `main`.
5. En GitHub, entra a **Settings → Pages**.
6. En **Build and deployment**, selecciona **GitHub Actions**.
7. El workflow `.github/workflows/deploy.yml` compilará el sitio y publicará la carpeta `dist` automáticamente.

## Publicación en GitHub Pages

### Escenario 1: dominio principal o user page

Ejemplos:

- `https://usuario.github.io`
- `https://voltriem.cl`

En `astro.config.mjs`, deja la configuración así:

```js
site: 'https://usuario.github.io',
// base: '/voltriem',
```

Cambia `site` por la URL real cuando esté definida.

### Escenario 2: project page

Ejemplo:

```bash
https://usuario.github.io/voltriem
```

En `astro.config.mjs`, ajusta:

```js
site: 'https://usuario.github.io',
base: '/voltriem',
```

Luego ejecuta nuevamente:

```bash
npm run build
```

El sitio usa rutas preparadas con `import.meta.env.BASE_URL` mediante `src/utils/paths.ts`, por lo que los enlaces principales, imágenes y assets funcionan tanto en raíz como en subdirectorio.

## Archivos importantes

- `src/pages/index.astro`: landing page principal.
- `src/consts.ts`: datos globales, SEO, navegación y contacto.
- `src/styles/global.css`: colores de marca y estilos globales.
- `public/logos/`: logos oficiales de VOLTRIEM SpA.
- `src/content/service/`: páginas internas de servicios.
- `src/content/consejos/`: consejos eléctricos.
- `.github/workflows/deploy.yml`: despliegue automático a GitHub Pages.

## Modificar datos de contacto

Edita `src/consts.ts`:

```ts
export const CONTACT = {
  phonePrimary: '+56 9 6769 6216',
  phoneSecondary: '+56 9 6479 9389',
  whatsapp: 'https://wa.me/56967696216',
  email: 'voltriem.spa@gmail.com',
};
```

## Reemplazar fotos reales

La galería de trabajos usa placeholders ubicados en:

```bash
public/img/placeholders/
```

Puedes reemplazarlos por fotografías reales manteniendo los nombres o modificando el arreglo `gallery` dentro de `src/pages/index.astro`.

## Formulario de contacto

GitHub Pages no ejecuta backend. Por eso, el formulario de contacto abre WhatsApp con un mensaje prellenado.

Para conectar un backend en el futuro, reemplaza el script del formulario en `src/pages/index.astro` por una integración con Formspree, Netlify Forms, una API propia o un servicio equivalente.

## Comandos disponibles

```bash
npm run dev      # servidor local
npm run build    # compilar sitio estático
npm run preview  # previsualizar build
```

## Identidad

- Nombre: VOLTRIEM SpA
- Eslogan: “Energía que se siente, servicio que perdura”
- Ubicación base: Concepción, Chile
- Cobertura: Gran Concepción y comunas cercanas según disponibilidad
