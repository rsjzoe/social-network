import { PrismaClient } from "@prisma/client";
import express from "express";
import path from "path";
import { userRouteur } from "./src/users.js";
import { publicationRouteur } from "./src/publication.js";

const app = express();
const prisma = new PrismaClient();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
