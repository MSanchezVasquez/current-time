# Time - World Clock App

Una aplicación web minimalista y elegante para visualizar la hora actual, con soporte para múltiples zonas horarias y temas de color personalizables.

![Project Screenshot](/public/dayjs.png)

## ✨ Características

- **Reloj en Tiempo Real:** Visualización precisa de la hora y fecha actual.
- **Soporte de Zonas Horarias:** Posibilidad de cambiar la zona horaria a través de un modal interactivo.
- **Modo Oscuro / Claro:**
  - Detección automática de la preferencia del sistema.
  - Interruptor manual (toggle) en la interfaz.
  - **Persistencia:** Guarda tu preferencia de tema en el navegador (`localStorage`), así que recordará tu elección la próxima vez que entres.
- **Diseño Responsivo:** Se adapta a dispositivos móviles y escritorio.
- **Tipografía Monospaced:** Uso de _JetBrains Mono_ y _Cascadia Code_ para un look de desarrollador.

## 🛠️ Tecnologías Utilizadas

- **HTML5 & CSS3** (CSS Variables para el manejo de temas).
- **JavaScript (ES6+)** (Módulos nativos).
- **[Day.js](https://day.js.org/):** Librería ligera para manipulación de fechas y horas (plugins UTC y Timezone).
- **[MicroModal](https://micromodal.vercel.app/):** Librería para modales accesibles.
- **FontAwesome:** Iconos de interfaz.

## 🚀 Cómo usarlo localmente

Dado que el proyecto utiliza **ES Modules** (importaciones desde URL), es recomendable ejecutarlo a través de un servidor local para evitar errores de CORS.

1. **Clonar el repositorio:**

   ```bash
   git clone <tu-repositorio-url>
   cd time-app
   ```

2. **Ejecutar con un servidor local:**

   - Si usas VS Code: Instala la extensión **Live Server**, haz clic derecho en `index.html` y selecciona "Open with Live Server".
   - O usando Python:
     ```bash
     python3 -m http.server
     ```

3. **Abrir en el navegador:**
   Visita `http://127.0.0.1:5500` (o el puerto que indique tu servidor).

## 🎨 Personalización

El sistema de temas está construido sobre variables CSS (`:root`), lo que facilita cambiar la paleta de colores editando el archivo `styles.css`:

```css
:root {
  --bg: white;
  --fg: black;
  /* ... */
}
```

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

### ¿Qué he agregado?

1.  **Sección de Características:** Destaqué la persistencia y la detección automática del tema oscuro, que es la funcionalidad clave que acabamos de programar.
2.  **Tecnologías:** Mencioné explícitamente `Day.js` y `MicroModal` para dar crédito a las librerías.
3.  **Instrucciones de uso:** Agregué la nota sobre usar un **Live Server**, ya que al usar `import ... from "https://esm.sh/..."`, si abres el archivo directamente con doble clic (`file://`), el navegador podría bloquearlo por seguridad.
