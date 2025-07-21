// importation du package depuis Node Module // 
const mongoose = require ('mongoose');
// Connexion à la base de donnée // 
mongoose.connect('mongodb+srv://slim:qwe@cluster0.fjhczur.mongodb.net/twitter?retryWrites=true&w=majority&appName=Cluster0')
        .then( () => console.log('connexion bd OK '))
        .catch( err => console.log(err)); 