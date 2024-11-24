import { Router } from "express";
import RoomController from "../controllers/roomController";


const roomRouter = Router();

roomRouter.get('/', async (req, res) => {
  const response = await RoomController.index();
  res.json(response);
});

roomRouter.post('/', async (req, res) => {
  const response = await RoomController.create(req.body);
  res.json(response);
});

roomRouter.get('/:id', async (req, res) => {
  const response = await RoomController.details(req.params.id);
  res.json(response);
});

roomRouter.patch('/:id', async (req, res) => {
  const response = await RoomController.update(req.params.id, req.body);
  res.json(response);

});

roomRouter.delete('/:id', async (req, res) => {
  const response = await RoomController.destroy(req.params.id);
  res.json(response);
});

export default roomRouter;
