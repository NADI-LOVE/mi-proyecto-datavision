#!/bin/bash
# Navegar a la carpeta de la aplicación
cd /home/ubuntu/app

# Instalar Node.js y npm si no están instalados
if ! command -v node &> /dev/null
then
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Instalar dependencias
npm install

# Instalar pm2 para mantener el servidor corriendo en segundo plano
sudo npm install -g pm2

# Reiniciar o iniciar el servicio con PM2
pm2 restart server.js || pm2 start server.js --name "datavision-app"
pm2 save