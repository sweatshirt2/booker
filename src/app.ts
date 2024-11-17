import express from "express";
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DEV_PORT) {
  throw new Error("Missing development port...");
}

const port = process.env.DEV_PORT;

const app = express();

app.get('/', (req, res) => {
  res.end("hello, world");
});

app.listen(port, () => {
  console.log("honey, im home. riding", port);
});
