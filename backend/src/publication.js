import { PrismaClient } from "@prisma/client";
import express from "express";

export const publicationRouteur = express.Router();
const prisma = new PrismaClient();

publicationRouteur.get("/publications", async (req, res) => {
  let publications = await prisma.publication.findMany({
    include: { user: true },
  });
  res.send(publications);
});

publicationRouteur.post("/publications", async (req, res) => {
  let { title, content, imageUrl, userId } = req.body;
  let publications = await prisma.publication.create({
    data: { content, title, imageUrl, userId },
  });
  res.send(publications);
});

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
