import { Router } from "express";
import ReservationController from "../controllers/reservationController";

const reservationRouter = Router();

reservationRouter.get('/', (req, res) => {
  const response = ReservationController.index();
  res.end(String(response));
});

reservationRouter.post('/', (req, res) => {
  const response = ReservationController.create({ customer: 'Bekele' });
  res.end(`create a reservation with the body ${JSON.stringify(req.body)}`);
});

reservationRouter.get('/:id', (req, res) => {
  const response = ReservationController.details(req.params.id);
  res.end(JSON.stringify(response));
});

reservationRouter.patch('/:id', (req, res) => {
  const response = ReservationController.update(req.params.id, { customer: 'Bekele' });
  res.end(JSON.stringify(response));
});

reservationRouter.delete('/:id', (req, res) => {
  const response = ReservationController.destroy(req.params.id);
  res.end(JSON.stringify(response));
});

export default reservationRouter;
