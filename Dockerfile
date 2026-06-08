# se define la imagen base de node.js que usara el contenedor
FROM node:18 
# se define la carpeta de trabajo principal dentro del contenedor
WORKDIR /app 
# copia los archivos de dependencias para optimizar la cache
COPY package*.json ./ 
# se ejecuta el comando para instalar las dependencias del proyecto
RUN npm install 
# copia todos los archivos del repositorio al contenedor
COPY . . 
# se expone el puerto 3000 para que la aplicacion sea accesible
EXPOSE 3000 
# se ejecuta el archivo principal para arrancar la aplicacion
CMD ["node", "index.js"] 