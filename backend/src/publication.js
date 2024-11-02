import { PrismaClient } from "@prisma/client";
import express from "express";
import path from "path";
import multer from "multer";

export const publicationRouteur = express.Router();
const prisma = new PrismaClient();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/posts"); // Dossier où les fichiers seront stockés
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Renommer le fichier avec la date pour éviter les conflits
  },
});

const upload = multer({ storage: storage });

publicationRouteur.get("/publications", async (req, res) => {
  let publications = await prisma.publication.findMany({
    include: { user: true },
    orderBy: {createdAt:"asc"}
  });
  res.send(publications);
});

publicationRouteur.post(
  "/publications",
  upload.single("file"),
  async (req, res) => {
    let { title, content, userId } = req.body;
    let filename = req.file.filename;
    let publications = await prisma.publication.create({
      data: { content, title, imageUrl: filename, userId: Number(userId) },
    });
    res.send(publications);
  }
);

publicationRouteur.put("/publications/:id", async (req, res) => {
  let id = Number(req.params.id);
  let { content, title, imageUrl, userId } = req.body;
  let publications = await prisma.publication.update({
    where: { id },
    data: { content, title, imageUrl, userId },
  });
  res.send(publications);
});

publicationRouteur.delete("/publications/:id", async (req, res) => {
  let id = Number(req.params.id);
  let publications = await prisma.publication.delete({ where: { id } });
  res.send(publications);
});
