import { PrismaClient } from "@prisma/client";
import express from "express";
import { userRouteur } from "./src/users.js";
import { publicationRouteur } from "./src/publication.js";
import cors from "cors";
import session from "express-session";
import { authRouteur } from "./src/auth.js";

const app = express();
const prisma = new PrismaClient();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(
  session({
    secret: process.env.SECRET_KEY || "examplekey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // Expiration de 1 jour, 
    },
  })
);

app.get("/", (req, res) => {
  // maka donnees anaty base de donnees
  // ...
  // manome response : soit page html, soit json
  //   let tab = [
  //     { name: "koto", age: 10 },
  //     { name: "fh", age: 1 },
  //   ];
  //   res.send(tab);

  res.render("index", { message: "Hello depuis le serveur avec EJS!" });
  //   res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(userRouteur);
app.use(publicationRouteur);
app.use(authRouteur);

// app.get("/chat", (req, res) => {
//   let tab = [
//     { name: "koto", age: 10 },
//     { name: "ok", age: 1 },
//   ];
//   res.send(tab);
// });

app.listen(3000, () => {
  console.log("Serveur Express démarré sur http://localhost:3000");
});
