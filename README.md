# Portfolio

Este es mi portfolio personal. Su objetivo es mostrar un poco de quién soy, tanto en el ámbito profesional como en mis hobbies. Aquí podrás encontrar información sobre mi experiencia como desarrollador, mis habilidades en tecnologías web, y algunos de mis intereses como el roller hockey. Este proyecto también me permite experimentar con tecnologías modernas como Next.js y Docker.

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/)
- [Docker](https://www.docker.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Requisitos Previos

Asegúrate de tener instalado:

- [Docker](https://docs.docker.com/get-docker/)

## Configuración

Este proyecto utiliza Docker para manejar los entornos de desarrollo y producción. No necesitas instalar dependencias manualmente ni configurar el entorno, ya que todo está contenido en las imágenes de Docker.

## Comandos Disponibles

### General

Estos comandos son para gestionar los contenedores Docker:

- **Iniciar el entorno de desarrollo**:
```bash
docker compose -f .docker/compose.yaml up dev
```
Esto ejecutará la aplicación en modo desarrollo en http://localhost:3000.

- **Iniciar el entorno de producción**:
```bash
docker compose -f .docker/compose.yaml up prod
```
Esto ejecutará la aplicación en modo producción en http://localhost:3000.

## Desarrollo Local

- Instalar dependencias:

```bash
docker compose -f .docker/compose.yaml run --rm cli npm install
```

- Revisar errores de linting:

```bash
docker compose -f .docker/compose.yaml run --rm cli npm run lint
```

- Formatear archivos (si integras Prettier en el futuro):

```bash
docker compose -f .docker/compose.yaml run --rm cli npm run format
```

- Análisis del Bundle

Para analizar el tamaño de los archivos y optimizar el rendimiento, ejecuta:

```bash
docker compose -f .docker/compose.yaml run --rm -e ANALYZE=true cli npm run build
```
