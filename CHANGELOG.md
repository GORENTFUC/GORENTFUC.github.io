# Changelog

Todas las modificaciones importantes de este proyecto deben documentarse en este archivo.

## [0.5.0] - 2026-09-08

### Added

- Se incorporó internacionalización ES/EN con español como idioma nativo por defecto.
- Se añadió el interruptor de idioma en la barra de navegación superior.
- Se persistió la preferencia de idioma en `localStorage`.

### Changed

- Se separó el contenido traducible del modelo de datos del portafolio.
- Se conectaron las secciones de la UI al sistema de traducciones.

## [0.4.1] - 2026-09-08

### Added

- Se incorporó el favicon de marca JS y se muestra en el pie de página junto al alias.

### Changed

- Se actualizó el favicon público del sitio con la marca JS.

## [0.4.0] - 2026-09-08

### Added

- Se añadieron metadatos Open Graph, Twitter Card y JSON-LD (Person) para el portafolio.
- Se incorporó la imagen de vista previa social `og-image.png`.
- Se agregaron canonical URL, author, theme-color y color-scheme en el HTML.

## [0.3.0] - 2026-09-08

### Added

- Se añadieron estadísticas del hero y un heatmap de contribuciones en el panel de GitHub.
- Se enriquecieron las skills con nivel numérico y descripción.
- Se incorporaron tokens de color para la escala del heatmap y un alias corto en la navegación móvil.

### Changed

- Se actualizó la identidad de marca a `@JSGOR` (perfil, enlaces, título y meta descripción).
- Se rediseñaron Contact, Skills, Hero, Navbar, Projects y Footer con radios más suaves y layout más compacto.
- Se ajustó el ancho máximo de contenido y la escala de border-radius en los design tokens.

### Removed

- Se eliminó el proyecto destacado Scaffold CLI del listado y el marco lateral `shell-frame` del layout.

## [0.2.0] - 2026-09-08

### Added

- Se incorporó el modelo de contenido del portafolio (perfil, proyectos, skills, redes y actividad de GitHub).
- Se añadieron las secciones Navbar, Hero, Projects, Skills, GitHub, Contact y Footer.
- Se compuso la página principal del portafolio con enlace de accesibilidad para saltar al contenido.
- Se agregaron utilidades tipográficas y estilos base alineados a los design tokens.

### Changed

- Se actualizó el HTML con idioma español, título y meta descripción del portafolio.
- Se reemplazó el Header legado por la nueva Navbar basada en tokens.

### Removed

- Se eliminó el componente Header anterior.

## [0.1.0] - 2026-09-07

### Added

- Se incorporó el sistema de design tokens (colores, tipografía, espaciado y elevación).
- Se configuró el tema de Tailwind con variables semánticas (light/dark) y fuente Geist.
- Se añadió una pantalla inicial de verificación del entorno React + Vite + Tailwind.
- Se agregó la regla de Cursor para el agente de versionamiento y releases.

### Fixed

- Se corrigió la integración de estilos con Tailwind CSS v4 (`@import` y `@config`).
