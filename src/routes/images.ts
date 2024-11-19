import { Router } from "express";
import ImageController from "../controllers/imageController";

const imageRouter = Router();

imageRouter.get('/', (req, res) => {
  const response = ImageController.index();
  res.end(String(response));
});

imageRouter.post('/', (req, res) => {
  const response = ImageController.create(req.body);
  res.end(JSON.stringify(response));
});

imageRouter.get('/:id', (req, res) => {
  const response = ImageController.details(req.params.id);
  res.end(JSON.stringify(response));
});

imageRouter.patch('/:id', (req, res) => {
  const response = ImageController.update(req.params.id, req.body);
  res.end(JSON.stringify(response));

});

imageRouter.delete('/:id', (req, res) => {
  const response = ImageController.destroy(req.params.id);
  res.end(JSON.stringify(response));
});

export default imageRouter;
