import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import express from "express";

export const authRouteur = express.Router();
const prisma = new PrismaClient();

authRouteur.post("/inscription", async (req, res) => {
  const { email, password, name } = req.body;

  // Vérifier si l'email est déjà utilisé
  const userExists = await prisma.user.findUnique({ where: { email: email } });
  if (userExists) {
    return res.status(400).json({ message: "Email déjà utilisé" });
  }

  // Hasher le mot de passe
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { email, name, password: hashedPassword },
  });
  const { password: p, ...rest } = user;
  //   res.send(rest)
  res.send({ id: user.id, name: user.name, email: user.email });
});

// Route de connexion
authRouteur.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email: email } });
  if (!user) {
    return res.status(400).json({ message: "Utilisateur non trouvé" });
  }

  // Vérifier le mot de passe
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: "Mot de passe incorrect" });
  }
  
  // Créer la session
  req.session.user = { id: user.id, email: user.email, name: user.name };
  res.json({ message: "Connexion réussie", user: req.session.user });
});

// Route pour récupérer l'utilisateur actuel
authRouteur.get("/me", (req, res) => {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.status(401).json({ message: "Non connecté" });
  }
});

// Route de déconnexion
authRouteur.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err)
      return res.status(500).json({ message: "Erreur lors de la déconnexion" });
    res.clearCookie("connect.sid");
    res.json({ message: "Déconnexion réussie" });
  });
});
