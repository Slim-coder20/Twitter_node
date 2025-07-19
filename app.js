// === IMPORTS DES MODULES ===
// Import du framework Express pour créer l'application web
const express = require("express");
// Import de Morgan, un middleware de logging pour les requêtes HTTP
const morgan = require("morgan");
// Import du module Path de Node.js pour gérer les chemins de fichiers
const path = require("path");

// === INITIALISATION DE L'APPLICATION ===
// Création de l'instance Express qui représente notre application web
const app = express();
// Définition du port d'écoute : utilise la variable d'environnement PORT ou 3000 par défaut
const port = process.env.PORT || 3000;
// Import des routes définies dans le dossier routes (index.js par défaut)
const index = require("./routes");

// === CONFIGURATION DE L'APPLICATION ===
// Configuration du moteur de template : indique où se trouvent les vues (templates)
app.set("views", path.join(__dirname, "views"));
// Définit Pug comme moteur de template pour générer du HTML dynamique
app.set("view engine", "pug");

// === MIDDLEWARES ===
// Morgan : middleware de logging qui affiche les détails des requêtes HTTP dans la console
app.use(morgan("short"));
// Middleware pour servir les fichiers statiques (CSS, JS, images) depuis le dossier 'public'
app.use(express.static(path.join(__dirname, "public")));
// Middleware pour parser les données JSON dans le body des requêtes POST/PUT
app.use(express.json());
// Middleware pour parser les données de formulaires HTML (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));
// Utilisation des routes définies dans le fichier routes/index.js
app.use(index);

// === DÉMARRAGE DU SERVEUR ===
// Lance le serveur sur le port défini et écoute les connexions entrantes
app.listen(port);
