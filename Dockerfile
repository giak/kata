# Stage de build
FROM node:lts-alpine as build-stage

# Installation de pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copie des fichiers de dépendances
COPY package.json pnpm-lock.yaml ./

# Installation des dépendances
RUN pnpm install

# Copie du reste des fichiers du projet
COPY . .

# Build de l'application
RUN pnpm build

# Stage de production
FROM nginx:stable-alpine as production-stage

# Copie des fichiers de build dans nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Configuration pour le routage SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 