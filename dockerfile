# Etapa 1: Construcción de la aplicación
FROM node:18-alpine AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración y dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Construye la aplicación Next.js
RUN npm run build

# Etapa 2: Servir la aplicación
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios desde la etapa anterior
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expone el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]