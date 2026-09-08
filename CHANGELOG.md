# Changelog

Todas las modificaciones importantes de este proyecto deben documentarse en este archivo.

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
