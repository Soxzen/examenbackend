const express = require('express');
const app = express();

const controller = require('./Controller/server.js');

// Utilisez les endpoints de l'API de blagues du fichier index.js
app.use('/api', controller);

// Démarrez le serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
