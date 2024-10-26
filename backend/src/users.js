import { PrismaClient } from "@prisma/client";
import express from "express";

export const userRouteur = express.Router();
const prisma = new PrismaClient();

userRouteur.get("/users", async (req, res) => {
  let users = await prisma.user.findMany();
  res.send(users);
});

userRouteur.post("/users", async (req, res) => {
  console.log(req.body);
  //    let name = req.body.name
  //    let email = req.body.email
  let { name, email } = req.body;
  let user = await prisma.user.create({ data: { name, email } });
  res.send(user);
});

userRouteur.put("/users/:id", async (req, res) => {
  let id = Number(req.params.id);
  let { name, email } = req.body;
  let user = await prisma.user.update({ where: { id }, data: { name, email } });
  res.send(user);
});

userRouteur.delete("/users/:id", async (req, res) => {
  console.log(req.params);
  let id = Number(req.params.id);
  let user = await prisma.user.delete({ where: { id } });
  res.send(user);
});
