// === IMPORT DE MONGOOSE ===
// Mongoose est une bibliothèque qui facilite l'interaction avec MongoDB
// Elle permet de définir des schémas, valider les données et faire des requêtes
const mongoose = require("mongoose");

// === CRÉATION DU CONSTRUCTEUR DE SCHÉMA ===
// Schema est le constructeur qui permet de définir la structure des documents
const schema = mongoose.Schema;

// === DÉFINITION DU SCHÉMA TWEET ===
// Le schéma définit la structure et les règles de validation pour les tweets
const tweetSchema = schema({
  // Champ 'content' : contenu du tweet
  content: {
    type: String, // Type de données : chaîne de caractères
    maxlength: [140, "Tweet trop long"], // Longueur maximale : 140 caractères (comme Twitter classique)
    minlength: [1, "Tweet trop court"], // Longueur minimale : au moins 1 caractère
    required: [true, "Champ requis"], // Champ obligatoire : un tweet ne peut pas être vide
  },
});

// === CRÉATION DU MODÈLE ===
// Le modèle est une classe basée sur le schéma qui permet de créer et manipuler les documents
// 'tweet' sera le nom de la collection dans MongoDB (MongoDB ajoutera un 's' : 'tweets')
const tweet = mongoose.model("tweet", tweetSchema);

// === EXPORT DU MODÈLE ===
// Export du modèle pour pouvoir l'utiliser dans d'autres fichiers de l'application
module.exports = tweet;
