const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081" // Cors ho an'ny côté front
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "touristique-session",
    secret: "$2y$10$tKovGS01FuBG7g./52jWwudJz/Guj5TCuu7BkD1Mgvh6QUJt/Uf86",
  })
);

const db = require("./models");
const dbConfig = require("./config/db.config");



// Ao am db.config.js no manova anle url de connexion
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connecter avec succès");
  })
  .catch(err => {
    console.error("Erreur de connexion", err);
    process.exit();
  });



//route de base
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue API" });
});

//Route API
require('./routes/auth.routes')(app);
require('./routes/utilisateur.routes')(app);
require('./routes/region.routes')(app);
require('./routes/attractions.routes')(app);
require('./routes/detailsAttractions.routes')(app);
// Demarrage serveur
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Vous etes connectee au port ${PORT}.`);
});