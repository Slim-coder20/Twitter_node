// === DÉFINITION DES ROUTES ===
// Import et création d'un routeur Express pour organiser les routes de l'application
const router = require("express").Router();

// === ROUTE PRINCIPALE ===
// Route GET pour la page d'accueil (/)
// - req (request) : objet contenant les informations de la requête HTTP
// - res (response) : objet pour envoyer la réponse au client
router.get("/", (req, res) => {
  // Rend le template 'home.pug' et l'envoie au navigateur client
  // Le moteur Pug va convertir le fichier home.pug en HTML
  res.render("tweets/tweet-list");
});

// === EXPORT DU ROUTEUR ===
// Exporte le routeur pour pouvoir l'utiliser dans app.js
// IMPORTANT : bien écrire "exports" (avec un 's') et non "export"
module.exports = router;
