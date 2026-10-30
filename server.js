const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send(`
    <div style="text-align: center; font-family: Arial, sans-serif; margin-top: 50px;">
      <h1 style="color: #232F3E;">DataVision Analytics - AWS CodeDeploy</h1>
      <p style="font-size: 18px; color: #4682B4;">¡Despliegue Automatizado Exitoso en EC2!</p>
      <p style="color: #888;">Operación 04 completada correctamente.</p>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor DataVision ejecutándose en el puerto ${PORT}`);
});