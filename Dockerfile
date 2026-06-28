# Usar la imagen oficial de NGINX en su versión Alpine (ultraligera)
FROM nginx:alpine

# Copiar todos los archivos estáticos a la carpeta pública de NGINX
COPY . /usr/share/nginx/html

# Exponer el puerto por defecto de NGINX
EXPOSE 80

# NGINX arranca automáticamente por defecto, no necesitas CMD