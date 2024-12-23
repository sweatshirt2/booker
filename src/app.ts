import express, { Request, Response } from "express";
import dotenv from 'dotenv';
import cors from 'cors';

import reservationRouter from './routes/reservations';
import imageRouter from "./routes/images";
import roomRouter from "./routes/rooms";
import userRouter from "./routes/user";
import locationRouter from "./routes/location";
import companyRouter from "./routes/company";

dotenv.config();

if (!process.env.DEV_PORT) {
  throw new Error("Missing development port...");
}

const port = process.env.DEV_PORT;

const app = express();

// handling cors issues - allowing it all currently
app.use(cors());
// encodes the url data into the request object for form submissions
// app.use(express.urlencoded({ extended: true }));

// instead we use this for json data sent over an api
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.body);
  next();
})

app.get('/', (req: Request, res: Response) => {
  res.end(`hello, world from ${req.query.name ?? 'no query name'}`);
  // ? the difference between rs.end and rs.send, s 🤣
});

app.use('/reservations', reservationRouter);
app.use('/rooms', roomRouter);
app.use('/images', imageRouter);
app.use('/users', userRouter);
app.use('/companies', companyRouter);
app.use('/locations', locationRouter);

app.listen(port, () => {
  console.log("honey, im home. riding", port);
});
