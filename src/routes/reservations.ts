import { Router } from "express";
import ReservationController from "../controllers/reservationController";

const reservationRouter = Router();

reservationRouter.get('/', async (req, res) => {
  const response = await ReservationController.index();
  res.json(response);
});

reservationRouter.post('/', async (req, res) => {
  const response = await ReservationController.create(req.body);
  res.json({ ...response, message: "Reservation Created Successfully" });
});

reservationRouter.get('/:id', async (req, res) => {
  const response = await ReservationController.details(req.params.id);
  res.end(JSON.stringify(response));
});

reservationRouter.patch('/:id', (req, res) => {
  const response = ReservationController.update(req.params.id, req.body);
  res.end(JSON.stringify(response));
});

reservationRouter.delete('/:id', (req, res) => {
  const response = ReservationController.destroy(req.params.id);
  res.end(JSON.stringify(response));
});

export default reservationRouter;
