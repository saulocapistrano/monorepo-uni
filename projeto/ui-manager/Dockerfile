# Etapa 1: build do Angular
FROM node:18 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: servidor NGINX para servir os arquivos
FROM nginx:alpine
COPY --from=build /app/dist/ui-manager /usr/share/nginx/html
EXPOSE 80
