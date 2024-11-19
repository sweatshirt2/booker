import { Router } from "express";
import RoomController from "../controllers/roomController";


const roomRouter = Router();

roomRouter.get('/', (req, res) => {
  const response = RoomController.index();
  res.end(String(response));
});

roomRouter.post('/', (req, res) => {
  const response = RoomController.create(req.body);
  res.end(JSON.stringify(response));
});

roomRouter.get('/:id', (req, res) => {
  const response = RoomController.details(req.params.id);
  res.end(JSON.stringify(response));
});

roomRouter.patch('/:id', (req, res) => {
  const response = RoomController.update(req.params.id, req.body);
  res.end(JSON.stringify(response));

});

roomRouter.delete('/:id', (req, res) => {
  const response = RoomController.destroy(req.params.id);
  res.end(JSON.stringify(response));
});

export default roomRouter;
