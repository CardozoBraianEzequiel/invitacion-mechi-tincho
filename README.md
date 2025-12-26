# Invitación de Boda - Martín & Mercedes

Web de invitación interactiva (SPA) construida con React, Vite y Tailwind CSS.

## 🚀 Cómo levantar el proyecto localmente

Si querés probar o editar la web en tu computadora:

1.  **Clonar el repositorio** (si no lo tenés):
    ```bash
    git clone https://github.com/CardozoBraianEzequiel/invitacion-mechi-tincho.git
    cd invitacion-mechi-tincho
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    > Esto abrirá la web en `http://localhost:5173` (o similar).

## ⚙️ Configuración y Edición

Toda la información del evento (nombres, fechas, lugares, links) está centralizada en un solo archivo para que sea fácil de editar:

*   📂 **Archivo**: `src/config/siteConfig.ts`
*   Cambiar textos, links de mapas, CBU, alias, etc. desde ahí.
*   Las imágenes se configuran también ahí (logos y fotos de fondo).

## 🌐 Cómo desplegar en Netlify (Gratis)

La forma más rápida de publicar la web es usando Netlify conectado a tu GitHub.

1.  **Ingresar a Netlify**:
    *   Andá a [netlify.com](https://www.netlify.com) y logueate (preferiblemente con tu cuenta de GitHub).

2.  **Crear nuevo sitio**:
    *   En el dashboard, clickeá en **"Add new site"** -> **"Import from an existing project"**.

3.  **Conectar con GitHub**:
    *   Seleccioná **GitHub** como proveedor.
    *   Autorizá a Netlify si te lo pide.
    *   Buscá y seleccioná el repositorio: `invitacion-mechi-tincho`.

4.  **Configurar el Build (Automático)**:
    *   Netlify suele detectar todo solo, pero verificá que diga:
        *   **Build command**: `npm run build`
        *   **Publish directory**: `dist`
    *   Clickeá en **"Deploy site"**.

5.  **¡Listo!**:
    *   Netlify va a construir la página y en unos segundos te dará una URL (ej: `calm-wisp-123456.netlify.app`).
    *   Podés cambiar ese nombre en **Site configuration** > **Change site name**.

### 🔄 Actualizaciones automáticas
Cada vez que hagas un cambio en tu código y hagas un `git push` a GitHub, Netlify va a detectar el cambio y actualizará la web publicada automáticamente en un par de minutos.

## 💻 Opción B: Deploy manual desde consola (Netlify CLI)

Si preferís hacerlo todo desde la terminal sin conectar GitHub:

1.  **Instalar Netlify CLI**:
    ```bash
    npm install netlify-cli -g
    ```

2.  **Loguearse**:
    ```bash
    netlify login
    ```

3.  **Construir el proyecto**:
    ```bash
    npm run build
    ```

4.  **Deployar**:
    ```bash
    netlify deploy --prod --dir=dist
    ```
    *   Te va a preguntar si querés crear un nuevo sitio (poné que sí).
    *   Listo, te devolverá la URL publicada.
