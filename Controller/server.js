const express = require('express');
const app = express();

const jokes = require("../Model/data");

app.get('/jokes/random', (req, res) => {
  const randomJoke = getRandomJoke();
  res.json(randomJoke);
});
app.get('/api/jokes', (req, res) => {
  res.json(jokes);
});
app.get('/api/jokes/:id', (req, res) => {
  const jokeId = parseInt(req.params.id);
  const joke = jokes.find(j => j.id === jokeId);
  if (joke) {
    res.json(joke);
  } else {
    res.status(404).json({ message: 'Blague non trouvée' });
  }
});
function getRandomJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
}
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});